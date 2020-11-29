import React from 'react';
import { Form, Button , Input ,   Space } from 'antd';

function HouseFormFeatures(props) {

  return (
    <Form.List name="feature">
      { (fields , { add, remove } ) => (
         <>
          {fields.map( field => (
              <Form.Item label="Features">
                  <Space key={field.key}  align="baseline">                        
                      <Form.Item {...field} name={[field.name, 'first']}  key={field.key} rules={[{ required : true , message : 'Missing features' }]}>
                          <Input placeholder="Enter Feature" />
                      </Form.Item>
                      <Button onClick={() => remove(field.name)} block icon={"-"} style={{width:"2em"}}/>
                  </Space>
              </Form.Item>
            ))}
              <Form.Item label="Features">
                  <Button type="dashed" onClick={() => add()} block >+</Button>
              </Form.Item>
          </>
        )}
    </Form.List> );
}

export default HouseFormFeatures;