import React from 'react';
// import { status, json } from '../utilities/requestHandlers.js';
import HouseListJson from '../data/HouseList.json';
import { Link } from "react-router-dom";
import { Card } from 'antd';
const { Meta } = Card;

class PropertiesGrid extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      posts: []
    }
  }

  componentDidMount() {
    this.setState({ posts: HouseListJson })

//     fetch('https://round-job-8000.codio-box.uk/api/v1/property')
//     .then(status)
//     .then(json)
//     .then(data => {
//       this.setState({ posts: data })
//     })
//     .catch(err => console.log("Error fetching articles", err));
  }

  render() {
    if (!this.state.posts.length) {
      return <h3>Loading posts...</h3>
    }
     const cardList = this.state.posts.map(post => {
      return (
        <div class={"IndvidualProperty"} style={{padding:"10px"}} key={post.houseid}>
        <Link to={`/HouseDetail/${post.houseid}`} >
        <Card hoverable extra={post.title}
        cover={<img alt="example" src={post.imageURL} />}>
        <Meta title={post.title} description={post.category} />
        </Card>,
        </Link>
        </div>        
      )
    });
    return cardList;
  }
}

export default PropertiesGrid;