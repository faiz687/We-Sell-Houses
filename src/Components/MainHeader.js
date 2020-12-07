import React, { useContext } from 'react';
import { Layout, Menu   } from 'antd';
import { Link } from "react-router-dom";
import UserContext from '../Contexts/User';
const { Header } = Layout;

function MainHeader(props) {  
  
  const user = useContext(UserContext)
  
  const isLoggedIn = user.user.loggedIn 
  
  const MenuButtonClicked = (click) => {
    if (click.key === 5) {
      user.logout();      
    }
}
    
  return (
<>
<Header>
   <div className="logo" />
      <Menu theme="dark" mode="horizontal"  onClick={MenuButtonClicked} defaultSelectedKeys={['1']}>
      <Menu.Item key="1" ><Link to="/">Home</Link></Menu.Item>
      <Menu.Item key="2" ><Link to="/Login">Login</Link></Menu.Item>
      <Menu.Item key="3" ><Link to="/Register">Register</Link></Menu.Item>
      <Menu.Item key="4" disabled={!isLoggedIn} ><Link to="/RegisterHouse">Register House</Link></Menu.Item>
      <Menu.Item key="5" disabled={!isLoggedIn}>Logout</Menu.Item>
   </Menu>
</Header>
</>
  );
}

export default MainHeader;