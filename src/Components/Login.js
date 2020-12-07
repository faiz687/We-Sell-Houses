import React from 'react';
import { Card } from 'antd';
import { Form, Input, Button  } from 'antd';
import { status, json } from '../utilities/requestHandlers';
import UserContext from '../Contexts/User';


const layout = { labelCol : { span: 4 } ,  wrapperCol : { span: 15 }, };
  
const tailLayout = { wrapperCol: { offset: 4 , span: 15 } , };
  
const UsernameRules =  [  { required: true , message: 'Please enter your Username !' }  ] ;
  
const PasswordRules =  [ { required: true , message: 'Please enter your assword !' }  ] ;


class Login extends React.Component { 
  
  constructor(props) {
    super(props)
    this.onFinish = this.onFinish.bind(this);
  }
  
  static contextType = UserContext;
  
  onFinish = values => {
    let {Username , Password} = values;
     fetch('https://round-job-3000.codio-box.uk/api/v1/users/Login', {
            method: "POST",
            headers: {
                "Authorization": "Basic " + btoa(Username + ":" + Password)
            }        
        })
    .then(status)
    .then(json)
    .then(user => {
        user.password  =  Password // use token based authentication to not save passwords.
        this.context.login(user);
        alert("Login successful")
    })
    .catch(error => {
         alert("Login failed : Incorrect username or password")
    });    
    };
  
  render() {
    return (
        <Card title="Login" className={"CardClass"} >
        <Form {...layout}  name="basic" size="middle"  initialValues={{ remember: true }}  onFinish={this.onFinish} >
        <Form.Item label="Username"  name="Username" rules={UsernameRules}>
        <Input />
        </Form.Item>
        <Form.Item label="Password" name="Password" rules={PasswordRules}>
        <Input.Password />
        </Form.Item>
        <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">Login</Button>
        </Form.Item>
        </Form>
        </Card>
     );
  }

}

export default Login;