import React from 'react';
import { Input } from 'antd';
import PropertiesGrid from './propertygrid';
import FilteringGrid from './FilteringGrid';

const { Search } = Input;

function Home(props) {
  
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
        <FilteringGrid/>
        <PropertiesGrid/>
        </section>
      </div>
  );
}

export default Home;