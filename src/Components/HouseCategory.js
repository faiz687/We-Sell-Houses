import React from 'react';
import { Select } from 'antd';
const { Option } = Select;


function HouseCategory(props) {
  
  
  console.log("this is props")
  console.log(props)
  const p = props.parentMethod.OnCategoryChange()

  

  
  
                                        
  return (
                  <Select placeholder="Select a Category" onChange={p} allowClear>
                <Option value="Apartment">Apartment</Option>
                <Option value="Flat">Flat</Option>
                <Option value="Detached">Detached</Option>
                <Option value="Bunglow">Bunglow</Option>
                <Option value="Semi-Detached">Semi-Detached</Option>
              </Select> 
    
        
    );
}

export default HouseCategory;