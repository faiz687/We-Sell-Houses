import React from 'react';
import { Card } from 'antd';
import { withRouter } from 'react-router';
import HouseDescriptions from './HouseDescriptions';
import UserContext from '../Contexts/User';
import { status, json } from '../utilities/requestHandlers.js';


class HouseDetail extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = { house :  undefined  }
  }
  
  static contextType = UserContext;
  
  componentDidMount() {
    const Houseid = this.props.match.params.id;
    fetch(`https://round-job-3000.codio-box.uk/api/v1/property/${Houseid}`,{
       method: "GET",
       headers: { "Content-Type": "application/json"} })
    .then(status)
    .then(json)
    .then(data => {
      this.setState( { house : data } )
    })
    .catch(err => {
      alert("erroor : "+err)
    });    
  }
  

    
  render () {
    
    if (!this.state.house) { return <h3>Loading Properties...</h3>  }
    const house = this.state.house;
    return (
    <Card style={{marginTop:"5em"}}  title={<h1>{house.title}</h1>}>
    <img src={house.imageURL} alt={"meaning full text"}   style={{width : "40%" , float :"right" ,  marginTop : "-2%"   }}/> 
    <section className={"HouseDetailsSection"}>
    <HouseDescriptions {...house}/>        
    </section>
    </Card>
  );}
}

export default withRouter(HouseDetail);
