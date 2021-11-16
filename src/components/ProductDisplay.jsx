import {
    Checkbox,
    FormControl,
    InputLabel,
    NativeSelect,
    Slider,
} from "@material-ui/core";
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
const FilterPanel = styled.div`
    border: 0.5px solid lightgrey;
    padding: 10px;
    width: 300px;
    height: 420px;
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
const Title = styled.div`
    font: 22px bold;
`;
const Content = styled.div`
    font: 18px;
    display: flex;
    align-items: center;
    margin-left: 10px;
`;

const ProductDisplay = ({option, onUpdateCount}) => {
    const [productPicked, setProductPicked] = useState('');

    const handleProductPicked = (item) => {
        setProductPicked(item);
    };

    const showProductDetail = (
        <ProductDetail item = {productPicked} onUpdateCount = {onUpdateCount}/>
    );

    const showProductList = (
        <Container>
            <FilterPanel>
                <Title>SORT BY</Title>
                <Title>Price Range</Title>
                <Slider
                    size="small"
                    defaultValue={1000}
                    aria-label="Small"
                    valueLabelDisplay="auto"
                    min={100}
                    max={10000}
                    color="secondary"
                />

                <Title>Brand</Title>
                <Content>
                    <Checkbox></Checkbox>
                    Gucci{" "}
                </Content>
                <Content>
                    <Checkbox></Checkbox>
                    Dior{" "}
                </Content>
                <Content>
                    <Checkbox></Checkbox>
                    CK{" "}
                </Content>
                <Content>
                    <Checkbox></Checkbox>
                    Burberry{" "}
                </Content>
                <Content>
                    <Checkbox></Checkbox>
                    Versace{" "}
                </Content>
                <Title>
                    Release Year:
                    <FormControl fullWidth>
                        <InputLabel
                            variant="standard"
                            htmlFor="uncontrolled-native"
                        ></InputLabel>
                        <NativeSelect
                            defaultValue={30}
                            inputProps={{
                                id: "uncontrolled-native",
                            }}
                        >
                            <option value={2021}>2021</option>
                            <option value={2020}>2020</option>
                            <option value={2019}>2019</option>
                            <option value={2018}>2018</option>
                        </NativeSelect>
                    </FormControl>
                </Title>
            </FilterPanel>
            <Display>    
                <Products option = {option} itemDetail = {handleProductPicked}/>
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
