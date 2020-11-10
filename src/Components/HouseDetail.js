import React from 'react';
import { Card } from 'antd';
import HouseDescriptions from './HouseDescriptions';

function HouseDetail( { match } )  {
  
  const Houseid = match.params.id;
  const HouseDetails =  require('../data/House.json')[Houseid]; 
  return (
    <Card title={<h1>{HouseDetails.title}</h1>}>
    <img src={HouseDetails.imageURL} alt={"meaning full text"}   style={{width : "40%" , float :"right" ,  marginTop : "46px"   }}/> 
    <section class={"HouseDetailsSection"}>
    <HouseDescriptions {...HouseDetails}/>        
    </section>
    </Card>
  );
}

export default HouseDetail;



// UserId: 1
// category: "richhouse"
// dateCreated: "2020-11-07T21:11:00.000Z"
// description: "richhouse"
// feature: null
// highpriority: 1
// houseid: 2
// imageURL: "https://cdn.pixabay.com/photo/2016/11/18/17/46/architecture-1836070_960_720.jpg"
// location: "milan"
// offerprice: 541
// title: "richhouse"
// underoffer: 1