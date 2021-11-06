import { Add, Remove } from "@material-ui/icons";
import { useState, useEffect } from 'react';
import styled from "styled-components";
import { mobile } from "../responsive";
import Option from "./Option";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({ padding: "10px", flexDirection:"column" })}
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
  font-size: 40
`

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
  padding: 15px;
  border: 2px solid ;
  background-color: white;
  cursor: pointer;
  font-weight: 500;

  &:hover{
      background-color: #f8f4f4;
  }
`;

const ProductDetail = ({item}) => {
    const [precisePrice,setprecisePrice] = useState(item.Option[0].Price);
    const handlePricebyVolume = (option) => {
        setprecisePrice(option.Price);
    };

    return (
        <Container>
        <Wrapper>
            <ImgContainer>
            <Image src= {item.Image} />
            </ImgContainer>
            <InfoContainer>
            <Brand>{item.Brand}</Brand>
            <Title>{item.Name}</Title>
            <Price>{precisePrice}</Price>
            <Option options = {item.Option} onChange = {handlePricebyVolume}/>
            <AddContainer>
                <AmountContainer>
                <Remove />
                <Amount>1</Amount>
                <Add />
                </AmountContainer>
                <Button>ADD TO CART</Button>
            </AddContainer>
            </InfoContainer>
        </Wrapper>
        </Container>
    );
};

export default ProductDetail;
