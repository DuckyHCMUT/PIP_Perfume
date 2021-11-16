import styled from 'styled-components';
import { mobile } from '../responsive';
import { Link } from 'react-router-dom';

const Container = styled.div`
	width: 100vw;
	height: 100vh;
	background: linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0)),
		url('https://images.unsplash.com/photo-1611066527948-893f0aecdb79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80')
			center;
	background-size: cover;
	background-repeat: no-repeat;
	display: flex;
	align-items: center;
	justify-content: flex-start;
	overflow: hidden;
`;

const Logo = styled.h1`
	font-weight: bold;
	text-align: center;
	color: white;
	text-decoration: none;
	display: inline-block;
	${mobile({ fontSize: '24px' })}
`;
const LogoContainer = styled.div`
	display: flex;
	justify-content: center;
	margin-bottom: 10%;
`;
const Wrapper = styled.div`
	width: 25%;
	padding: 3%;
	border-radius: 10px;
	background: rgba(255, 255, 255, 0);
	backdrop-filter: blur(35px);
	border: 3px solid rgba(255, 255, 255, 0.05);
	box-shadow: 0 0 150px rgba(0, 0, 0, 0.3);
	overflow: hidden;
	margin-left: 15%;
`;

const Title = styled.h2`
	font-size: 25px;
	font-weight: 700;
	margin-bottom: 5%;
	color: white;
	letter-spacing: 1px;
`;

const Label = styled.h6`
	color: white;
	font-size: 16px;
	font-weight: 500;
	pointer-events: none;
	display: block;
	font-weight: 600;
`;

const Form = styled.form`
	display: flex;
	flex-direction: column;
`;

const Input = styled.input`
	flex: 1;
	width: 100%;
	margin-top: 10px;
	border: none;
	outline: none;
	font-size: 16px;
	color: #ffffff;
	background: 0;
	padding: 0px;
`;

const InputContainer = styled.div`
	margin: 20px 0px;
	min-width: 40%;
	width: 100%;
`;

const Button = styled.button`
	border: 0;
	text-decoration: none;
	border-radius: 5px;
	background-color: rgba(255, 255, 255, 0.2);
	border: 1px solid rgba(255, 255, 255, 0.2);
	color: rgba(255, 255, 255, 1);
	font-size: 16px;
	letter-spacing: 1px;
	cursor: pointer;
	text-transform: uppercase;
	padding: 10px;
	margin-bottom: 10px;
	margin-top: 20px;
	font-weight: bold;
	backdrop-filter: blur(35px);
	width: 100%;
`;

const RegisterLink = styled.a`
	font-size: 14px;
	text-decoration: none;
	cursor: pointer;
	color: rgba(255, 255, 255, 1);
	font-weight: bold;
	display: inline-block;
	margin-top: 20px;
`;
const ForgotPassword = styled.a`
	font-size: 14px;
	text-decoration: none;
	cursor: pointer;
	color: rgba(255, 255, 255, 1);
	font-weight: bold;
	display: block;
	float: right;
	margin-top: 5px;
`;
const SignUpForm = styled.div`
	width: 100%;
	text-align: center;
	color: white;
`;
const NormalText = styled.b`
	color: rgba(255, 255, 255, 1);
	font-size: 14px;
	font-weight: normal;
	display: inline-block;
`;
const Login = () => {
	return (
		<Container>
			<Wrapper>
				<LogoContainer>
					<Link to="/">
						<Logo>BKP.</Logo>
					</Link>
				</LogoContainer>
				<Title>SIGN IN</Title>
				<Form>
					<InputContainer>
						<Label>Email address</Label>
						<Input
							type="email"
							placeholder="Enter email"
							autoFocus
						/>
					</InputContainer>
					<InputContainer>
						<Label>Password</Label>
						<Input type="password" placeholder="Enter password" />
						<ForgotPassword>Forgot password?</ForgotPassword>
					</InputContainer>

					<Link to="/">
						<Button>Sign in</Button>
					</Link>
					<SignUpForm>
						<NormalText>Not a member? &nbsp; </NormalText>
						<Link to="/user/register">
							<RegisterLink> Sign up now</RegisterLink>
						</Link>
					</SignUpForm>
				</Form>
			</Wrapper>
		</Container>
	);
};

export default Login;
