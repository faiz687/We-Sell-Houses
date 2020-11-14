import React from 'react';
import { Select } from 'antd';
const { Option } = Select;

const CategoryOptions  = [ "flat" , "Detached" ,"Semi-Detached" , "Bunglow" , "Terraced"];
  
const PriceOptions = [ { value : "< 500" ,  text :  "Less than £500"    } , 
                         { value : "> 500" ,  text :  "More than £500"    },
                         { value : "> 1000" ,  text :  "Less than £1000"    },
                         { value : "< 1000" ,  text :  "More than £1000"    }];

class FilterDataDropDowns extends React.Component { 
  
  constructor(props) {
    super(props)
    this.PriceDropDownHandle = this.PriceDropDownHandle.bind(this);
    this.CategoryDropDownHandle = this.CategoryDropDownHandle.bind(this);
  
  }
  
  PriceDropDownHandle(value) {
  
  console.log(`selected ${value}`);
  
  
  }
  
  CategoryDropDownHandle(value) {
  
  console.log(`selected ${value}`);
  
  }
  
  render() {
    
  const CategroryDropDown = () => {  
  const DropDownoptions = CategoryOptions.map( option => {     
    return <Option value={option}>{option}</Option>    
 });    
  return <Select defaultValue="Category" style={{ width: 150 , margin : "10px" }} onChange={this.CategoryDropDownHandle}> {DropDownoptions}</Select>    
}
  
  const PriceDropDown = () => {  
  const DropDownoptions = PriceOptions.map( option => {
    return <Option value={option.value}>{option.text}</Option>
});
  return <Select defaultValue="Price" style={{ width: 150  , margin : "10px" }} onChange={this.PriceDropDownHandle}> {DropDownoptions}</Select>    
}
    
  return ( <div> {CategroryDropDown()} {PriceDropDown()} </div> );

}

}


export default FilterDataDropDowns;