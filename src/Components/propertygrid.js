import React from 'react';
import { Pagination } from 'antd';
import { status, json } from '../utilities/requestHandlers.js';
import { Link } from "react-router-dom";
import { Card } from 'antd';
const { Meta } = Card;

class PropertiesGrid extends React.Component {

  constructor(props) {
    super(props);
    this.state = { Houses: [] , HousesCount : 0 }

  }

  componentDidMount() {
        
    fetch('https://round-job-8000.codio-box.uk/api/v1/property')
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
      const pages = Math.ceil(this.state.HousesCount/9);
      return  <div className="Paginationclass"> <Pagination defaultCurrent={1} total={pages} /> </div> 
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