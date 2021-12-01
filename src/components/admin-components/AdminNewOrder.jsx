import { Button, 
        //createTheme, 
        } from "@material-ui/core";
import styled from "styled-components";
import React from "react";
import axios from "axios";

const OrderDisplay = styled.div`
    flex: 3;
    border-radius: 5px;
    background: white;
    padding: 15px;
    margin: 15px;
    height: 100%;
`;

const Title = styled.div`
    flex: 1;
    font-size: 24px;
    font-weight: bold;
`;
const Wrapper = styled.div`
    display: flex;
`;
// const Right = styled.div`
//     flex: 1;
//     cursor: pointer;
//     text-align: right;
// `;
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
const changeStatusToComplete = (orderId, current) => {
    if (current === "canceled") alert("Order already canceled!");
    else
        axios
            .put(`/api/order/${orderId}`, { status: "completed" })
            .then(console.log("updated"));
};
const changeStatusToCancel = (orderId, current) => {
    if (current === "completed") alert("Order already completed!");
    else
        axios
            .put(`/api/order/${orderId}`, { status: "canceled" })
            .then(console.log("updated"));
};
const AdminNewOrder = ({ data }) => {
    //const id = ({ userId } = orders);
    //const user = await axios.get("/api/user", userId).then((user) => user);
    return (
        <OrderDisplay>
            <Wrapper>
                <Title>New Orders</Title>
                {/* <Right>
                    <Link>See more</Link>
                </Right> */}
            </Wrapper>
            <HeadingWrapper>
                <Heading>Order ID</Heading>
                <Center> Items </Center>
                <Center> Information </Center>
                <Center> Total </Center>
                <Center> Status </Center>
                <Center> Action</Center>
            </HeadingWrapper>
            <OrderWrapper>
                {data.map((order, index) => {
                    const list = order.items;
                    var name,
                        addr,
                        tel = "N/A";
                    try {
                        name = order.shippingInfo.name;
                        addr = order.shippingInfo.address;
                        tel = order.shippingInfo.contact;
                    } catch (e) {
                        console.log(e ? e : "Error occurred");
                    }
                    var mainColor;
                    //
                    if (order.status === "pending") mainColor = "#ffe38d";
                    else if (order.status === "canceled") mainColor = "#ff938b";
                    else mainColor = "#dcff8d";
                    //
                    return (
                        <OrderCard
                            key={index}
                            style={{ backgroundColor: mainColor }}
                        >
                            <OrderNumber>
                                #
                                {order._id
                                    .substr(order._id.length - 8)
                                    .toUpperCase()}
                            </OrderNumber>
                            <OrderInfo>
                                {list.map((item) => {
                                    return (
                                        <Info>
                                            {item.name + " " + (item.volume ? "(" + item.volume + ")" : "")} x {item.quantity}
                                        </Info>
                                    );
                                })}
                            </OrderInfo>
                            <OrderInfo>
                                <Info>{name}</Info>
                                <Info>{addr}</Info>
                                <Info>{tel}</Info>
                            </OrderInfo>
                            <OrderInfo>
                                <Info>
                                    {order.bill
                                        .toString()
                                        .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
                                    VND
                                </Info>
                            </OrderInfo>
                            <OrderInfo>
                                <Info>{order.status}</Info>
                            </OrderInfo>
                            <OrderButtons>
                                <Button
                                    variant="outlined"
                                    style={{ backgroundColor: "white" }}
                                    onClick={() => {
                                        changeStatusToComplete(
                                            order._id,
                                            order.status
                                        );
                                    }}
                                >
                                    Complete
                                </Button>
                                <Button
                                    variant="outlined"
                                    style={{ backgroundColor: "#f27067" }}
                                    onClick={() => {
                                        changeStatusToCancel(
                                            order._id,
                                            order.status
                                        );
                                    }}
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
