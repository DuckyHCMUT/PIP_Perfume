import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const Title = styled.div`
    flex: 1;
    font-size: 24px;
    font-weight: bold;
`;
export const Item = styled.div`
    flex: 1;
    font-size: 18px;
    margin-right: 15px;
    cursor: pointer;
    text-align: right;
`;
export const Logo = styled.h1`
    font-weight: bold;
    cursor: pointer;
    color: black;
    font-size: 22px;
    margin-left: 15px;
`;
export const StatWrapper = styled.div`
    display: flex;
`;
export const Navbar = styled.div`
    display: flex;
    height: 50px;
    align-items: center;
    justify-content: right;

    background: white;
`;

const AdminNavbar = () => {
    return (
        <Navbar>
            <Title>
                <Link style={{ textDecoration: "none" }} to="/">
                    <Logo>BKP.</Logo>
                </Link>
            </Title>
            <Title />
            <StatWrapper>
                <Link style={{ textDecoration: "none" }} to="/admin/dashboard">
                    <Item>Home</Item>
                </Link>
                <Link
                    style={{ textDecoration: "none" }}
                    to="/admin/dashboard/items/add"
                >
                    <Item>Items</Item>
                </Link>

                <Item>Logout</Item>
            </StatWrapper>
        </Navbar>
    );
};

export default AdminNavbar;
