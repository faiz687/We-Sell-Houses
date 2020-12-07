import React from 'react';
import { List } from 'antd';

function HouseFeatures(propss) {
  
  let featurelist = propss.props.feature.split(',');
  
  let Edit = propss.state.Edit

  return (

    <List size="small" dataSource={featurelist} renderItem={item => <List.Item> <p className="ptags" id="features" contentEditable={Edit} >{item}</p></List.Item> } />    
    
    );
}

export default HouseFeatures;