import { useState } from 'react';
import styled from "styled-components";
import { mobile } from "../responsive";
import Option from "./Option";
import axios from 'axios';
import swal from 'sweetalert';

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
        swal({
          title: 'Failed to reduce!',
          text: 'Amount must be greater than 0!',
          icon: 'warning',
          dangerMode: true,
        })
        setCount(1);
      }
      else
        setCount(count);
    };

    const [option, setOption] = useState(item.Option[0]);
    const handleOption = (id) => {
        const optRet = item['Option'].filter((opt) => opt.OptionID === id);
        setOption(optRet[0]);
    }

    const addtoCart = (option, count) => {
      if (localStorage.getItem("isLogin") !== "true"){
        swal({
          title: 'Failed!',
          text: 'Please proceed to login before shopping!',
          icon: 'warning',
        })
      }
      else{
        var currentUserId = localStorage.getItem("currentUserId");
        var getter = "/api/cart/" + currentUserId + "/";
    
        const body = JSON.stringify({
          productId: item._id,
          optionId: option["OptionID"],
          quantity: count
        });
        
        console.log("item._id = " + item._id);
        console.log("optionId = " + option["OptionID"]);
        console.log("quantity = " + count);

        axios
          .post(getter, body, {
            headers: { "Content-Type": "application/json" },
          })
          .then(() => {
            // eslint-disable-next-line
            let successText = "Added " + count + " of " + item.Name + " (" + option["Volume"] + ") " + "to the cart";
            swal({
              title: 'Added to cart!',
              text: successText,
              icon: 'success',
            })
          })
          .catch((error) => {
            swal({
              title: 'Something wrong!',
              text: error,
              icon: 'warning',
              dangerMode: true,
            })
          });
      }
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
            <Price>{option['Price']}</Price>
            <Option options = {item.Option} handleOptionChange = {handleOption}/>
            <AddContainer>
                <AmountContainer>

                <AmountButton onClick = {() => handleCount(count - 1)}>-</AmountButton>
                  <Amount>&nbsp;{count}&nbsp;</Amount>
                <AmountButton onClick = {() => handleCount(count + 1)}>+</AmountButton>

                </AmountContainer>
                <Button onClick = {() => addtoCart(option, count)}>
                  Add to cart
                </Button>
            </AddContainer>
            </InfoContainer>
        </Wrapper>
        </Container>
    );
};

export default ProductDetail;
