import React from "react";
import styled from "styled-components";
import AdminButtonGroup from "../components/admin-components/AdminButtonGroup";
import AdminNavbar from "../components/admin-components/AdminNavbar";
import AdminUpdateItem from "../components/admin-components/AdminUpdateItem";

const Container = styled.div`
    background-color: #06243b;
    min-height: 100vh;
`;

const AdminUpdateItemPage = () => {
    return (
        <Container>
            <AdminNavbar />
            <AdminButtonGroup />
            <AdminUpdateItem />
        </Container>
    );
};

export default AdminUpdateItemPage;
