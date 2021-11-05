import React from 'react'
import styled from "styled-components";
import { mobile } from "../responsive";
import { Link } from 'react-router-dom';

const Container = styled.div`
    height: 50px;
    border: 0.2px solid lightgray;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #ebb29b;
`;
const Center = styled.div`
    flex: 1;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const NavItem = styled.div`
  font-size: 18px;
  cursor: pointer;
  margin-top: 5px;
  margin-left: 80px;
  color: black;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const Navbar = () => {
    return (
        <Container>
            <Center>
                <NavItem>ALL</NavItem>
                <NavItem>FOR MEN</NavItem>
                <NavItem>FOR WOMEN</NavItem>
                <NavItem>BEST SELLER</NavItem>
            </Center>
        </Container>
    )
}

export default Navbar
