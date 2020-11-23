import React from 'react';
import { Select } from 'antd';
const { Option } = Select;

function HouseCategory(props) {

  return (
          <Select placeholder="Select a Category" onChange={props.OnChange}  allowClear>
              <Option value="Apartment">Apartment</Option>
              <Option value="Flat">Flat</Option>
              <Option value="Detached">Detached</Option>
              <Option value="Bunglow">Bunglow</Option>
              <Option value="Semi-Detached">Semi-Detached</Option>
          </Select> 
          );
}

export default HouseCategory;