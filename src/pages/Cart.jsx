import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import { mobile } from "../responsive";
import { Link } from "react-router-dom";
import BannerCart from "../components/BannerCart";
import CartItem from "../components/CartItem";
import { useState, useEffect, useCallback } from "react";
import { Redirect } from "react-router";
import swal from "sweetalert";
import axios from "axios";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
  ${mobile({ padding: "10px" })}
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}

`;

const Info = styled.div`
  flex: 3;
`;

const TopTexts = styled.span`
  cursor: pointer;
  margin: 0px 0px;
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid black;
  border-radius: 10px;
  padding: 20px;
  height: 30vh;
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
  border-radius: 10px;
  font-size: 20px;
  padding: 10px;
  background-color: pink;
  color: black;
  font-weight: 900;
  margin-bottom: 10px;
  cursor: pointer;
`;

const Cart = () => {
  const [totalItemInCart, setTotal] = useState(0);
  const [currentCart, setCurrentCart] = useState([]);
  const [totalPriceInCart, setTotalPriceInCart] = useState(0);

  var loginState = localStorage.getItem("isLogin");
  var currentUserId = localStorage.getItem("currentUserId");
  var getter = '/api/cart/' + currentUserId + "/";

  const handleTotalItem = useCallback(() => {
    let count = 0;
    for (let i = 0; i < currentCart.length; i++)
      count += currentCart[i].quantity;
    setTotal(count);
  }, [currentCart]);

  useEffect(() => {
    handleTotalItem();
    axios.get(getter)
    .then(response => {
      setCurrentCart(response.data.items ? response.data.items : []);
      setTotalPriceInCart(response.data.bill ? response.data.bill : 0);
    })
    .catch((error) => {
      console.log(error);
    });
  }, [handleTotalItem, getter, totalItemInCart, currentCart, totalPriceInCart]); 

  const numberWithDot = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }

  const handleCheckout = () => {
    // Do not proceed
    if (currentCart.length <= 0)
      swal({
        title: "Empty cart!",
        text: "The cart is empty, please add some item before proceed!",
        icon: 'warning',
        dangerMode: true,
      })
    else
      window.location.replace("/user/Checkout");
  }

  if (loginState === "true")
    return (
      <Container>
        <Announcement />
        <BannerCart /> 
        <TopTexts><Link to="/">Home</Link> {'>'} <Link to="/user/cart">Cart</Link></TopTexts>
        <Wrapper>
          <Bottom>
            <Info>
              {currentCart.map((item) => (
                <CartItem item = {item}/>
              ))}
              <Hr />
            </Info>
            <Summary>
              <SummaryTitle>SUMMARY</SummaryTitle>
              <SummaryItem>
              <SummaryItemText>Items:</SummaryItemText>
              <SummaryItemPrice>{totalItemInCart}</SummaryItemPrice>
              </SummaryItem>
              <SummaryItem type="total">
                <SummaryItemText> Total </SummaryItemText>
                <SummaryItemPrice> {numberWithDot(totalPriceInCart) + " VND"} </SummaryItemPrice>
              </SummaryItem>
                <Button onClick = {() => handleCheckout()}> PROCEED </Button>
            </Summary>
          </Bottom>
        </Wrapper>
        <Footer />
      </Container>
    );
  else
    return (
      <Redirect to = "/user/login"/>
    )
};

export default Cart;
