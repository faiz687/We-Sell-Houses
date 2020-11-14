import React from 'react';
import { Card } from 'antd';
import { Form, Input, Button  } from 'antd';
import { status, json } from '../utilities/requestHandlers';

const layout = { labelCol : { span: 4 } ,  wrapperCol : { span: 15 }, };
  
const tailLayout = { wrapperCol: { offset: 4 , span: 15 } , };
  
const EmailRules =  [ {  type : "email" ,  message: 'Invalid email!'   },    { required: true , message: 'Please enter your Email!' }  ] ;
  
const PasswordRules =  [ { required: true , message: 'Please enter ypur password!' }  ] ;


class Login extends React.Component { 
  
  constructor(props) {
    super(props)
    this.onFinish = this.onFinish.bind(this);
  }
  
  onFinish = values => {
      
        const {email, password} = values;
  
        fetch('http://localhost:3030/api/v1/users/Login', {
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
            // TODO: show nicely formatted error message
            console.log('Login failed');
        });
    
    };
  
  render() {
    return (
        <Card title="Login" className={"CardClass"} >
        <Form {...layout}  name="basic" size="small"  initialValues={{ remember: true }}  onFinish={this.onFinish} >
        <Form.Item label="Email"  name="email" rules={EmailRules}>
        <Input />
        </Form.Item>
        <Form.Item label="Password" name="password" rules={PasswordRules}>
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