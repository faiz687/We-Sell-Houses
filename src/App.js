import './App.css';
import { BrowserRouter as Router, Switch , Route } from "react-router-dom";
import MainHeader from './Components/MainHeader.js';
import BreadCrumbs from './Components/BreadCrumbs.js';
import HouseDetail from './Components/HouseDetail.js';
import Home from './Components/home';
import { Layout } from 'antd';
const {Content, Footer } = Layout;

function App() {
  return (
    <Router>
     <Layout className="layout">
       <MainHeader></MainHeader>
       <Content style={{ padding: '0 50px' }}>
        <BreadCrumbs>
        </BreadCrumbs>
        <Switch>
          <Route path="/" exact children={Home}/>
          <Route path="/HouseDetail/:id" children={HouseDetail}/>                       
        </Switch>
       </Content>
       <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
     </Layout>    
  </Router>
 
  );
}

export default App;
