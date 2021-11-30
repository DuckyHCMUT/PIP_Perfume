import { Link } from "react-router-dom";
import axios from "axios";
import moment from "moment";
import React, { useEffect, useState } from "react";

import styled from "styled-components";
import AdminNewOrder from "../components/admin-components/AdminNewOrder";
import AdminLogin from "./AdminLogin";
import AdminNavbar from "../components/admin-components/AdminNavbar";
//const config = require("config");

const Container = styled.div`
    background-color: #06243b;
    height: 100vh;
`;

export const StatWrapper = styled.div`
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

export const Title = styled.div`
    flex: 1;
    font-size: 24px;
    font-weight: bold;
`;
const Right = styled.div`
    text-align: right;
    color: white;
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
    const [token, setToken] = useState(localStorage.getItem("token"));
    const [orders, setOrders] = useState();
    const [saleCount, setSaleCount] = useState("0");
    const [userCount, setUserCount] = useState("0");
    const [totalCount, setTotal] = useState("0");
    const ADMIN_ID = "61966bf1317a482f90ca7cd2";

    useEffect(() => {
        var totalsale = 0;
        var totalorder = 0;
        var yesterday = new Date();
        var date;
        yesterday = moment(yesterday.setDate(yesterday.getDate() - 1)).format(
            "DD-MM-YYYY"
        );
        //
        axios.get("/api/orders").then((data) => {
            setOrders(data.data);

            data.data.forEach((object) => {
                date = moment(object.date_added).format("DD-MM-YYYY");
                if (date >= yesterday) {
                    totalorder += 1;
                    if (object.status === "completed") totalsale += object.bill;
                }
            });
            setTotal(totalsale);
            setSaleCount(totalorder);
        });

        axios.get("/api/usercount").then((data) => setUserCount(data.data));
    }, []);
    // if login id is admin AND token is already in storage
    //if (token === ADMIN_ID && localStorage.getItem("token")) {
    return (
        <Container>
            <AdminNavbar />
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
    //} else return <AdminLogin setToken={setToken} />;
};

export default AdminHome;
