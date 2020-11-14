import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch , Route } from "react-router-dom";
import MainHeader from './Components/MainHeader.js';
import HouseDetail from './Components/HouseDetail.js';
import RegisterPage from './Components/Register.js';
import Login from './Components/Login.js';
import Home from './Components/home';
import UserContext from './Contexts/User';
import { Layout } from 'antd';
const {Content, Footer } = Layout;

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { user :  { loggedIn : true ,  UserId :  1}  }
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
  }

  login(user) {
    console.log("User is now being set on the context");
    user.loggedIn = true;
    this.setState({user:user});
  }

  logout() {
    console.log("Removing user from the app context");
    this.setState({user: {loggedIn:false}});
  }
  
  render(){
    
    const context = { user: this.state.user , login: this.login, logout: this.logout } ;
      
    return (
      <UserContext.Provider value={context}>
        <Router>
          <Layout className="layout">
            <MainHeader> </MainHeader>
            <Content style={{ padding: '0 50px' }}>
              <Switch>
                 <Route path="/" exact children={<Home />}/>
                 <Route path="/HouseDetail/:id" children={<HouseDetail />} />
                 <Route path="/Register" children={<RegisterPage />} />
                 <Route path="/Login" children={<Login /> } />
              </Switch>
            </Content>
            <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
          </Layout>    
        </Router>
      </UserContext.Provider>
    );
  }
}

export default App;
