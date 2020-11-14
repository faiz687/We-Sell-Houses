import React from 'react';
import { Descriptions, Badge } from 'antd';
import HouseFeatures from './HouseFeatures.js';
import { Typography } from 'antd';
import { Checkbox } from 'antd';
import { Button } from 'antd';
const { Paragraph } = Typography;


class HouseDescriptions extends React.Component { 
  
  constructor(props) {
    super(props)
    this.state = { UserPermission : false  ,  Edit : false };
    if (this.props.User.loggedIn  ===  true  && (this.props.User.UserId  ===  props.UserId) ) {
      this.state.UserPermission =  true  ; 
    } 
    this.RenderEditButton = this.RenderEditButton.bind(this);
    this.EditButtonClicked = this.EditButtonClicked.bind(this);
    this.ChangeUnderOffer = this.ChangeUnderOffer.bind(this);
    this.ChangePriority = this.ChangePriority.bind(this);
  }
  
  async EditButtonClicked() {    
    this.setState( { Edit : true }  );
    this.props.feature.edit = true;
  }
  
  
  ChangePriority(e) {
  console.log(`checked = ${e.target.checked}`);
}
  
  ChangeUnderOffer(e) {
  console.log(`checked = ${e.target.checked}`);
}
  
   
  RenderEditButton() {
    
    if(this.state.UserPermission){
      return (< Button type="primary"  onClick={this.EditButtonClicked} style={{float:"right" , fontWeight: "600" }}>Edit Details</Button>)
    }   
  }
 
  render() {
    
    
    const IsUnderOffer = this.props.underoffer;
    
    const HighPriority = this.props.highpriority;
    
    const EditingMode = this.state.Edit ;
  

    return ( 
        <div>
        {this.RenderEditButton()}
        <Descriptions  title={<Paragraph editable={EditingMode}>{this.props.title + this.props.houseid }</Paragraph>} layout="vertical" bordered>
        <Descriptions.Item label="Description" span={3}><Paragraph editable={EditingMode}>{this.props.description}</Paragraph></Descriptions.Item>
        <Descriptions.Item label="Category"><Paragraph editable={EditingMode}>{this.props.category}</Paragraph></Descriptions.Item >
        <Descriptions.Item label="location"><Paragraph editable={EditingMode}>{this.props.location}</Paragraph></Descriptions.Item>
        <Descriptions.Item label="Offering Price"><Paragraph editable={EditingMode}>{"£"+this.props.offerprice}</Paragraph></Descriptions.Item>
        <Descriptions.Item label="Features" span={3}>
        <HouseFeatures {...this.props.feature}/>
        </Descriptions.Item>        
        <Descriptions.Item label="Under offer" span={1}>
        <Checkbox onChange={this.ChangeUnderOffer} defaultChecked={ IsUnderOffer ? true : false } disabled={!EditingMode} ></Checkbox><p style={{display:"inline" , marginLeft:"10px" , fontWeight: 400 }}>{ IsUnderOffer ? "YES" : "NO"  }</p>
        </Descriptions.Item>
        <Descriptions.Item label="Property Priority" span={2}>
        <Checkbox onChange={this.ChangePriority} defaultChecked={ HighPriority ? true : false } disabled={!EditingMode} ></Checkbox><p style={{display:"inline" , marginLeft:"10px" , fontWeight: 400 }}>{ HighPriority ? "High priority - Immediate Buyer Required" : "Low priority" }</p>
        </Descriptions.Item>
        </Descriptions>
        </div>
        );
    }
}

export default HouseDescriptions;

