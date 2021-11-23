import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@material-ui/icons";
import styled from "styled-components";
import { cartArr, quanArr } from "../pages/Home";

const Info = styled.div`
  flex: 3;
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 5;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;
`;

const ItemInfo = styled.div`
  opacity: 100;
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 4;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const Container = styled.div`
  flex: 3;
  margin: 15px;
  min-width: 280px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  &:hover ${Info}{
    opacity: 1;
  }
`;

const Circle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: white;
  position: absolute;
`;

const Image = styled.img`
  height: 65%;
  z-index: 2;
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 15px;
  transition: all 0.5s ease;
  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
`;

const Name = styled.div`
  font-size: 14px;
  font-weight: bold;
`

const Price = styled.div`
  font-size: 12px;
`
const Brand = styled.div`
  font-size: 14px;
`

const ProductCard = ({ item, onChange }) => {
  function addtoCart(thisItem){
    // If item is not presented in cart yet
    var found = false;

    for (var i = 0; i < cartArr.length; i++) {
        if (cartArr[i].Name === thisItem['Name']) {
            found = true;
            break;
        }
    }
    if (!found){
      cartArr.push(thisItem);
      quanArr.push([thisItem["ID"], 1]);
      alert("Added " + thisItem['Name'] + " to the cart");
    }
    else
      alert(thisItem['Name'] + " is already in the cart");
  };

  return (
    <Container>
      <Circle />
      <Image src={item.Image} />
      <ItemInfo>
        <Brand>
          {item.Brand}
        </Brand>
        <Name>
          {item.Name}
        </Name> 
        <Price>
          {item['Price range']}
        </Price>
      </ItemInfo> 
      <Info>
        <Icon onClick = {() => addtoCart(item)}>
          <ShoppingCartOutlined/>
        </Icon>

        <Icon onClick = {() => onChange(item)}>
            <SearchOutlined />
        </Icon>
        
        <Icon onClick = {() => alert("Added to favorite")}>
          <FavoriteBorderOutlined/>
        </Icon> 
      </Info>     
    </Container>
  );
};

export default ProductCard;
