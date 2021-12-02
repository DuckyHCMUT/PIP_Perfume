import React from "react";
import {
    //Menu,
    Input,
    //InputContainer,
    Form,
    Label,
    //Wrapper,
    //FlexWrapper,
    //Button,
} from "./AdminAddItem";
import styled from "styled-components";

const SearchContainer = styled.div`
    display: flex;
    align-items: center;

`;
// const SearchButton = styled.button`
//     padding: 0.5px 8px;
//     text-align: center;
//     text-decoration: none;
//     display: inline-block;
// `;

const AdminSearch = ({ onChange }) => {
    // const { search } = window.location.href;
    // const query = new URLSearchParams(search).get("perfume"); // Fetched the searched item successfully
    return (
        <Form method="get">
            <SearchContainer>
                <Label htmlFor="header-search" />
                <Input
                    type="text"
                    id="header-search"
                    placeholder="Search item"
                    name="item"
                    onChange={(e) => onChange(e.target.value)}
                />
                {/* <SearchButton
                    type="submit"
                    //onChange={onChange(!query ? "" : query)}
                >
                    {" "}
                    Search
                </SearchButton> */}
            </SearchContainer>
        </Form>
    );
};

export default AdminSearch;
