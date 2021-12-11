import { Badge } from "@material-ui/core";
import { ShoppingCartOutlined } from "@material-ui/icons";
import styled from "styled-components";
import { mobile } from "../responsive";
import { Link } from "react-router-dom";
import swal from "sweetalert";

const Container = styled.div`
    height: 100%;
    ${mobile({ height: "50px" })}
`;
const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: white;
    ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`;

const SearchContainer = styled.div`
    display: flex;
    background-color: #ffc890;
    align-items: center;
    margin-left: 30px;
    padding: 4px;
`;

const Input = {
    border: "0.5px solid white",
    width: "90%",
};

const Center = styled.div`
    flex: 1;
    text-align: center;
`;

const Logo = styled.h1`
    font-weight: bold;
    cursor: pointer;
    color: black;
    ${mobile({ fontSize: "24px" })}
`;
const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    ${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuItem = styled.div`
    font-size: 18px;
    cursor: pointer;
    margin-left: 25px;
    ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const SearchButton = styled.button`
    background-color: rgba(255, 255, 255, 0.2);
    padding: 0.5px 8px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
`;

const Banner = ({ onChange }) => {
    const { search } = window.location;
    const query = new URLSearchParams(search).get("perfume"); // Fetched the searched item successfully
    var loginState = localStorage.getItem("isLogin");

    const handleLogOut = () => {
        swal({
            title: "Are you sure?",
            text: "Do you want to log out?",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        }).then((willLogOut) => {
            if (willLogOut) {
                localStorage.setItem('isLogin', false);
                localStorage.setItem('currentUserName', -1);
                localStorage.setItem('currentUserId', -1);
                window.location.replace("/");
            }
        });
    };

    if (loginState === "true")
        return (
            <Container>
                <Wrapper>
                    <Left>
                        <Link
                            style={{ textDecoration: "none" }}
                            to="/BlankPage"
                        >
                            <Logo>BKP.</Logo>
                        </Link>
                    </Left>
                    <Center>
                        <form action="/" method="get">
                            <SearchContainer>
                                <label htmlFor="header-search" />
                                <input
                                    type="text"
                                    id="header-search"
                                    placeholder="Search perfume"
                                    name="perfume"
                                    style={Input}
                                />
                                <Right>
                                    <SearchButton
                                        type="submit"
                                        onClick={onChange(!query ? "" : query)}
                                    >
                                        {" "}
                                        {/* After pressing this button, the query will already hold the searched value*/}
                                        Search
                                    </SearchButton>
                                </Right>
                            </SearchContainer>
                        </form>
                    </Center>

                    <Right>
                        <Link 
                            to = "/AboutUs"
                            style={{
                                color: "inherit",
                                textDecoration: "inherit"}}>
                            <MenuItem>
                                ABOUT US
                            </MenuItem>
                        </Link>

                        <MenuItem>
                            WELCOME, {localStorage.getItem("currentUserName")}!
                        </MenuItem>

                        <Link
                            to="/BlankPage"
                            style={{
                                color: "inherit",
                                textDecoration: "inherit",
                            }}
                        >
                            <MenuItem onClick={() => handleLogOut()}>
                                LOGOUT
                            </MenuItem>
                        </Link>

                        <Link
                            to="/user/cart"
                            style={{
                                color: "inherit",
                                textDecoration: "inherit",
                            }}
                        >
                            <MenuItem>
                                <Badge badgeContent={0} color="primary">
                                    <ShoppingCartOutlined />
                                </Badge>
                            </MenuItem>
                        </Link>
                    </Right>
                </Wrapper>
            </Container>
        );
    else
        return (
            <Container>
                <Wrapper>
                    <Left>
                        <Link
                            style={{ textDecoration: "none" }}
                            to="/BlankPage"
                        >
                            <Logo>BKP.</Logo>
                        </Link>
                    </Left>
                    <Center>
                        <form action="/" method="get">
                            <SearchContainer>
                                <label htmlFor="header-search" />
                                <input
                                    type="text"
                                    id="header-search"
                                    placeholder="Search perfume"
                                    name="perfume"
                                    style={Input}
                                />
                                <Right>
                                    <SearchButton
                                        type="submit"
                                        onClick={onChange(!query ? "" : query)}
                                    >
                                        {" "}
                                        {/* After pressing this button, the query will already hold the searched value*/}
                                        Search
                                    </SearchButton>
                                </Right>
                            </SearchContainer>
                        </form>
                    </Center>

                    <Right>
                        <Link 
                            to = "/AboutUs"
                            style={{
                                color: "inherit",
                                textDecoration: "inherit"}}>
                            <MenuItem>
                                ABOUT US
                            </MenuItem>
                        </Link>

                        <Link
                            to="/user/login"
                            style={{
                                color: "inherit",
                                textDecoration: "inherit",
                            }}
                        >
                            <MenuItem>LOGIN</MenuItem>
                        </Link>

                        <Link
                            to="/user/cart"
                            style={{
                                color: "inherit",
                                textDecoration: "inherit",
                            }}
                        >
                            <MenuItem>
                                <Badge badgeContent={0} color="primary">
                                    <ShoppingCartOutlined />
                                </Badge>
                            </MenuItem>
                        </Link>
                    </Right>
                </Wrapper>
            </Container>
        );
};

export default Banner;
