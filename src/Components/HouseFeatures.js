import React from 'react';
import { List } from 'antd';

function HouseFeatures(props) {
  
  const Edit = (props["edit"])

  const data = Object.values(props)                                           
    
  return (

    <List size="small" dataSource={data} renderItem={item => <List.Item> <p className="ptags" id="features" contentEditable={Edit} >{item}</p></List.Item> } />    
    
    );
}

export default HouseFeatures;