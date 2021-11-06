import styled from "styled-components";
import { universal } from "../data";
import data from "../item/male.json"
import ProductCard from "./ProductCard";

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const Products = () => {
  return (
    <Container>
      {universal.map((item) => (
        <ProductCard item={item} key={item.ID}/>
      ))}
    </Container>
  );
};

export default Products;
