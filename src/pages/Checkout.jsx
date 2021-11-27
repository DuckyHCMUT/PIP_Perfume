import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import BannerCart from "../components/BannerCart";
import { mobile } from "../responsive";
import { Link } from "react-router-dom";
import { cartArr, quanArr } from "../components/Asset";
import { useState, useEffect } from "react";
import CheckoutItem from "../components/CheckoutItem";
import { Redirect } from "react-router";
import swal from "sweetalert";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
  ${mobile({ padding: "10px" })}
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

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const Summary = styled.span`
  flex: 1;
  border: 0.5px solid black;
  border-radius: 10px;
  padding: 20px;
  height: 90vh;
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

const SummaryItemText = styled.span`
  margin: 0px 5px 0px 0px;
`;

const SummaryItemPrice = styled.span`
`;

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

const ReturnButton = styled.button`
  width: 100%;
  border-radius: 10px;
  font-size: 20px;
  padding: 10px;
  background-color: #e67373;
  color: #241f1f;
  font-weight: 900;
  margin-bottom: 10px;
  cursor: pointer;
`;

const InputContainer = styled.div`
  color: #000000;
	min-width: 40%;
	width: 100%;
`;

const Input = styled.input`
	width: 100%;
  text-align: left;
  margin-right: -10px;
  justify: right;
	border: black;
  border-radius: 2px;
	font-size: 16px;
	color: #000000;
`;

const Checkout = () => {
  const [totalItemInCheckOut, setTotal] = useState(0);
  const [cartTotalPrice, setCartTotalPrice] = useState(0);
  var loginState = localStorage.getItem("isLogin")

  useEffect(() => {
    handleTotalItem();
    handleTotalPrice();
  },[totalItemInCheckOut, cartTotalPrice]);

  const handleTotalItem = () => {
    let count = 0;
    for (let i = 0; i < quanArr.length; i++){
      count += quanArr[i][1];
    }
    setTotal(count);
  }

  const handleTotalPrice = () => {
    let price = 0;
    for (let i = 0; i < quanArr.length; i++){
      price += cartArr[i][1]['Price'].split('.').join('').split('VND').join('')*quanArr[i][1];
    }
    setCartTotalPrice(price);
  }
  
  const recycleCart = () => {
    if (cartArr.length > 0){
      swal({
        title: "Order success",
        text: "Thank you for ordering, please patiently wait for our confirmation! You will be redirected to home page in 5 seconds",
        icon: 'success'
      })

      // Start the process of destroy everything
      let arrLength = quanArr.length;
      quanArr.splice(0, arrLength);
      cartArr.splice(0, arrLength);
      window.setTimeout(directToHomePage, 5000);
    }
    else
      swal({
        title: "Empty cart!",
        text: "The cart is empty, please add some item before checkout!",
        icon: 'warning',
        dangerMode: true,
      })
  }

  function directToHomePage(){
    window.location.replace('/');
  }
  
  const shippingFee = (itemCount) => {
    let f = 50000;
    if (itemCount <= 0)
      f = 0;
    else if (itemCount > 3)
      for (let i = 3; i < itemCount; i++)
        f += 10000;
    return f;
  };

  const numberWithDot = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }
  if (loginState === "true")
    return (
      <Container>
        <Announcement />
        <BannerCart />
        <TopTexts><Link to="/">Home</Link> {'>'} <Link to="/user/cart">Cart</Link> {'>'} <Link to="/user/checkout">Place Order</Link> </TopTexts>
        <Wrapper>
          <Bottom>
            <Info>
              {cartArr.map((item) => (
                <CheckoutItem item = {item[0]} option = {item[1]} />
              ))}
              <Hr />
            </Info>
            <Summary>
              <SummaryTitle>SHIPPING INFORMATION</SummaryTitle>

              <SummaryItem>
                <SummaryItemText>Name:</SummaryItemText>
                <SummaryItemPrice>{localStorage.getItem("currentuser")}</SummaryItemPrice>
              </SummaryItem>

              <SummaryItem>
                <SummaryItemText>Address:</SummaryItemText>
                  <InputContainer>
                    <Input placeholder="Enter address"/> 
                  </InputContainer>
              </SummaryItem>

              <SummaryItem>
                <SummaryItemText>Phone:</SummaryItemText>
                  <InputContainer>
                    <Input placeholder="Enter phone"/> 
                  </InputContainer>
              </SummaryItem>

              <Link to="/user/login">
                <Button>CHANGE</Button>
              </Link>

              <SummaryTitle>SUMMARY</SummaryTitle>
              <SummaryItem>
                <SummaryItemText>Items:</SummaryItemText>
                <SummaryItemPrice>{totalItemInCheckOut}</SummaryItemPrice>
              </SummaryItem>

              <SummaryItem>
                <SummaryItemText>Subtotal:</SummaryItemText>
                <SummaryItemPrice>{numberWithDot(cartTotalPrice)}</SummaryItemPrice>
              </SummaryItem>

              <SummaryItem>
                <SummaryItemText>Shipping fees: </SummaryItemText>
                <SummaryItemPrice>{numberWithDot(shippingFee(totalItemInCheckOut))}</SummaryItemPrice>
              </SummaryItem>

              <SummaryItem type="total">
                <SummaryItemText>Total:</SummaryItemText>
                <SummaryItemPrice>{numberWithDot((cartTotalPrice + shippingFee(totalItemInCheckOut))) + "VND"}</SummaryItemPrice>
              </SummaryItem>

              <Button onClick={() => recycleCart()}>PLACE ORDER</Button>

              <Link to = "/user/cart">
                <ReturnButton>RETURN TO CART</ReturnButton>
              </Link>
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

export default Checkout;
