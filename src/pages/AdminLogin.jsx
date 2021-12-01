import React, { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import axios from "axios";
import swal from "sweetalert";

const Container = styled.div`
    height: 100vh;
    background: linear-gradient(
        0deg,
        rgb(2, 0, 36) 0%,
        rgb(9, 63, 121) 30%,
        rgb(0, 212, 255) 100%
    );
    display: flex;
`;
const Menu = styled.div`
    height: 400px;
    width: 300px;
    border-radius: 5%;
    background: white;
    margin: auto;
    margin-top: 80px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
`;
const Logo = styled.h1`
    font-weight: bold;
    color: black;
    font-size: 28px;
`;
const Form = styled.form`
    display: flex;
    flex-direction: column;
    margin-top: 50px;
`;
const Label = styled.h6`
    font-size: 16px;
    font-weight: 500;
    pointer-events: none;
    margin-top: 10px;
    display: block;
    font-weight: 600;
`;

const Input = styled.input`
    flex: 1;
    width: 95%;
    margin-top: 5px;
    border: 1px solid rgba(0, 0, 0, 0.4);
    border-radius: 5px;
    outline: none;
    padding: 5px;
    font-size: 16px;
    background: 0;
`;

const InputContainer = styled.div`
    margin-right: 30px;
    min-width: 40%;
    width: 100%;
`;
const Button = styled.button`
    background-color: #0398fc;
    color: black;
    padding: 5px 15px;
    border-radius: 5px;
    outline: 0;
    text-transform: uppercase;
    font-weight: bold;
    margin: 20px 0px;
    cursor: pointer;
    box-shadow: 0px 2px 2px lightgray;
    transition: ease background-color 250ms;
    &:hover {
        background-color: #2803fc;
        color: white;
    }
    &:disabled {
        cursor: default;
        opacity: 0.7;
    }
`;

const AdminLogin = ({ setToken }) => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const handleSubmit = async (e) => {
        e.preventDefault();
        const user = { email, password };
        // Attempt to login
        axios
            .post("/api/login", user)
            .then((res) => {
                localStorage.setItem("isAdminLogin", true);
                localStorage.setItem("adminID", res.data.user.id === "61966bf1317a482f90ca7cd2" ? res.data.user.id : -1);
                localStorage.setItem("token", res.data.token);
                setToken(res.data.user.id);
                
                if (res.data.user.id === "61966bf1317a482f90ca7cd2")
                    swal({
                        title: "Logged in as Admin!",
                        icon: "success"
                    })
                else
                    swal({
                        title: "Incorrect credentials!",
                        text: "The username or password is incorrect, please try again",
                        icon: "warning",
                        dangerMode: true,
                    })
            })
            .catch((error) => {
                swal({
                    title: "Something wrong!",
                    text: error.response.data.msg,
                    icon: "warning",
                    dangerMode: true,
                })}
            );
    };

    return (
        <Container>
            <Menu>
                <Logo>BKP.</Logo>
                <Label>For Admin</Label>
                <Form onSubmit={handleSubmit}>
                    <InputContainer>
                        <Label>Email address</Label>
                        <Input
                            type="email"
                            placeholder="Enter email"
                            onChange={(e) => setEmail(e.target.value)}
                            autoFocus
                        />
                    </InputContainer>
                    <InputContainer>
                        <Label>Password</Label>
                        <Input
                            type="password"
                            placeholder="Enter password"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </InputContainer>
                    <Button>Login</Button>
                </Form>
            </Menu>
        </Container>
    );
};

AdminLogin.propTypes = {
    setToken: PropTypes.func.isRequired,
};

export default AdminLogin;
