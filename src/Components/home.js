import React from 'react';
import { Input } from 'antd';
import PropertiesGrid from './propertygrid';
import FilteringGrid from './FilteringGrid';

const { Search } = Input;

class Home extends React.Component { 
  
  
    constructor(props) {
    super(props)
    this.OnQueryChange = this.OnQueryChange.bind(this); 
    this.Propertieschild = React.createRef();
    } 
  
    OnQueryChange(NewQuery) {
      this.Propertieschild.current.OnQueryChange(NewQuery);
    }
                
    render() {
      return (
                <div className="site-layout-content">
                  <div style={{ padding: '2% 20%' }}>
                    <Search  placeholder="Search by House feature"
                      allowClear
                      enterButton="Search"
                      size="large"
                      onSearch={null}/>         
                  </div>
                  <section className="MainBodySection">
                  <FilteringGrid QueryChangeMethod={this.OnQueryChange} />
                  <PropertiesGrid ref={this.Propertieschild} />        
                  </section>
                </div>
              );
    }
}
export default Home;