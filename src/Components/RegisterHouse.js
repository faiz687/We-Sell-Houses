import React from 'react';
import { Image } from 'antd';
import { Card } from 'antd';
import { Form, Input, Button , Upload  , InputNumber } from 'antd';
import { Checkbox } from 'antd';
import { status, json } from '../utilities/requestHandlers';
import HouseCategory from './HouseCategory';
import HouseFormFeatures from './HouseFormFeatures';
import UserContext from '../Contexts/User';

const Rules=[{ required: true, message: 'Incomplete Field' }]

const layout = { labelCol : { span: 4 } ,  wrapperCol : { span: 15 }, };

class RegisterHouse extends React.Component { 
  
  static contextType = UserContext;
  
  constructor(props) {
    super(props)
    this.state ={ HouseImage : undefined };
    this.formRef = React.createRef();
    this.onFinish = this.onFinish.bind(this);
    this.OnCategoryChange = this.OnCategoryChange.bind(this);
    this.CheckFeatures = this.CheckFeatures.bind(this);
    this.UploadImage = this.UploadImage.bind(this);
  }
  
  UploadImage =  e => {    
    this.setState({ HouseImage : e.fileList[0]})
  };
  
  OnCategoryChange = value => {
    this.formRef.current.setFieldsValue({ category : value});    
  }

  CheckFeatures = async (_, HouseFeatures) => {
    if (!HouseFeatures || HouseFeatures.length < 2){
      return Promise.reject(new Error('At least 2 Features'));
    }
  }

  onFinish = async (values) => {  
     const feature = values.feature.map(x => x.first);
     values.feature = feature
     values.UserId =  this.context.user.UserId
     values.HouseImage =  this.state.HouseImage 
     console.log(values)

     fetch('https://round-job-8000.codio-box.uk/api/v1/property', {
            method: "POST",
            body: JSON.stringify(values),
            headers: {
                "Authorization": "Basic " + btoa(this.context.user.Username + ":" + this.context.user.Password),
                "Content-Type": "application/json"                
            }        
        })
    .then(status)
    .then(json)
    .then(user => {
        console.log('Property added successfully');
    })
    .catch(error => {
         console.log(error)
        // TODO: show nicely formatted error message
        console.log('Property cannot be added');
    });    
     };
  
  render() {
    return (
        <Card title="Register House" className={"CardClass"} >
          <Form {...layout} ref={this.formRef}  className={"RegisterPropertyClass"}  name="basic" size="middle"  initialValues={{ remember: true }}  onFinish={this.onFinish} >
            <Form.Item label="House Title" rules={Rules}  name="Title" ><Input /></Form.Item>
            <Form.Item name="description" rules={Rules} label="Describe House"><Input.TextArea style={{ height:"7em"}} /></Form.Item>
            <Form.Item label="Category" rules={Rules} name="category" >
              <HouseCategory OnChange={this.OnCategoryChange}/>
            </Form.Item>
            <HouseFormFeatures/>
            <Form.Item name="offerprice" rules={Rules} label="Asking Price"><InputNumber /></Form.Item>
            <Form.Item name="location"  rules={Rules} label="Location"><Input /></Form.Item>
            <Form.Item name="underoffer"  label="Under Offer" valuePropName="checked" initialValue ><Checkbox   /></Form.Item>
            <Form.Item name="highpriority"  label="High Priority" valuePropName="checked" initialValue ><Checkbox   /></Form.Item>
            <Form.Item name="Activated"  label="Archive" valuePropName="checked" initialValue ><Checkbox   /></Form.Item>
            <Form.Item name="HouseImage" label="Upload Image" getValueFromEvent={this.UploadImage}>
              <Upload name="HouseImageUpload" beforeUpload={() => false} onChange={this.UploadImage} listType="picture"><Button>Click to upload</Button></Upload>                                        
            </Form.Item>
            <Form.Item className={"SubmitButton"}>                
              <Button type="primary" htmlType="submit" style={{fontWeight:"500"}}>Add House</Button>
            </Form.Item>
          </Form>
        </Card>
     );
  }
}

export default RegisterHouse;