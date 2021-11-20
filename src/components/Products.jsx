import styled from "styled-components";
import Product from "./ProductCard";
import { all } from "../data";
import { useState, useEffect } from "react";

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const Products = ({value, option, itemDetail}) => {
  const [filter, setFilter] = useState([]);

  const checkFilter = (value, option) => {
    // No need to check for searched value
    if (value === ''){
      if (option === 'all')
        return all;
      else if (option === 'Male')
        return all.filter((item) => item["Gender"] === 'Male');
      else
        return all.filter((item) => item["Gender"] === 'Female');
    }
    // Need to check for searched value
    else{
      if (option === 'all')
        return all.filter((item) => item["Name"].toLowerCase().includes(value.toLowerCase()));
      else if (option === 'Male')
        return all.filter((item) => item["Name"].toLowerCase().includes(value.toLowerCase()) && item["Gender"] === 'Male');
      else
        return all.filter((item) => item["Name"].toLowerCase().includes(value.toLowerCase()) && item["Gender"] === 'Female');
    }
  }

  useEffect(() => { 
    setFilter(checkFilter(value, option));
  }, [value, option]);

  const valueList = (
    filter? (<Container>
      {filter.map((item) => (
          <Product item = {item} onChange = {itemDetail}/>
      ))}
    </Container>)
    : 'Product is loading'
  );

  return (
    <div>
      {valueList}
    </div>
  );
};

export default Products;
