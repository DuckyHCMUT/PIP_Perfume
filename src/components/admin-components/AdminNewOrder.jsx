import { Link } from "@material-ui/core";
import styled from "styled-components";
import React from "react";

const OrderDisplay = styled.div`
    flex: 2.5;
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
const OrderCard = styled.div`
    border: 0.5px solid grey 50%;
    border-radius: 5px;
    padding: 5px;
    height: 100px;
    width: 80%;
`;

const AdminNewOrder = () => {
    return (
        <OrderDisplay>
            <Wrapper>
                <Title>New Orders</Title>
                <Right>
                    <Link>See more</Link>
                </Right>
            </Wrapper>
            <OrderCard>order</OrderCard>
        </OrderDisplay>
    );
};

export default AdminNewOrder;
