import React from 'react';
import  { useState } from 'react';
import { Descriptions, Badge } from 'antd';
import HouseFeatures from './HouseFeatures.js';
import { Typography } from 'antd';
import { Checkbox } from 'antd';
import { Button } from 'antd';
import { Table, Input, InputNumber, Popconfirm, Form } from 'antd';
const { Paragraph } = Typography;



class HouseDescriptions extends React.Component { 
  
  constructor(props) {
    super(props)
    this.state = { UserPermission : false  ,  Edit : false };
    if (this.props.User.loggedIn  ===  true  && (this.props.User.UserId  ===  props.UserId) ) {
      this.state.UserPermission =  true  ; 
    } 
    this.RenderSubmitButton = this.RenderSubmitButton.bind(this);
    this.RenderEditButton = this.RenderEditButton.bind(this);
    this.SubmitButtonClicked = this.SubmitButtonClicked.bind(this);
    this.EditButtonClicked = this.EditButtonClicked.bind(this);
    this.ChangeUnderOffer = this.ChangeUnderOffer.bind(this);
    this.ChangePriority = this.ChangePriority.bind(this);

  }
  
  SubmitButtonClicked() {    
    let  Featurelist = []        
    const AllValues = {}  
    let Inputvalues = document.getElementsByClassName('ptags');    
    for (var i = 0 ; i < Inputvalues.length; i++) {      
      if ( Inputvalues[i].id  == "features" ) {        
        Featurelist.push(Inputvalues[i].textContent)        
        } else{
          AllValues[Inputvalues[i].id ]  =  Inputvalues[i].textContent
        }              
    }
    AllValues.features =  Featurelist

      
  }
  
  EditButtonClicked() {
    if  ( this.state.Edit == true  ) { 
      
      this.setState({ Edit : false });
      this.props.feature.edit = false;
      
    } else {
      
      this.setState( { Edit : true }  );
      this.props.feature.edit = true;
      
    }
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
  
  RenderSubmitButton() {  
    if(this.state.UserPermission &&  (this.state.Edit == true) ) {
      return (< Button type="primary"  onClick={this.SubmitButtonClicked} style={{float:"right" , fontWeight: "600"  , marginTop: "10px"}}>Update Details</Button>)
    }   
}


  
  render() {
    
    const IsUnderOffer = this.props.underoffer;
    
    const HighPriority = this.props.highpriority;
    
    const EditingMode = this.state.Edit ;
    
    return (             
        <div>
        {this.RenderEditButton()}
        <Descriptions title={<p className="ptags" id="name" contentEditable={EditingMode}>{ this.props.title + this.props.houseid  } </p>} layout="vertical" bordered>
        <Descriptions.Item label="Description" span={3}><p className="ptags" id="description" contentEditable={EditingMode}>{ this.props.description }</p></Descriptions.Item>
        <Descriptions.Item label="Category"><p className="ptags" id="category"  contentEditable={EditingMode}>{this.props.category}</p></Descriptions.Item >
        <Descriptions.Item label="location"><p className="ptags" id="location" contentEditable={EditingMode}>{this.props.location}</p></Descriptions.Item>
        <Descriptions.Item label="Offering Price"><p className="ptags" id="offerprice" contentEditable={EditingMode}>{"£"+this.props.offerprice}</p></Descriptions.Item>
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
        {this.RenderSubmitButton()}
        </div>
        );
    }
}

export default HouseDescriptions;

