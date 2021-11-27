import axios from "axios";
import moment from "moment";
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
const Stat = styled.div`
    font-size: 30px;
    margin-top: 5px;
    font-weight: bold;
    color: #96d900;
    text-align: center;
`;
const addDot = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
};
const AdminHome = () => {
    const [token, setToken] = useState();
    const [orders, setOrders] = useState();
    const [saleCount, setSaleCount] = useState("0");
    const [userCount, setUserCount] = useState("0");
    const [totalCount, setTotal] = useState("0");

    //if (token != {config.get("ADMIN_ID")}) return <AdminLogin setToken={setToken} />;
    //else
    useEffect(() => {
        var totalsale = 0;
        axios.get("/api/orders").then((data) => {
            setOrders(data.data);
            setSaleCount(data.data.length);
            data.data.forEach((object) => {
                totalsale += object.bill;
            });
            setTotal(totalsale);
        });

        axios.get("/api/usercount").then((data) => setUserCount(data.data));
    }, []);
    return (
        <Container>
            <StatWrapper>
                <StatSummary>
                    <Title>
                        Orders Today - {moment().format("MMMM Do YYYY")}
                    </Title>
                    <Stat>{addDot(saleCount)}</Stat>
                </StatSummary>
                <StatSummary>
                    <Title>Total Users</Title>
                    <Stat>{addDot(userCount)}</Stat>
                </StatSummary>
                <StatSummary>
                    <Title>Revenue Today</Title>
                    <Stat>{addDot(totalCount)}</Stat>
                </StatSummary>
            </StatWrapper>
            <StatWrapper>
                {orders ? <AdminNewOrder data={orders} /> : <h1>Loading...</h1>}
            </StatWrapper>
        </Container>
    );
};

export default AdminHome;
