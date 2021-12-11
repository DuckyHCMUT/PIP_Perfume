import styled from "styled-components";
import Product from "./ProductCard";
import { useState, useEffect } from "react";
import axios from 'axios';
//import { all } from "../data.js"

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const Products = ({value, option, itemDetail}) => {
  const [filter, setFilter] = useState([]);
  const [data, setData] = useState([]);

  const checkFilter = (value, option) => {
    // No need to check for searched value
    if (value === ''){
      if (option === 'all')
        return data;
      else if (option === 'Male')
        return data.filter((item) => item["Gender"] === 'Male');
      else
        return data.filter((item) => item["Gender"] === 'Female');
    }
    // Need to check for searched value
    else{
      if (option === 'all')
        return data.filter((item) => item["Name"].toLowerCase().includes(value.toLowerCase()));
      else if (option === 'Male')
        return data.filter((item) => item["Name"].toLowerCase().includes(value.toLowerCase()) && item["Gender"] === 'Male');
      else
        return data.filter((item) => item["Name"].toLowerCase().includes(value.toLowerCase()) && item["Gender"] === 'Female');
    }
  }

  useEffect(() => { 
    // Get items from database
    axios.get('/api/items')
    .then(response => {
      setData(response.data);
    })
    .catch((error) => {
      console.log(error);
    });

    setFilter(checkFilter(value, option));
  // eslint-disable-next-line
  }, [value, option, data]);

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
