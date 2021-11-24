import { Link } from "@material-ui/core";
import styled from "styled-components";
import React from "react";

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
const NewUserDisplay = styled.div`
    flex: 1;
    border-radius: 5px;
    background: white;
    padding: 15px;
    margin: 15px;
    height: 700px;
`;

const AdminNewUser = () => {
    return (
        <NewUserDisplay>
            <Wrapper>
                <Title>New Users</Title>
                <Right>
                    <Link>See more</Link>
                </Right>
            </Wrapper>
        </NewUserDisplay>
    );
};

export default AdminNewUser;
