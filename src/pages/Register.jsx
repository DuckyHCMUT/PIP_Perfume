import styled from 'styled-components';
import { mobile } from '../responsive';
import { Link } from 'react-router-dom';

const Container = styled.div`
	width: 100vw;
	height: 100vh;
	background: linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0)),
		url('https://images.unsplash.com/photo-1547553641-a18afbab3c96?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2071&q=80')
			center;
	background-size: cover;
	display: flex;
	align-items: center;
	justify-content: flex-start;
`;

const Wrapper = styled.div`
	width: 30%;
	padding: 3%;
	border-radius: 10px;
	background: rgba(255, 255, 255, 0);
	backdrop-filter: blur(35px);
	border: 3px solid rgba(255, 255, 255, 0.1);
	box-shadow: 0 0 150px rgba(0, 0, 0, 0.3);
	overflow: hidden;
	margin-left: 10%;
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

const Select = styled.select`
	flex: 1;
	width: 80%;
	margin-top: 10px;
	border: none;
	outline: none;
	font-size: 16px;
	background: 0;
	border: 1px solid rgba(255, 255, 255, 0.2);
	color: #2aad84;
`;

const InputContainer = styled.div`
	margin: 20px 0px;
	min-width: 40%;
	width: 100%;
`;
const SelectContainer = styled.div`
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

const SignInLink = styled.a`
	font-size: 14px;
	text-decoration: none;
	cursor: pointer;
	color: rgba(255, 255, 255, 1);
	font-weight: bold;
	margin-top: 20px;
	display: inline-block;
`;
const LoginForm = styled.div`
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
const GroupContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	gap: 10%;
`;

const Agreement = styled.span`
	font-size: 12px;
	margin: 20px 0px;
	color: white;
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

const Register = () => {
	return (
		<Container>
			<Wrapper>
				<LogoContainer>
					<Link to="/">
						<Logo>BKP.</Logo>
					</Link>
				</LogoContainer>
				<Title>CREATE AN ACCOUNT</Title>
				<Form>
					<GroupContainer>
						<InputContainer>
							<Label>First name</Label>
							<Input
								type="text"
								placeholder="Enter first name"
								autoFocus
							/>
						</InputContainer>
						<InputContainer>
							<Label>Last name</Label>
							<Input type="text" placeholder="Enter last name" />
						</InputContainer>
					</GroupContainer>
					<GroupContainer>
						<SelectContainer>
							<Label>Gender</Label>
							<Select name="gender">
								<option value="none" selected disabled>
									Select gender
								</option>
								<option value="male">Male</option>
								<option value="female">Female</option>
								<option value="other">Other</option>
							</Select>
						</SelectContainer>
						<InputContainer>
							<Label>Birthday</Label>
							<Input type="date" placeholder="Your birthday" />
						</InputContainer>
					</GroupContainer>
					<InputContainer>
						<Label>Email address</Label>
						<Input type="email" placeholder="Enter email" />
					</InputContainer>
					<GroupContainer>
						<InputContainer>
							<Label>Password</Label>
							<Input
								type="password"
								placeholder="Enter password"
							/>
						</InputContainer>
						<InputContainer>
							<Label>Confirm password</Label>
							<Input
								type="password"
								placeholder="Enter password again"
							/>
						</InputContainer>
					</GroupContainer>
					<Agreement>
						By creating an account, I consent to the processing of
						my personal data in accordance with the{' '}
						<b>PRIVACY POLICY</b>
					</Agreement>
					
					<Link to="/user/login">
						<Button>CREATE</Button>
					</Link>

					<LoginForm>
						<NormalText>Already have an account? &nbsp;</NormalText>
						<Link to="/user/login">
							<SignInLink> Sign in </SignInLink>
						</Link>
					</LoginForm>
				</Form>
			</Wrapper>
		</Container>
	);
};

export default Register;
