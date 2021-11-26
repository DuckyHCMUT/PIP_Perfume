import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import AdminNewOrder from "../components/admin-components/AdminNewOrder";
import AdminNewUser from "../components/admin-components/AdminNewUser";
import AdminLogin from "./AdminLogin";
//const config = require("config");

const Container = styled.div`
    padding: 20px;
    background-color: #06243b;
    height: 100vh;
`;
const StatWrapper = styled.div`
    display: flex;
`;
const StatSummary = styled.div`
    flex: 1;
    border-radius: 5px;
    background: white;
    padding: 10px;
    margin: 15px;
    height: 100px;
`;

const Title = styled.div`
    flex: 1;
    font-size: 24px;
    font-weight: bold;
`;

const AdminHome = () => {
    const [token, setToken] = useState();
    const [orders, setOrders] = useState();

    //if (token != {config.get("ADMIN_ID")}) return <AdminLogin setToken={setToken} />;
    //else
    useEffect(() => {
        axios.get("/api/orders").then((data) => setOrders(data.data));
    }, []);
    return (
        <Container>
            <StatWrapper>
                <StatSummary>
                    <Title>Sales Today</Title>
                </StatSummary>
                <StatSummary>
                    <Title>Total Users</Title>
                </StatSummary>
                <StatSummary>
                    <Title>Total Sales</Title>
                </StatSummary>
            </StatWrapper>
            <StatWrapper>
                {orders ? <AdminNewOrder data={orders} /> : <h1>Loading...</h1>}
                <AdminNewUser />
            </StatWrapper>
        </Container>
    );
};

export default AdminHome;
