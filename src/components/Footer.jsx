import { Button } from "@material-ui/core";
import {
    Facebook,
    Instagram,
    MailOutline,
    Phone,
    Pinterest,
    Room,
    Twitter
} from "@material-ui/icons";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
    display: flex;
    ${mobile({ flexDirection: "column" })}
`;

const Left = styled.div`
    flex: 2;
    display: flex;
    flex-direction: column;
    padding: 20px;
`;

const Logo = styled.h1``;

const Desc = styled.p`
    margin: 20px 0px;
`;

const SocialContainer = styled.div`
    display: flex;
`;

const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${(props) => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
`;

// const Center = styled.div`
//     flex: 1;
//     padding: 20px;
//     ${mobile({ display: "none" })}
// `;

const Title = styled.h3`
    margin-bottom: 30px;
`;

// const List = styled.ul`
//     margin: 0;
//     padding: 0;
//     list-style: none;
//     display: flex;
//     flex-wrap: wrap;
// `;

// const ListItem = styled.li`
//     width: 50%;
//     margin-bottom: 10px;
// `;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  margin-left: 10px;
  ${mobile({ backgroundColor: "#fff8f8" })}
`;

const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`;

const Payment = styled.img`
  width: 50%;
`;

const Footer = () => {
  return (
      <Container>
          <Left>
              <Logo>BKP.</Logo>
              <Desc>
                  The only perfume shop you need. Startup started in 2021 and
                  growing strong
              </Desc>
              <SocialContainer>
                  <SocialIcon color="3B5999">
                      <Facebook />
                  </SocialIcon>
                  <SocialIcon color="E4405F">
                      <Instagram />
                  </SocialIcon>
                  <SocialIcon color="55ACEE">
                      <Twitter />
                  </SocialIcon>
                  <SocialIcon color="E60023">
                      <Pinterest />
                  </SocialIcon>
                  <Button onClick = {() => {window.scrollTo(0, 0);}}>
                      Back to Top page
                  </Button>
              </SocialContainer>  
          </Left>
          <Right>
              <Title>Contact</Title>
              <ContactItem>
                  <Room style={{ marginRight: "10px" }} /> 268 Ly Thuong Kiet,
                  District 10, Ho Chi Minh City
              </ContactItem>
              <ContactItem>
                  <Phone style={{ marginRight: "10px" }} /> +1 234 56 78
              </ContactItem>
              <ContactItem>
                  <MailOutline style={{ marginRight: "10px" }} />{" "}
                  shopowner@hcmut.edu.vn
              </ContactItem>
              <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
          </Right>
      </Container>
  );
};

export default Footer;