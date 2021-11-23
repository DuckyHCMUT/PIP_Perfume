import styled from "styled-components";
import { mobile } from "../responsive";
import { useState } from "react";
import { cartArr, quanArr } from "../pages/Home";
import { Link } from "react-router-dom";
import { useEffect } from "react";

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
    const [count, setCount] = useState(0);

    // eslint-disable-next-line
    const [total, setTotal] = useState(item.Option[0].Price ? item.Option[0].Price : 0);
    const [cart, updateCart] = useState(cartArr);
    const [itemCount, setItemCount] = useState(quanArr);

    const handleCount = (count, price, itemID) => {
      if (count < 1)
        removeItem(itemID);
      else{
        setCount(count);
        
        // Modify the (itemID, quantity) array
        for (var i = 0; i < cartArr.length; i++){
          if (quanArr[i][0] === itemID){
            quanArr[i][1] = count;
            break;
          }
        }
      }
    };

    useEffect(() => {
      findCount(item['ID']);
    }, [item])

    const findCount = (itemID) => {
      for (let i = 0; i < quanArr.length; i++){
        if (quanArr[i][0] === itemID){
          setCount(quanArr[i][1]);
          break;
        }
      }
    }

    const removeItem = (itemID) => {
      let innerCartArr = cart;
      let innerQuanArr = itemCount;
      let index = -1;

      for (var i = 0; i < cartArr.length; i++){
        if (cartArr[i]['ID'] === itemID){
          index = i;
          break;
        }
      }

      if (index !== -1){
        innerCartArr.splice(index, 1);
        innerQuanArr.splice(index, 1);
        updateCart(innerCartArr)
        setItemCount(innerQuanArr);
      }
    };

    const numberWithDot = (x)=> {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }

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
                <Link to="/user/cart">
                  <AmountButton onClick = {() => removeItem(item["ID"])}>Remove</AmountButton>
                </Link>

                <Link to="/user/cart">
                  <AmountButton onClick = {() => handleCount(count - 1, item.Option[0].price, item["ID"])}>-</AmountButton>
                </Link>
                  
                  <Amount>&nbsp;{count}&nbsp;</Amount>

                <Link to="/user/cart">
                  <AmountButton onClick = {() => handleCount(count + 1, item.Option[0].price, item["ID"])}>+</AmountButton>
                </Link>

                </ProductAmountContainer>
              </SummaryItemText>
                  <ProductPrice>{numberWithDot(item.Option[0].Price.split('.').join('').split('VND').join('')*count) + " VND"}</ProductPrice>
            </PriceDetail>
        </Product>
    )
}

export default CartItem;