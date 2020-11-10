import React from 'react';
import { Descriptions, Badge } from 'antd';
import HouseFeatures from './HouseFeatures.js';


function HouseDescriptions(props) {
const IsUnderOffer = props.underoffer;
const HighPriority = props.highpriority;
  return (
    <Descriptions title={props.title + props.houseid} layout="vertical" bordered>
    <Descriptions.Item label="Description" span={3}>{props.description}</Descriptions.Item>
    <Descriptions.Item label="Category">{props.category}</Descriptions.Item >
    <Descriptions.Item label="location">{props.location}</Descriptions.Item>
    <Descriptions.Item label="Offering Price">{"£"+props.offerprice}</Descriptions.Item>
    <Descriptions.Item label="Features" span={3}>
    <HouseFeatures {...props.feature}/>
    </Descriptions.Item>        
    <Descriptions.Item label="Under offer" span={1}>
    <Badge status={  IsUnderOffer  ? "success" : "error" } text={  IsUnderOffer ? "YES" : "NO" } />
    </Descriptions.Item>
    <Descriptions.Item label="Property Priority" span={2}>
    <Badge status={  HighPriority  ? "success" : "error" } text={  HighPriority ? "High priority - Immediate Buyer Required" : "Low priority" } />
    </Descriptions.Item>
    </Descriptions>  
  );
}

export default HouseDescriptions;

