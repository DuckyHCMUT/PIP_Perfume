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
    margin-left: 20px;
    ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const BannerCart = () => {
    var loginState = localStorage.getItem("isLogin")

    const handleLogOut = () => {
		swal({
			title: 'Are you sure?',
			text: 'Do you want to log out?',
			icon: 'warning',
			buttons: true,
			dangerMode: true,
		}).then((willLogOut) => {
			if (willLogOut) {
				localStorage.setItem('isLogin', false);
                localStorage.setItem('currentUserName', -1);
                localStorage.setItem('currentUserId', -1);
				window.location.replace('/');
			}
		});
	};

    if (loginState === "true")
        return (
            <Container>
                <Wrapper>
                    <Left>
                        <Link style={{textDecoration: 'none'} }
                            to="/BlankPage">
                            <Logo>BKP.</Logo>
                        </Link>
                    </Left>

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
                        
                        <MenuItem>WELCOME, {localStorage.getItem("currentUserName")}!</MenuItem>

                        <Link
                            to="/BlankPage"
                            style={{ color: "inherit", textDecoration: "inherit" }}>
                            <MenuItem onClick = {() => handleLogOut()}>LOGOUT</MenuItem>
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
                        <Link style={{textDecoration: 'none'} }
                            to="/BlankPage">
                            <Logo>BKP.</Logo>
                        </Link>
                    </Left>

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
                        
                        <Link to ="/user/login"
                            style={{ color: "inherit", textDecoration: "inherit"}}
                        >
                            <MenuItem>LOGIN</MenuItem>
                        </Link>

                    </Right>
                </Wrapper>
            </Container>
        );
};

export default BannerCart;