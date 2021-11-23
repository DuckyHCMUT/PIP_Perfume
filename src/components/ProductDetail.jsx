import { useState } from 'react';
import styled from "styled-components";
import { mobile } from "../responsive";
import Option from "./Option";
import { cartArr, quanArr } from "../pages/Home";

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
  margin:5px;

  &:hover{
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
  margin:5px;

  &:hover{
       background-color: #f8f4f4;
   }
`;

const ProductDetail = ({item, onUpdateCount}) => {
    const [count, setCount] = useState(1);
    const handleCount = (count) => {
      if (count < 1){
        alert("Must greater than 0");
        setCount(1);
      }
      else
        setCount(count);
    };

    const [precisePrice, setprecisePrice] = useState(item.Option[0].Price);

    // eslint-disable-next-line
    const handlePricebyVolume = (option) => {
        setprecisePrice(option["Price"]);
    };

    function addtoCart(thisItem, thisCount){
      // If item is not presented in cart yet
      var found = false;

      for (var i = 0; i < cartArr.length; i++) {
          if (cartArr[i]['Name'] === thisItem['Name']) {
              found = true;
              break;
          }
      }
      if (!found){
        cartArr.push(thisItem);
        quanArr.push([thisItem['ID'], thisCount]);
        alert("Added " + thisItem['Name'] + " to the cart");
      }
      else
        alert(thisItem['Name'] + " is already in the cart");  
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
            <Option options = {item.Option} onClick = {() => alert("wtf")}/>
            <AddContainer>
                <AmountContainer>

                <AmountButton onClick = {() => handleCount(count - 1)}>-</AmountButton>
                  <Amount>&nbsp;{count}&nbsp;</Amount>
                <AmountButton onClick = {() => handleCount(count + 1)}>+</AmountButton>

                </AmountContainer>
                <Button onClick = {() => addtoCart(item, count)}>
                  Add to cart
                </Button>
            </AddContainer>
            </InfoContainer>
        </Wrapper>
        </Container>
    );
};

export default ProductDetail;
