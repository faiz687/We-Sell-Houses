import React from 'react';
import { Select } from 'antd';
const { Option } = Select;


function FilterDataDropDowns(props) {
  
const CategoryOptions  = [ "flat" , "Detached" ,"Semi-Detached" , "Bunglow" , "Terraced"];
  
const PriceOptions = [ { value : "< 500" ,  text :  "Less than £500"    } , 
                         { value : "> 500" ,  text :  "More than £500"    },
                         { value : "> 1000" ,  text :  "Less than £1000"    },
                         { value : "< 1000" ,  text :  "More than £1000"    }];

function PriceDropDownHandle(value) {
  
  console.log(`selected ${value}`);
    
}
  
function CategoryDropDownHandle(value) {
  
  console.log(`selected ${value}`);
    
}
  
const CategroryDropDown = () => {  
  const DropDownoptions = CategoryOptions.map( option => {     
    return <Option value={option}>{option}</Option>    
 });    
  return <Select defaultValue="Category" style={{ width: 150 , margin : "10px" }} onChange={CategoryDropDownHandle}> {DropDownoptions}</Select>    
}

const PriceDropDown = () => {  
  const DropDownoptions = PriceOptions.map( option => {
    return <Option value={option.value}>{option.text}</Option>
});
  return <Select defaultValue="Price" style={{ width: 150  , margin : "10px" }} onChange={PriceDropDownHandle}> {DropDownoptions}</Select>    
}
  
  
return (
    
  <div> {CategroryDropDown()} {PriceDropDown()} </div>
  );
}

export default FilterDataDropDowns;