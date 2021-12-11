import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import BannerCart from "../components/BannerCart";
import { mobile } from "../responsive";
import { Link } from "react-router-dom";
import { useState, useEffect, useCallback } from "react";
import CheckoutItem from "../components/CheckoutItem";
import { Redirect } from "react-router";
import axios from "axios";
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
  const [totalItemInCart, setTotal] = useState(0);
  const [currentCart, setCurrentCart] = useState([]);
  const [totalPriceInCart, setTotalPriceInCart] = useState(0);
  const [contact, setContact] = useState("");
  const [address, setAddress] = useState("");

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
  },[handleTotalItem, getter, totalItemInCart, currentCart, totalPriceInCart]); 
  
  const shippingFee = (itemCount) => {
    if (totalPriceInCart >= 20000000)
      return 0;
    else{
      let f = 50000;
    if (itemCount <= 0)
      f = 0;
    else if (itemCount > 3)
      for (let i = 3; i < itemCount; i++)
        f += 10000;
    return f;
    }
  };

  const numberWithDot = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }

  function directToHomePage(){
    window.location.replace('/');
  }
  
  const handleCheckout = () => {
    if (currentCart.length > 0){
      swal({
        title: "Order success",
        text: "Thank you for ordering, please patiently wait for our confirmation!\nYou will be redirected to home page in 5 seconds",
        icon: 'success'
      })
      postOrder();
    }
    else
      swal({
        title: "Empty cart!",
        text: "The cart is empty, please add some item before checkout!\nYou will be redirected to home page in 5 seconds",
        icon: 'warning',
        dangerMode: true,
      })
    window.setTimeout(directToHomePage, 5000);
  };

  const postOrder = () => {
    let checkOutArr = [];

    for (let i = 0; i < currentCart.length; i++)
      checkOutArr.push({
        productId: currentCart[i]._id,
        name: currentCart[i].name,
        optionId: currentCart[i].optionId,
        volume: currentCart[i].volume,
        quantity: currentCart[i].quantity,
        price: currentCart[i].price
      });

    axios.post("/api/order/", {
      userId: currentUserId,
      items: checkOutArr,
      shippingInfo: {
        name: localStorage.getItem("currentUserName"),
        address: address ? address : "Not given",
        contact: contact ? contact : "Not given"
      },
      status: "pending",
      bill: totalPriceInCart + shippingFee(totalItemInCart)
    }).then(
        () => {recycleCart()}
      )
      .catch((err) => {
        console.log(err.response.data);
      })
  };

  const recycleCart = () => {
    let arrLength = currentCart.length;
    let idArray = [];
    let optionArray = [];

    for (let i = 0; i < arrLength; i++){
      idArray.push(currentCart[i].productId);
      optionArray.push(currentCart[i].optionId);
    }

    for (let i = 0; i < arrLength; i++)
      deleteItem("/api/cart/" + currentUserId + "/" + idArray[i] + "/" + optionArray[i] + "/");
  };

  function deleteItem(toDelete){
    axios.delete(toDelete)
        .then(console.log("Delete success"))
        .catch((err) => {
          console.log(err.response.data);
          deleteItem(toDelete);
        });  
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
              {currentCart.map((item) => (
                <CheckoutItem item = {item} />
              ))}
              <Hr />
            </Info>
            <Summary>
              <SummaryTitle>SHIPPING INFORMATION</SummaryTitle>

              <SummaryItem>
                <SummaryItemText>Name:</SummaryItemText>
                <SummaryItemPrice>{localStorage.getItem("currentUserName")}</SummaryItemPrice>
              </SummaryItem>

              <SummaryItem>
                <SummaryItemText>Address:</SummaryItemText>
                  <InputContainer>
                    <Input
                      placeholder="Enter address"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}  
                    /> 
                  </InputContainer>
              </SummaryItem>

              <SummaryItem>
                <SummaryItemText>Phone:</SummaryItemText>
                  <InputContainer>
                    <Input 
                      placeholder="Enter phone"
                      value={contact}
                      onChange={(e) => setContact(e.target.value)}  
                    /> 
                  </InputContainer>
              </SummaryItem>

              <SummaryTitle>PAYMENT SUMMARY</SummaryTitle>
              <SummaryItem>
                <SummaryItemText>Method: </SummaryItemText>
                <SummaryItemPrice>Cash </SummaryItemPrice>
              </SummaryItem>
              
              <SummaryItem>
                <SummaryItemText>Items:</SummaryItemText>
                <SummaryItemPrice>{totalItemInCart}</SummaryItemPrice>
              </SummaryItem>

              <SummaryItem>
                <SummaryItemText>Subtotal:</SummaryItemText>
                <SummaryItemPrice>{numberWithDot(totalPriceInCart)}</SummaryItemPrice>
              </SummaryItem>

              <SummaryItem>
                <SummaryItemText>Shipping fees: </SummaryItemText>
                <SummaryItemPrice>{totalPriceInCart>20000000? "Free shipping" : numberWithDot(shippingFee(totalItemInCart))}</SummaryItemPrice>
              </SummaryItem>

              <SummaryItem type="total">
                <SummaryItemText>Total:</SummaryItemText>
                <SummaryItemPrice>{numberWithDot((totalPriceInCart + shippingFee(totalItemInCart))) + "VND"}</SummaryItemPrice>
              </SummaryItem>

              <Button onClick={() => handleCheckout()}>PLACE ORDER</Button>

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
