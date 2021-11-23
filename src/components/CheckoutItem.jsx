import styled from "styled-components";
import { mobile } from "../responsive";
import { quanArr } from "../pages/Home";
import { useState, useEffect } from "react";

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
  margin-left: -30px;
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

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  margin-left: 100px;
`;

const SummaryItemText = styled.span`
  margin: 0px 5px 0px 0px;
`;

const CheckoutItem = ({item}) => {
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    findCount(item['ID']);
    console.log();
  }, [item])

  const findCount = (itemID) => {
    for (let i = 0; i < quanArr.length; i++){
      if (quanArr[i][0] === itemID){
        setQuantity(quanArr[i][1]);
        break;
      }
    }
  }

  const numberWithDot = (x)=> {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }

  return (
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
            <Amount> Amount: {quantity}</Amount>
        </ProductAmountContainer>
        </SummaryItemText>
            <ProductPrice>{numberWithDot(item.Option[0].Price.split('.').join('').split('VND').join('')*quantity) + " VND"}</ProductPrice>
        </PriceDetail>
    </Product>
  );
};


export default CheckoutItem;
