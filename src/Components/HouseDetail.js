import React from 'react';
import { Card } from 'antd';
import { withRouter } from 'react-router';
import HouseDescriptions from './HouseDescriptions';
import UserContext from '../Contexts/User';


class HouseDetail extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = { house :  undefined  }
  }
  
    static contextType = UserContext;
  
  componentDidMount() {
    const Houseid = this.props.match.params.id; // available using withRouter()
    const HouseData =  require('../data/House.json')[Houseid];
    HouseData["User"] = this.context.user;
    this.setState( { house : HouseData });
//     console.log(this.state.UserPermission)
//     fetch(`http://localhost:3030/api/v1/articles/${id}`)
//     .then(status)
//     .then(json)
//     .then(post => {
//       this.setState({post:post})
//     })
//     .catch(err => {
//       console.log(`Fetch error for post ${id}`)
//     });
  }
  

    
  render () {
    if (!this.state.house) { return <h3>Loading Properties...</h3>  }
    const house = this.state.house;
    return (
    <Card style={{marginTop:"5em"}}  title={<h1>{house.title}</h1>}>
    <img src={house.imageURL} alt={"meaning full text"}   style={{width : "40%" , float :"right" ,  marginTop : "46px"   }}/> 
    <section className={"HouseDetailsSection"}>
    <HouseDescriptions {...house}/>        
    </section>
    </Card>
  );}
}

export default withRouter(HouseDetail);
