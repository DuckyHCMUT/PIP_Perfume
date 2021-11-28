import styled from "styled-components";
import React, { useState } from "react";
import { Navbar, Title, Item, Logo, StatWrapper } from "./AdminHome";
import { Link } from "react-router-dom";
import axios from "axios";

const Container = styled.div`
    background-color: #06243b;
    height: 100vh;
`;
const Menu = styled.div`
    background-color: white;
    padding: 10px;
    height: 700px;
    width: 600px;
    margin: auto;
    margin-top: 30px;
    border-radius: 5px;
`;
const TitleWrapper = styled.div`
    margin-top: 10px;
    text-align: center;
`;
const InputContainer = styled.div`
    margin-right: 30px;
    min-width: 40%;
    width: 100%;
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
const Wrapper = styled.div`
    flex: 1;
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
const ImageFrame = styled.img`
    height: 150px;
    width: 80px;
    margin-left: auto;
    margin-right: auto;
`;

const AdminItems = () => {
    const [Name, setName] = useState();
    const [Brand, setBrand] = useState();
    const [Gender, setGender] = useState("Unisex");
    const [Image, setImage] = useState("");
    const [Option, setOption] = useState();
    const [Volume1, setVolume1] = useState(["0", "0", "0"]);
    const [Volume2, setVolume2] = useState("0");
    const [Volume3, setVolume3] = useState("0");
    const [Price1, setPrice1] = useState(["0", "0", "0"]);
    const [Price2, setPrice2] = useState("0");
    const [Price3, setPrice3] = useState("0");

    const handleSubmit = async (e) => {
        e.preventDefault();
        class option {
            constructor(OptionID, Volume, Price) {
                this.OptionID = OptionID;
                this.Volume = Volume;
                this.Price = Price;
            }
        }
        const option1 = new option("1000001", Volume1, Price1);
        console.log("option1: ", option1);
        const ID = 50;
        var options, Price_range;
        if (Volume2 === "0") {
            options = [option1];
            Price_range = Price1.toString() + "VND";
        } else if (Volume3 === "0") {
            const option2 = new option("1000002", Volume2, Price2);
            console.log("option2: ", option2);
            options = [option1, option2];
            Price_range = `${Price1.toString()}VND - ${Price2.toString()}VND`;
        } else {
            const option2 = new option("1000002", Volume2, Price2);
            const option3 = new option("1000003", Volume3, Price3);
            console.log("option2: ", option2);
            console.log("option3: ", option3);
            options = [option1, option2, option3];
            Price_range = `${Price1.toString()}VND - ${Price3.toString()}VND`;
        }
        setOption(options);
        const item = {
            Gender,
            ID,
            Brand,
            Name,
            Image,
            Price_range,
            Option,
        };
        axios
            .post("/api/items", item)
            .then(() => alert("Successfully Added"))
            .catch((err) => console.log(err));
    };

    return (
        <Container>
            <Navbar>
                <Title>
                    <Link style={{ textDecoration: "none" }} to="/">
                        <Logo>BKP.</Logo>
                    </Link>
                </Title>
                <Title />
                <StatWrapper>
                    <Link
                        style={{ textDecoration: "none" }}
                        to="/admin/dashboard"
                    >
                        <Item>Home</Item>
                    </Link>
                    <Link style={{ textDecoration: "none" }} to="/">
                        <Item>Items</Item>
                    </Link>

                    <Item>Logout</Item>
                </StatWrapper>
            </Navbar>
            <Menu>
                <TitleWrapper>
                    <Title>Add Item</Title>
                    <Form onSubmit={handleSubmit}>
                        <InputContainer>
                            <Label>Product Name*</Label>
                            <Input
                                type="text"
                                placeholder="Name"
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </InputContainer>
                        <InputContainer>
                            <Label>Product Brand*</Label>
                            <Input
                                type="text"
                                placeholder="Brand"
                                onChange={(e) => setBrand(e.target.value)}
                                required
                            />
                        </InputContainer>

                        <FlexWrapper>
                            <InputContainer style={{ display: "flex" }}>
                                <Wrapper>
                                    <Label>Gender*</Label>
                                </Wrapper>
                                <Wrapper>
                                    <Input
                                        type="radio"
                                        value="Male"
                                        id="male"
                                        name="gender"
                                        onChange={(e) =>
                                            setGender(e.target.value)
                                        }
                                    />
                                    <Label for="male">Male</Label>
                                </Wrapper>
                                <Wrapper>
                                    <Input
                                        type="radio"
                                        value="Female"
                                        id="female"
                                        name="gender"
                                        onChange={(e) =>
                                            setGender(e.target.value)
                                        }
                                    />
                                    <Label for="female">Female</Label>
                                </Wrapper>
                                <Wrapper>
                                    <Input
                                        type="radio"
                                        value="Unisex"
                                        id="unisex"
                                        name="gender"
                                        onChange={(e) =>
                                            setGender(e.target.value)
                                        }
                                        defaultChecked
                                    />
                                    <Label for="unisex">Unisex</Label>
                                </Wrapper>
                            </InputContainer>
                        </FlexWrapper>
                        <ImageFrame src={Image} />
                        <InputContainer>
                            <Label>Image URL</Label>
                            <Input
                                type="text"
                                placeholder="URL"
                                onChange={(e) => setImage(e.target.value)}
                            />
                        </InputContainer>
                        <InputContainer style={{ display: "flex" }}>
                            <Wrapper>
                                <Title style={{ fontSize: 18 }}>
                                    Option 1*
                                </Title>
                                <Label>Volume</Label>
                                <Input
                                    type="text"
                                    placeholder="Volume in ml"
                                    onChange={(e) => setVolume1(e.target.value)}
                                    required
                                />
                                <Label>Price</Label>
                                <Input
                                    type="text1"
                                    placeholder="Price in VND"
                                    onChange={(e) => setPrice1(e.target.value)}
                                    required
                                />
                            </Wrapper>
                            <Wrapper>
                                <Title style={{ fontSize: 18 }}>Option 2</Title>
                                <Label>Volume</Label>
                                <Input
                                    type="text"
                                    placeholder="Volume in ml"
                                    onChange={(e) => setVolume2(e.target.value)}
                                />
                                <Label>Price</Label>
                                <Input
                                    type="text"
                                    placeholder="Price in VND"
                                    onChange={(e) => setPrice2(e.target.value)}
                                />
                            </Wrapper>
                            <Wrapper>
                                <Title style={{ fontSize: 18 }}>Option 3</Title>
                                <Label>Volume</Label>
                                <Input
                                    type="text"
                                    placeholder="Volume in ml"
                                    onChange={(e) => setVolume3(e.target.value)}
                                />
                                <Label>Price</Label>
                                <Input
                                    type="text"
                                    placeholder="Price in VND"
                                    onChange={(e) => setPrice3(e.target.value)}
                                />
                            </Wrapper>
                        </InputContainer>
                        <Button>Submit</Button>
                    </Form>
                </TitleWrapper>
            </Menu>
        </Container>
    );
};

export default AdminItems;
