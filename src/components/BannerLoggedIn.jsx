import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import img from "../resource/banner.png";
import { mobile } from "../responsive";
import { Link } from "react-router-dom";

const Container = styled.div`
    height: 100%;
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
    background-color: #d4a08a;
    align-items: center;
    margin-left: 30px;
    padding: 2px;
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
    border: 5px solid pink;
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
    font-size: 20px;
    font-weight: bold;
    cursor: pointer;
    margin-left: 25px;
    ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const SignInLink = styled.a`
    font-size: 14px;
    text-decoration: none;
    cursor: pointer;
    font-weight: bold;
    display: inline-block;
    margin-top: 20px;
`;

const BannerLoggedIn = (userName) => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Link to="/">
                        <Logo>BKP.</Logo>
                    </Link>
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
                    <Link
                        to="/"
                        style={{ color: "inherit", textDecoration: "inherit" }}
                    >
                        <MenuItem>HOME</MenuItem>
                    </Link>
                    <MenuItem>FAQ</MenuItem>
                    <MenuItem>CONTACT</MenuItem>
                    <MenuItem>Welcome, {userName}!</MenuItem>

                    {/* Cart */}
                    <Link
                        to="/user/cart"
                        style={{ color: "inherit", textDecoration: "inherit" }}
                    >
                        <MenuItem>
                            <Badge badgeContent={4} color="primary">
                                <ShoppingCartOutlined />
                            </Badge>
                        </MenuItem>
                    </Link>
                </Right>
            </Wrapper>
        </Container>
    );
};

export default BannerLoggedIn;