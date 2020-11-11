import React from 'react';
import { Card } from 'antd';
import { Form ,  Input  , Button} from 'antd';
import { status, json } from '../utilities/requestHandlers';


function RegisterPage(props) {
  
  
const layout = { labelCol: { span: 4 }, wrapperCol: { span: 15 }, };
  
const tailLayout = { wrapperCol: { offset: 4, span: 15 }, };
  
  const onFinish = values => {    
    console.log('Received values of form: ', values);
    const { Signupcode, ...data } = values;
    fetch('https://general-mexico-8000.codio-box.uk/api/v1/users', {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
             "Content-Type": "application/json",
         }             
    })
    .then(status)
    .then(json)
    .then(data => {
        console.log(data);
        alert("User added")
    })
    .catch(error => {
      console.log("this is the error")
        console.log(error)
        alert(`Error: ${JSON.stringify(error)}`);
    });
  };

  const CheckCode = (rule, value) => {
    if (value === " ") {
      return Promise.resolve();
    }
    return Promise.reject('Invalid Code!');
  };
  
  return (    
    <Card title="Estate Agents Register Here">    
    <Form size="small" {...layout} onFinish={onFinish} scrollToFirstError>
    <Form.Item label="User Name" name="username" rules={[{ required: true , message: 'Please input your username!' }]}>
    <Input/>
    </Form.Item>
    <Form.Item label="User Email" name="email" rules={[{ required: true , message: 'Please input your Email!' },{ type: 'email' }]}>
    <Input/>
    </Form.Item>
    <Form.Item label="Password" name="password" rules={[{ required: true, message: 'Please input your password!' }]}>
    <Input.Password />
    </Form.Item>
    <Form.Item label="Sign up code" name="Signupcode" rules={[{ required: true, message: 'Please input a Sign up code!'},{ validator: CheckCode }]}>
    <Input />
    </Form.Item>
    <Form.Item {...tailLayout}>
    <Button type="primary" htmlType="submit">Submit</Button>
    </Form.Item>
    </Form>    
    </Card>
  );
}

export default RegisterPage;