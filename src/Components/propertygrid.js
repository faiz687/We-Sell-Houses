import React from 'react';
import { Pagination } from 'antd';
import { status, json } from '../utilities/requestHandlers.js';
import { Link } from "react-router-dom";
import { Card } from 'antd';
const { Meta } = Card;

class PropertiesGrid extends React.Component {

  constructor(props) {
    super(props);
    this.state = { Houses: [] , HousesCount : 0  , page :  1 ,  limit : 8 , Query : ""}
    this.OnPageChange = this.OnPageChange.bind(this);
  }
  
  OnQueryChange(NewQuery) {
      console.log(NewQuery)
      this.setState({ Query : NewQuery })
  }
  
  
  OnPageChange(RequestedPage,PageSize) {
     this.setState({ page : RequestedPage }) 
      
  }
  
  
  SubmitClicked(NewQuery) { 
    this.setState({ Query : NewQuery })  
  }
  
  
  componentDidUpdate(prevProps,previoustate,Snapshot) {
    
      if (this.state.page!== previoustate.page) {
        fetch('https://round-job-8000.codio-box.uk/api/v1/property?page='+this.state.page+'&limit='+this.state.limit)                               
        .then(status)
        .then(json)
        .then(data => {
        this.setState({ Houses: data })
        })
        .catch(err => console.log("Error fetching articles", err));
      }
    
    if (this.state.Query!== previoustate.Query) {
        fetch('https://round-job-8000.codio-box.uk/api/v1/property?page='+this.state.page+'&limit='+this.state.limit+'&'+this.state.Query)
        .then(status)
        .then(json)
        .then(data => {
        this.setState({ Houses: data })
        })
        .catch(err => console.log("Error fetching articles", err));
      }        
  }
  


  componentDidMount() {
  
    fetch('https://round-job-8000.codio-box.uk/api/v1/property?page='+this.state.page+'&limit='+this.state.limit)
    .then(status)
    .then(json)
    .then(data => {
      this.setState({ Houses: data })
    })
    .catch(err => console.log("Error fetching articles", err));
    
    
    fetch('https://round-job-8000.codio-box.uk/api/v1/property/TotalProperty')
    .then(status)
    .then(json)
    .then(data => {
      this.setState({ HousesCount: data.TotalHouses[0].totalhouse} )
    })
    .catch(err => console.log("Error fetching articles", err));
    
    
  }
  
  render() {
      
    const Paginationn = () => { 
      return  (<div className="Paginationclass"> <Pagination current={this.state.page} 
                onChange={this.OnPageChange} total={this.state.HousesCount} pageSize={this.state.limit}/></div>)
}
    
    if (!this.state.Houses.length) {
      return <h3>Loading posts...</h3>
    }
     const cardList = this.state.Houses.map(post => {
      return (        
        <div className="IndvidualProperty" style={{padding:"10px"}} key={post.houseid}>
        <Link to={`/HouseDetail/${post.houseid}`} >
        <Card hoverable extra={post.title}
        cover={<img alt="example" src={post.imageURL} />}>
        <Meta title={post.title} description={post.category} />
        </Card>
        </Link>
        </div>        
      )
    });
   return (<section class="PropertyGridClass"> {cardList} {Paginationn()} </section>  );
  }
}

export default PropertiesGrid;