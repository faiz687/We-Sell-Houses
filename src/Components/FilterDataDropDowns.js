import React from 'react';
import { Select } from 'antd';
import { Input } from 'antd';
import { Checkbox } from 'antd';
import { Button } from 'antd';

const { Option } = Select;

const CategoryOptions  = [ "flat" , "Detached" ,"Semi-Detached" , "Bunglow" , "Terraced"];
  
const PriceOptions = [ { value :  "< 500" ,  text :  "Less than £500"    } , 
                         { value : "> 500" ,  text :  "More than £500"    },
                         { value : "> 1000" ,  text :  "Less than £1000"    },
                         { value : "< 1000" ,  text :  "More than £1000"    }];

class FilterDataDropDowns extends React.Component { 
  
  constructor(props) {
    super(props)    
    this.state =   { Price : ""  , Category : "", UnderOffer : undefined} ;
    this.PriceDropDownHandle = this.PriceDropDownHandle.bind(this);
    this.CategoryDropDownHandle = this.CategoryDropDownHandle.bind(this);
    this.UnderOfferOnChange = this.UnderOfferOnChange.bind(this);
//     this.LocationEntered = this.LocationEntered.bind(this);
    this.SubmitSearch = this.SubmitSearch.bind(this);  
  }
  
PriceDropDownHandle(value) {
  this.setState({ Price : value });
}
  
CategoryDropDownHandle(value) {
  this.setState({ Category : value });
  }
  
UnderOfferOnChange (e) {
  this.setState({ UnderOffer : e.target.checked });
}
  
// LocationEntered(value) {
//   this.setState({ Location : this.state.Location +  value.nativeEvent.srcElement.defaultValue });
//   } 
  
SubmitSearch(e) {
  let Query = Object.keys(this.state).map( a => a + "=" + this.state[a]).join('&');
  const locationvalue =  document.querySelector("#locationinput").value
  Query = Query+"&location="+locationvalue
  this.props.QueryChangeMethod(Query)
  }
  
  render() {
    
  const CategroryDropDown = () => {  
  const DropDownoptions = CategoryOptions.map( option => {     
  return <Option value={option}>{option}</Option>    
 });    
  return <Select defaultValue="Category" className="filterdataGrid" onChange={this.CategoryDropDownHandle}> {DropDownoptions}</Select>    
}
  
  const PriceDropDown = () => {  
  const DropDownoptions = PriceOptions.map( option => {
    return <Option value={option.value}>{option.text}</Option>
});
  return <Select defaultValue="Price" className="filterdataGrid" onChange={this.PriceDropDownHandle}> {DropDownoptions}</Select>    
}

  return ( <div> {CategroryDropDown()} 
                 {PriceDropDown()} 
                 <Input id="locationinput" placeholder="Search by Location" className={"filterdataGrid"} /> 
                 <Checkbox onChange={this.UnderOfferOnChange} className="filterdataGrid" >Under Offer</Checkbox>
                 <Button type="primary" className="filterdataGrid" id="submitsearchbutton" onClick={this.SubmitSearch}>Search</Button>
          </div> );


  }
}
export default FilterDataDropDowns;