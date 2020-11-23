import React from 'react';
import { Card } from 'antd';
import FilterDataDropDowns from './FilterDataDropDowns';

function FilteringGrid(props) {
   
  return (
    <section className="FilterGridClass">
    <Card title="Refine  Your Search">
    <FilterDataDropDowns/> 
    </Card>
    </section>
  );
}

export default FilteringGrid;