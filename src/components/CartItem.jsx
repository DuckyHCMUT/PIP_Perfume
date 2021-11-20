import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import Navbar from "../components/Navbar";
import { mobile } from "../responsive";
import { Link } from "react-router-dom";
import { useState } from "react";
const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
  border: 0.5px solid black;
  border-radius: 10px;
  padding: 20px;
  margin-bottom:20px;
  margin-right: 20px;
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 100px;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: -55px;
  position: relative;
  margin-left: -50px;
  margin-right: 250px;
`;

const Amount = styled.span`
	border: 0;
	text-decoration: none;
	border-radius: 10px;
	background-color: white;
	border: 1px solid;
	font-size: 12px;
	cursor: pointer;
	text-transform: uppercase;
	padding: 10px;
	font-weight: bold;
  display: inline-block;
  margin:5px
`;
const AmountButton = styled.button`
	border: 0;
	text-decoration: none;
	border-radius: 10px;
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
const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  margin-left: 50px;
`;
const SummaryItemText = styled.span``;
const CartItem = ({item}) => {
    const [count, setCount] = useState(item?1:0);
    const [total, setTotal] = useState(item.Option[0].Price?item.Option[0].Price:0);
    const handleCount = (cnt, price) => {
        setCount(cnt);
        setTotal(total);
    };
    return(
        <Product>
            <ProductDetail>
                <Image src={item.Image} />
                <Details>
                  <ProductName>
                    <b>Name:</b> {item.Name}
                  </ProductName>
                  <ProductId>
                    <b>Size:</b> {item.Option[0].Volume}
                  </ProductId>
                  <ProductId>
                    {item.Option[0].Price}
                  </ProductId>
                </Details>
            </ProductDetail>
            <PriceDetail>
              <SummaryItemText>
                <ProductAmountContainer>
                <AmountButton onClick = {() => handleCount(count-1, item.Option[0].price)}>-</AmountButton>
                  <Amount>&nbsp;{count}&nbsp;</Amount>
                <AmountButton onClick = {() => handleCount(count+1, item.Option[0].price)}>+</AmountButton>
                  </ProductAmountContainer>
              </SummaryItemText>
                  <ProductPrice>{total}VND</ProductPrice>
            </PriceDetail>
        </Product>
    )
}
export default CartItem;