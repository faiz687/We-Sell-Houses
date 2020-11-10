import React from 'react';
import { Layout, Menu   } from 'antd';
import { Link } from "react-router-dom";
const { Header } = Layout;

function MainHeader(props) {
  return (
<>
<Header>
   <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
      <Menu.Item key="1" ><Link to="/">Home</Link></Menu.Item>
      <Menu.Item key="2" ><Link to="/Register">Register</Link></Menu.Item>
   </Menu>
</Header>
</>
  );
}

export default MainHeader;