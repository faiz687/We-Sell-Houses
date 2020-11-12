import React from 'react';
import { Card } from 'antd';
import FilterDataDropDowns from './FilterDataDropDowns';



function FilteringGrid(props) {
  
  
  function handleChange(value) {
  console.log(`selected ${value}`);
}
  
  return (
    <section class="FilterGridClass">
    <Card title="Refine Your Search">
    <FilterDataDropDowns/> 
    </Card>
    </section>
  );
}

export default FilteringGrid;