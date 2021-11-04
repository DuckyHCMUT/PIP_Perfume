import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import img from "../resource/banner.png";
import { mobile } from "../responsive";
import { Redirect } from "react-router";

const Container = styled.div`
    height: 180px;
    background-image: url(${img});
    ${mobile({ height: "50px" })}
`;
const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`;

const SearchContainer = styled.div`
    border: 0.5px solid lightgray;
    display: flex;
    background-color: white;
    align-items: center;
    margin-left: 30px;
    padding: 5px;
`;

const Input = styled.input`
    border: 0.5px solid white;
    width: 90%;
    ${mobile({ width: "50px" })}
`;

const Center = styled.div`
    flex: 1;
    text-align: center;
`;

const Logo = styled.h1`
    font-weight: bold;
    cursor: pointer;
    color: black;
    border: 2px solid white;
    ${mobile({ fontSize: "24px" })}
`;
const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    ${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuItem = styled.div`
    font-size: 16px;
    cursor: pointer;
    margin-left: 25px;
    ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const something = () => {
    alert("Wot the fok");
}

const Banner = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                <Logo onClick={something}>
                    BK Perfume
                </Logo>
                </Left>
                <Center>
                    <SearchContainer>
                        <Input placeholder="Search" />
                        <Right>
                            <Search style={{ color: "gray", fontSize: 18 }} />
                        </Right>
                    </SearchContainer>
                </Center>

                <Right>
                    <MenuItem>HOME</MenuItem>
                    <MenuItem>FAQ</MenuItem>
                    <MenuItem>CONTACT</MenuItem>
                    <MenuItem>SIGN IN</MenuItem>
                    <MenuItem>
                        <Badge badgeContent={4} color="primary">
                            <ShoppingCartOutlined />
                        </Badge>
                    </MenuItem>
                </Right>
            </Wrapper>
        </Container>
    );
};

export default Banner;
