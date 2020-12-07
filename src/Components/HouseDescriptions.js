import React from 'react';
import { Descriptions } from 'antd';
import HouseFeatures from './HouseFeatures.js';
// import { withRouter } from 'react-router';
import { Checkbox } from 'antd';
import { Button } from 'antd';
import UserContext from '../Contexts/User';
import { status, json } from '../utilities/requestHandlers';

class HouseDescriptions extends React.Component { 
  
  
  constructor(props) {
    super(props)
    this.state = {  Edit : false };
    this.RenderSubmitButton = this.RenderSubmitButton.bind(this);
    this.RenderAllButtons = this.RenderAllButtons.bind(this);
    this.SubmitButtonClicked = this.SubmitButtonClicked.bind(this);
    this.EditButtonClicked = this.EditButtonClicked.bind(this);
    this.DeleteButtonClicked = this.DeleteButtonClicked.bind(this);
    this.ChangeUnderOffer = this.ChangeUnderOffer.bind(this);
    this.ChangePriority = this.ChangePriority.bind(this);
  }
  
  static contextType = UserContext;
      
  SubmitButtonClicked() {    
    let  Featurelist = []        
    const AllValues = {}  
    let Inputvalues = document.getElementsByClassName('ptags');
    for (var i = 0 ; i < Inputvalues.length; i++) {      
      if ( Inputvalues[i].id  === "features" ) {        
        Featurelist.push(Inputvalues[i].textContent)        
        } else{
          if ([Inputvalues[i].id] == "offerprice"){            
            let offerprice = parseInt(Inputvalues[i].textContent.replace("£",""))
            AllValues[Inputvalues[i].id]  =  offerprice;
            
          } else {
            AllValues[Inputvalues[i].id]  =  Inputvalues[i].textContent;
          }
          
        }              
    }
    AllValues.feature =  Featurelist
    const underoffer = document.querySelector("#underoffer")
    const highpriority = document.querySelector("#highpriority")
    AllValues.underoffer = underoffer.checked
    AllValues.highpriority = highpriority.checked    
    delete AllValues[""];
    fetch('https://round-job-3000.codio-box.uk/api/v1/property/'+this.props.houseid, {
            method: "PUT",
            body: JSON.stringify(AllValues),
            headers: {
                "Authorization": "Basic " + btoa(this.context.user.Name + ":" + this.context.user.password),
                "Content-Type": "application/json"                
            }        
        })
    .then(status)
    .then(json)
    .then(user => {
        alert("Your Property has been updated")
    })
    .catch(error => {
      
       console.log(error)
       alert(error)
       alert('Property cannot be added, please try again later')
       // use switch here and show error according to status codes or message appropriately.
    }); 
    
  }
  
  EditButtonClicked() {
    if  ( this.state.Edit === true  ) {       
      this.setState({ Edit : false });     
    } else {      
      this.setState( { Edit : true }  );     
    }
  }
  
  DeleteButtonClicked() {
    fetch('https://round-job-3000.codio-box.uk/api/v1/property/'+this.props.houseid, {
            method: "DELETE",
            headers: {
                "Authorization": "Basic " + btoa(this.context.user.Name + ":" + this.context.user.password)}        
        })
    .then(status)
    .then(json)
    .then(user => {
        alert("Your Property has been Deleted")
    })
    .catch(error => {
      console.log("error")
       console.log(error)
       alert(error)
       alert('Property cannot be Deleted, please try again later')
       // use switch here and show error according to status codes or message appropriately.
    }); 
  }
  
  ChangePriority(e) {
  console.log(`checked = ${e.target.checked}`);
}
  
  ChangeUnderOffer(e) {
  console.log(`checked = ${e.target.checked}`);
}
  
  RenderAllButtons() {
    if(this.context.user.loggedIn){
      return (
        <>
        < Button type="primary"  onClick={this.EditButtonClicked} style={{float:"right" , fontWeight: "600" , margin:"10px" }}>Edit Details</Button>
        <Button type="primary"  onClick={this.DeleteButtonClicked} style={{float:"right" , fontWeight: "600" , margin:"10px" , background:"#ff0000" , border:"#ff0000"}}>Delete House</Button>
        </>)
    }   
  }
  
  RenderSubmitButton() {  
    if(this.state.Edit === true) {
      return (< Button type="primary"  onClick={this.SubmitButtonClicked} style={{float:"right" , fontWeight: "600"  , marginTop: "10px"}}>Update Details</Button>)
    }   
}
  
  render() {
    
    const IsUnderOffer = this.props.underoffer;
    
    const HighPriority = this.props.highpriority;
    
    const EditingMode = this.state.Edit ;
    
    return (             
        <div>
        {this.RenderAllButtons()}
        <Descriptions title={<p className="ptags" id="Title" contentEditable={EditingMode}>{ this.props.title} </p>} layout="vertical" bordered>
        <Descriptions.Item label="Description" span={3}><p className="ptags" id="description" contentEditable={EditingMode}>{ this.props.description }</p></Descriptions.Item>
        <Descriptions.Item label="Category"><p className="ptags" id="category"  contentEditable={EditingMode}>{this.props.category}</p></Descriptions.Item >
        <Descriptions.Item label="location"><p className="ptags" id="location" contentEditable={EditingMode}>{this.props.location}</p></Descriptions.Item>
        <Descriptions.Item label="Offering Price"><p className="ptags" id="offerprice" contentEditable={EditingMode}>{"£"+this.props.offerprice}</p></Descriptions.Item>
        <Descriptions.Item label="Features" span={3}>
        <HouseFeatures {...this}/>
        </Descriptions.Item>        
        <Descriptions.Item label="Under offer" span={1}>
        <Checkbox onChange={this.ChangeUnderOffer} className="ptags" id="underoffer" defaultChecked={ IsUnderOffer ? true : false } disabled={!EditingMode} ></Checkbox><p style={{display:"inline" , marginLeft:"10px" , fontWeight: 400 }}>{ IsUnderOffer ? "YES" : "NO"  }</p>
        </Descriptions.Item>
        <Descriptions.Item label="Property Priority" span={2}>
        <Checkbox onChange={this.ChangePriority} className="ptags" id="highpriority" defaultChecked={ HighPriority ? true : false } disabled={!EditingMode} ></Checkbox><p style={{display:"inline" , marginLeft:"10px" , fontWeight: 400 }}>{ HighPriority ? "High priority - Immediate Buyer Required" : "Low priority" }</p>
        </Descriptions.Item>
        </Descriptions>
        {this.RenderSubmitButton()}
        </div>
        );
    }
}

export default HouseDescriptions;

