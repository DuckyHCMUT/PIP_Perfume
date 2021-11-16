//import { Add, Remove } from "@material-ui/icons";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import Option from "./Option";
import { Link } from "react-router-dom";

const Container = styled.div``;

const Wrapper = styled.div`
    padding: 50px;
    display: flex;
    ${mobile({ padding: "10px", flexDirection: "column" })}
`;

const ImgContainer = styled.div`
    flex: 1;
`;

const Image = styled.img`
    width: 100%;
    height: 90vh;
    object-fit: cover;
    ${mobile({ height: "40vh" })}
`;

const InfoContainer = styled.div`
    flex: 1;
    padding: 0px 50px;
    ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
    font-weight: bold;
`;

const Price = styled.span`
    font-weight: 200;
    font-size: 20px;
`;

const Brand = styled.div`
    font-weight: 500;
    font-size: 40;
`;

const AddContainer = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${mobile({ width: "100%" })}
`;

const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
`;

const Amount = styled.span`
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 5px;
`;

const Button = styled.button`
    border: 0;
    text-decoration: none;
    border-radius: 5px;
    background-color: white;
    border: 2px solid;
    font-size: 12px;
    cursor: pointer;
    text-transform: uppercase;
    padding: 15px;
    font-weight: bold;
    display: inline-block;
    margin: 5px;

    &:hover {
        background-color: #f8f4f4;
    }
`;

const AmountButton = styled.button`
    border: 0;
    text-decoration: none;
    border-radius: 5px;
    background-color: white;
    border: 1px solid;
    font-size: 12px;
    cursor: pointer;
    text-transform: uppercase;
    padding: 10px;
    font-weight: bold;
    display: inline-block;
    margin: 5px;

    &:hover {
        background-color: #f8f4f4;
    }
`;

const ProductDetail = ({ item }) => {
    let count = 1;
    const [precisePrice, setprecisePrice] = useState(item.Option[0].Price);
    const handlePricebyVolume = (option) => {
        setprecisePrice(option.Price);
    };

    return (
        <Container>
            <Wrapper>
                <ImgContainer>
                    <Image src={item.Image} />
                </ImgContainer>
                <InfoContainer>
                    <Brand>{item.Brand}</Brand>
                    <Title>{item.Name}</Title>
                    <Price>{precisePrice}</Price>
                    <Option
                        options={item.Option}
                        onChange={handlePricebyVolume}
                    />
                    <AddContainer>
                        <AmountContainer>
                            <AmountButton>-</AmountButton>
                            <Amount>{count}</Amount>
                            <AmountButton>+</AmountButton>
                        </AmountContainer>
                        <Link to="/user/cart">
                            <Button>Add to cart</Button>
                        </Link>

                        <Link
                            to="/BlankPage"
                            style={{ textDecoration: "none" }}
                        >
                            <Button>Continue shopping</Button>
                        </Link>
                    </AddContainer>
                </InfoContainer>
            </Wrapper>
        </Container>
    );
};

export default ProductDetail;
