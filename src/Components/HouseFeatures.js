import React from 'react';
import { List } from 'antd';
import { Typography } from 'antd';
const { Paragraph } = Typography;


function HouseFeatures(props) {
  
  
  const data = Object.values(props)
  
  let edit = false;
  
  if (props.edit == true){
    
    edit = true
    
  }
  
  
  return (
    
    <List size="small" dataSource={data} renderItem={item => <List.Item><Paragraph editable={edit} style={{marginTop:"5px"}}>{item}</Paragraph></List.Item> } />    
    
    );
}

export default HouseFeatures;