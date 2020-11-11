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

