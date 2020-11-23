import React from 'react';
import { Card } from 'antd';
import { Form, Input, Button  } from 'antd';
import { status, json } from '../utilities/requestHandlers';
import HouseCategory from './HouseCategory';
import UserContext from '../Contexts/User';


const layout = { labelCol : { span: 4 } ,  wrapperCol : { span: 15 }, };
  
const tailLayout = { wrapperCol: { offset: 4 , span: 15 } , };


class RegisterHouse extends React.Component { 
  
  constructor(props) {
    super(props)
    this.onFinish = this.onFinish.bind(this);
    this.OnCategoryChange = this.OnCategoryChange.bind(this);
  }
  
  OnCategoryChange = value => {
    
    console.log("on category change being called")
      
  }
  
  
  onFinish = values => {    
    const {email, password} = values;
     fetch('https://round-job-8000.codio-box.uk/api/v1/users/Login', {
            method: "POST",
            headers: {
                "Authorization": "Basic " + btoa(email + ":" + password)
            }        
        })
    .then(status)
    .then(json)
    .then(user => {
        console.log('Logged in successfully');
        console.log(user);
        this.context.login(user);
    })
    .catch(error => {
         console.log(error)
        // TODO: show nicely formatted error message
        console.log('Login failed');
    });    
    };
  
  render() {
    return (
        <Card title="Register House" className={"CardClass"} >
          <Form {...layout}  name="basic" size="middle"  initialValues={{ remember: true }}  onFinish={this.onFinish} >
            <Form.Item label="House Title"  name="title" ><Input /></Form.Item>
            <Form.Item name="description" label="Describe House"><Input.TextArea style={{ height:"7em"}} /></Form.Item>
            <Form.Item label="Category"  name="category" >
              <HouseCategory parentMethod={this.OnCategoryChange}/>
            </Form.Item>
            <Form.Item >
              <Button type="primary" htmlType="submit">Login</Button>
            </Form.Item>
          </Form>
        </Card>
     );
  }

}




export default RegisterHouse;