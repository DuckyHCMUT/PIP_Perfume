import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import Navbar from "../components/Navbar";
import { mobile } from "../responsive";
import React from "react";
import { all } from "../data";
import { Link } from "react-router-dom";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
  ${mobile({ padding: "10px" })}
`;


const Top = styled.span`
flex: 1;
border: 0.5px solid lightgray;
border-radius: 10px;
padding: 20px;
height: 40vh;
`;

const TopTexts = styled.span`
  cursor: pointer;
  margin: 0px 0px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}

`;

const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 200px;
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
  margin-left: -30px;
  margin-right: 250px;
`;

const ProductAmount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  margin-left: 100px;
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
  width: 100%;
  font-size: 20px;
  padding: 10px;
  background-color: pink;
  color: black;
  font-weight: 900;
`;

const Checkout = (item) => {
  let quantity = 1;
  return (
    <Container>
      <Banner />
      <Navbar />
      <Announcement />
      <TopTexts><Link to="/">Home</Link> {'>'} <Link to="/user/cart">Cart</Link> {'>'} <Link to="/user/checkout">Place Order</Link> </TopTexts>
      <Wrapper>
        <Bottom>
          <Info>
            {all.map((item) => (
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
                  <Remove />
                  <ProductAmount>{quantity}</ProductAmount>
                  <Add />
                  </ProductAmountContainer>
              </SummaryItemText>
                  <ProductPrice>{item.Option[0].Price}</ProductPrice>
              </PriceDetail>
            </Product>
            ))}
            <Hr />
          </Info>
          <Top>
            <SummaryTitle>SUMMARY</SummaryTitle>
            <SummaryItem>
            <SummaryItemText>Name:</SummaryItemText>
            <SummaryItemPrice>Duyen</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
            <SummaryItemText>Address:</SummaryItemText>
            <SummaryItemPrice>268 ltk p14 q10</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Phone:</SummaryItemText>
              <SummaryItemPrice>0123456</SummaryItemPrice>
            </SummaryItem>
            <Link to="/user/login">
            <Button>CHANGE</Button>
            </Link>
          </Top>

          <Summary>
            <SummaryTitle>SUMMARY</SummaryTitle>
            <SummaryItem>
            <SummaryItemText>Items:</SummaryItemText>
            <SummaryItemPrice>{quantity*24}</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
            <SummaryItemText>Subtotal:</SummaryItemText>
            <SummaryItemPrice>48.200.000VND</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
            <SummaryItemText>Shipping fees:</SummaryItemText>
            <SummaryItemPrice>15.000VND</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total:</SummaryItemText>
              <SummaryItemPrice>48.215.000VND</SummaryItemPrice>
            </SummaryItem>
            <Link>
            <Button>PLACE ORDER</Button>
            </Link>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};


export default Checkout;
