import {
  SearchOutlined,
  ShoppingCartOutlined,
} from "@material-ui/icons";
import styled from "styled-components";
import axios from "axios";
import swal from "sweetalert";

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
  const addtoCart = () => {
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
        optionId: item.Option[0].OptionID,
        quantity: 1
      });
      
      axios
        .post(getter, body, {
          headers: { "Content-Type": "application/json" },
        })
        .then(() => {
          // eslint-disable-next-line
          let successText = "Added 1 of " + item.Name + " (" + item.Option[0].Volume + ") " + "to the cart";
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
        <Icon onClick = {() => addtoCart()}>
          <ShoppingCartOutlined/>
        </Icon>

        <Icon onClick = {() => onChange(item)}>
            <SearchOutlined />
        </Icon>
      </Info>     
    </Container>
  );
};

export default ProductCard;
