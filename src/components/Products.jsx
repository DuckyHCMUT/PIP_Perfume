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

const Products = ({option, itemDetail}) => {
  const [filter, setFilter] = useState([]);
  useEffect(() => { 
      setFilter(option != 'all' ? (option != 'Male' ? 
                    all.filter( (item) => item["Gender"] === 'Female') : 
                    all.filter( (item) => item["Gender"] === 'Male') ) :
                    all);
  }, []);

  
  const List = (
    filter?(
      <Container>
        {filter.map((item) => (
          <Product item = {item} onChange = {itemDetail} />
        ))}
      </Container>
    )  : 'Products loading...'
  )

  return (
    <div>
      {List}
    </div>
  );
};

export default Products;
