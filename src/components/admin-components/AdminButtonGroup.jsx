import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
    flex: 1;
    align-items: center;
    justify-content: center;
`;
const FlexWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;
const Button = styled.button`
    margin: auto;
    margin-top: 20px;
    width: 100px;
    font-size: 15px;
`;
const AdminButtonGroup = () => {
    return (
        <FlexWrapper
            style={{
                flexDirection: "row",
            }}
        >
            <Wrapper />
            <Wrapper style={{ textAlign: "center", fontSize: 18 }}>
                <Link
                    style={{ textDecoration: "none" }}
                    to="/admin/dashboard/items/add"
                >
                    <Button>ADD</Button>
                </Link>
                <Link
                    style={{ textDecoration: "none" }}
                    to="/admin/dashboard/items/update"
                >
                    <Button>MODIFY</Button>
                </Link>
            </Wrapper>
            <Wrapper />
        </FlexWrapper>
    );
};

export default AdminButtonGroup;
