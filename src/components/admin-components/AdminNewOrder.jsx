import { Button, createTheme, Link } from "@material-ui/core";
import styled from "styled-components";
import React, { useEffect, useState } from "react";
import axios from "axios";

const OrderDisplay = styled.div`
    flex: 3;
    border-radius: 5px;
    background: white;
    padding: 15px;
    margin: 15px;
    height: 700px;
`;

const Title = styled.div`
    flex: 1;
    font-size: 24px;
    font-weight: bold;
`;
const Wrapper = styled.div`
    display: flex;
`;
const Right = styled.div`
    flex: 1;
    cursor: pointer;
    text-align: right;
`;
const Center = styled.div`
    flex: 1;
    text-align: center;
`;
const OrderCard = styled.div`
    display: flex;
    border: 0.5px solid rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    padding: 5px;
    margin-top: 15px;
    padding-top: 10px;
    padding-bottom: 10px;
    width: 99%;
    align-items: center;
    justify-content: center;
`;
const OrderWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;
`;
const Heading = styled.div`
    flex: 0.7;
`;
const HeadingWrapper = styled.div`
    display: flex;
    font-size: 20px;
    font-weight: bold;
`;
const OrderNumber = styled.div`
    flex: 0.7;
    font-size: 17px;
    font-weight: bold;
`;
const OrderInfo = styled.div`
    flex: 1;
    font-size: 17px;
    text-align: center;
`;
const Info = styled.div`
    font-size: 17px;
`;
const OrderButtons = styled.div`
    flex: 1;
    font-size: 17px;
    justify-content: right;
    text-align: center;
`;
const AdminNewOrder = ({ data }) => {
    const [status, setStatus] = useState();
    const changeStatusTo = (newStatus, orderId) => {
        axios.post(`/api/order/${orderId}`, { status: { newStatus } });
    };

    //const id = ({ userId } = orders);
    //const user = await axios.get("/api/user", userId).then((user) => user);
    return (
        <OrderDisplay>
            <Wrapper>
                <Title>New Orders</Title>
                <Right>
                    <Link>See more</Link>
                </Right>
            </Wrapper>
            <HeadingWrapper>
                <Heading>Order ID</Heading>
                <Center> Items </Center>
                <Center> Information </Center>
                <Center> Total </Center>
                <Center> Status </Center>
                <Center>Action</Center>
            </HeadingWrapper>
            <OrderWrapper>
                {/*<OrderCard>
                    <OrderNumber>1234567</OrderNumber>
                    <OrderInfo>
                        <Info>John</Info>
                        <Info>email</Info>
                        <Info>time</Info>
                    </OrderInfo>
                    <OrderButtons>
                        <ThemeProvider theme={theme}>
                            <Button variant="outlined">Complete</Button>
                            <Button variant="outlined">Cancel</Button>
                        </ThemeProvider>
                    </OrderButtons>
                </OrderCard>*/}
                {data.map((order, index) => {
                    const list = order.items;
                    return (
                        <OrderCard key={index}>
                            <OrderNumber>
                                #{order._id.substr(order._id.length - 8)}
                            </OrderNumber>
                            <OrderInfo>
                                {list.map((item) => {
                                    return (
                                        <Info>
                                            {item.name} x {item.quantity}
                                        </Info>
                                    );
                                })}
                            </OrderInfo>
                            <OrderInfo>
                                <Info>John</Info>
                                <Info>email</Info>
                                <Info>time</Info>
                            </OrderInfo>
                            <OrderInfo>
                                <Info>{order.bill}</Info>
                            </OrderInfo>
                            <OrderInfo>
                                <Info>{order.status}</Info>
                            </OrderInfo>
                            <OrderButtons>
                                <Button
                                    variant="outlined"
                                    onClick={changeStatusTo(
                                        "completed",
                                        order._id
                                    )}
                                >
                                    Complete
                                </Button>
                                <Button
                                    variant="outlined"
                                    onClick={changeStatusTo(
                                        "canceled",
                                        order._id
                                    )}
                                >
                                    Cancel
                                </Button>
                            </OrderButtons>
                        </OrderCard>
                    );
                })}
            </OrderWrapper>
        </OrderDisplay>
    );
};

export default AdminNewOrder;
