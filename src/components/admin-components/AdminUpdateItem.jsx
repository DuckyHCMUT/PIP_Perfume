import React, { useState } from "react";
import { Title } from "../../pages/AdminHome";
import { Menu } from "./AdminAddItem";
import styled from "styled-components";
import AdminSearch from "./AdminSearch";
import AdminFoundItems from "./AdminFoundItems";
import AdminChosenItem from "./AdminChosenItem";

const MainWrapper = styled.div`
    margin-top: 10px;
    text-align: center;
`;

const AdminUpdateItem = () => {
    const [searchValue, setSearchValue] = useState("default");
    const [chosen, setChosen] = useState();

    const handleSearch = (val) => {
        setSearchValue(val);
    };
    const handleEdit = (val) => {
        setChosen(val);
    };

    return (
        <Menu>
            <MainWrapper>
                <Title>Modify Item</Title>
            </MainWrapper>
            <AdminSearch onChange={handleSearch} />
            <AdminFoundItems value={searchValue} pickItem={handleEdit} />
            <MainWrapper>
                <Title>Detail</Title>
            </MainWrapper>
            {chosen ? <AdminChosenItem value={chosen} /> : "Nothing to show..."}
        </Menu>
    );
};

export default AdminUpdateItem;
