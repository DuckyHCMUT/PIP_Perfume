import styled from "styled-components";
import React from "react";
import AdminAddItem from "../components/admin-components/AdminAddItem";
import AdminNavbar from "../components/admin-components/AdminNavbar";
import AdminButtonGroup from "../components/admin-components/AdminButtonGroup";

const Container = styled.div`
    background-color: #06243b;
    height: 100vh;
`;

const AdminAddItemPage = () => {
    return (
        <Container>
            <AdminNavbar />
            <AdminButtonGroup />
            <AdminAddItem />
        </Container>
    );
};

export default AdminAddItemPage;
