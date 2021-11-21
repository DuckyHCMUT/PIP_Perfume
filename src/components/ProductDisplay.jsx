import * as React from "react";
import { useState} from 'react';
import styled from "styled-components";
import { mobile } from "../responsive";
import Products from "./Products";
import ProductDetail from "./ProductDetail";

const Container = styled.div`
    height: 80%;
    width: 95%;
    display: flex;
    flex-direction: row;
    padding: 40px;
`;
const Display = styled.div`
    flex: 3;
    margin-left: 30px;
    margin-right: 50px;
    border: 0.1px solid lightgrey;
    display: flex;
    align-items: center;
    justify-content: center;
    ${mobile({ flex: 2, justifyContent: "center" })}
`;

const ProductDisplay = ({option, onUpdateCount, value}) => {
    const [productPicked, setProductPicked] = useState('');

    const handleProductPicked = (item) => {
        setProductPicked(item);
    };

    const showProductDetail = (
        <ProductDetail item = {productPicked} onUpdateCount = {onUpdateCount}/>
    );

    const showProductList = (
        <Container>
            <Display>    
                <Products option = {option} value = {value} itemDetail = {handleProductPicked}/>
            </Display>
        </Container>
    );

    return (
        <div>
            {productPicked ? showProductDetail : showProductList}
        </div>
    );
};

export default ProductDisplay;
