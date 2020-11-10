import React from 'react';
import { List } from 'antd';

function HouseFeatures(props) {
  
  const data = Object.values(props)
  
  return (
    
    <List size="small" dataSource={data} renderItem={item =>  <List.Item>{item}</List.Item> } />    
    
    );
}

export default HouseFeatures;