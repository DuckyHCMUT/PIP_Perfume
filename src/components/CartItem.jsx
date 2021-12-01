import styled from "styled-components";
import { mobile } from "../responsive";
import { Link } from "react-router-dom";
import axios from "axios";
import swal from "sweetalert";

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
  margin-left: 150px;
  margin-right: 5px;
`;
const SummaryItemText = styled.span``;

const CartItem = ({item}) => {

    const handleCount = (newQuantity, optionId) => {
      // alert("newQuantity = " + newQuantity);
      var currentUserId = localStorage.getItem("currentUserId");
      var getter = "/api/cart/" + currentUserId + "/";
      
      // On deduction to 0
      if (newQuantity <= 0){
        var toDelete = "/api/cart/" + currentUserId + "/" + item.productId + "/" + optionId + "/";
        axios.delete(toDelete)
            .then(
              swal({
                title: 'Removed from cart!',
                text: "Removed " + item.name + " ( " + item.volume + " ) from the cart!",
                icon: 'success',
              })
            )
            .catch((error) => {
              swal({
                title: "Something went wrong!",
                text: error,
                icon: 'warning',
                dangerMode: true,
              })
            });
      }
      else{
        const body = JSON.stringify({
            productId: item.productId,
            optionId: optionId,
            qty: newQuantity
        });

        axios
            .put(getter, body, {
                headers: { "Content-Type": "application/json" },
            })
            .then(
            )
            .catch((error) => {
              console.log(error);
            });
      };
    }

    const numberWithDot = (x) => {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }

    return(
        <Product>
            <ProductDetail>
                <Image src = {item.image}/>
                <Details>
                  <ProductName>
                    <b>Name:</b> {item.name}
                  </ProductName>
                  <ProductId>
                    <b>Size:</b> {item.volume}
                  </ProductId>
                  <ProductId>
                    {numberWithDot(item.price) + "VND"}
                  </ProductId>
                </Details>
            </ProductDetail>
            <PriceDetail>
              <SummaryItemText>
                <ProductAmountContainer>
                <Link to="/user/cart">
                  <AmountButton onClick = {() => handleCount(0, item.optionId)}>Remove</AmountButton>
                </Link>

                <Link to="/user/cart">
                  <AmountButton onClick = {() => handleCount(item.quantity - 1, item.optionId)}>-</AmountButton>
                </Link>
                  
                  <Amount>&nbsp;{item.quantity}&nbsp;</Amount>

                <Link to="/user/cart">
                  <AmountButton onClick = {() => handleCount(item.quantity + 1, item.optionId)}>+</AmountButton>
                </Link>

                </ProductAmountContainer>
              </SummaryItemText>
                  <ProductPrice>{numberWithDot(item.price*item.quantity) + "VND"}</ProductPrice>
            </PriceDetail>
        </Product>
    )
}

export default CartItem;