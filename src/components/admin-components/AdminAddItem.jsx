import styled from "styled-components";
import React, { useState } from "react";
import { Title } from "../../pages/AdminHome";
import axios from "axios";
import swal from "sweetalert";

const TitleWrapper = styled.div`
    margin-top: 10px;
    text-align: center;
`;
export const InputContainer = styled.div`
    margin-right: 30px;
    min-width: 40%;
    width: 100%;
`;
export const Form = styled.form`
    display: flex;
    flex-direction: column;
    margin-top: 50px;
`;
export const Label = styled.h6`
    font-size: 16px;
    font-weight: 500;
    pointer-events: none;
    margin-top: 10px;
    display: block;
    font-weight: 600;
`;

export const Input = styled.input`
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
export const Menu = styled.div`
    background-color: white;
    padding: 10px;
    min-height: 700px;
    width: 600px;
    margin: auto;
    margin-top: 30px;
    border-radius: 5px;
`;
export const Wrapper = styled.div`
    flex: 1;
    align-items: center;
    justify-content: center;
`;
export const FlexWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;
export const Button = styled.button`
    margin: auto;
    margin-top: 20px;
    width: 100px;
    font-size: 15px;
`;
export const ImageFrame = styled.img`
    height: 150px;
    width: 80px;
    margin-left: auto;
    margin-right: auto;
`;

const AdminAddItem = () => {
    const [Name, setName] = useState();
    const [Brand, setBrand] = useState();
    const [Gender, setGender] = useState("Unisex");
    const [Image, setImage] = useState("");
    const [Option, setOption] = useState([]);
    const [Volume1, setVolume1] = useState(["0"]);
    const [Volume2, setVolume2] = useState("0");
    const [Volume3, setVolume3] = useState("0");
    const [Price1, setPrice1] = useState(["0"]);
    const [Price2, setPrice2] = useState("0");
    const [Price3, setPrice3] = useState("0");

    const handleSubmit = async (e) => {
        const id1 = "1000001";
        const id2 = "1000002";
        const id3 = "1000003";
        class option {
            constructor(OptionID, Volume, Price) {
                this.OptionID = OptionID;
                this.Volume = Volume;
                this.Price = Price;
            }
        }
        e.preventDefault();
        //var testOption1, testOption2, testOption3, OptionID, Volume, Price;
        const option1 = new option(id1, Volume1, Price1);
        /*OptionID = id1;
        Volume = Volume1;
        Price = Price1;
        testOption1 = { OptionID, Volume, Price };*/
        const ID = 50;
        var options, Price_range;
        if (Volume2 === "0") {
            options = [option1];
            Price_range = Price1.toString() + "VND";
            setOption(options);
        } else if (Volume3 === "0") {
            /*OptionID = id2;
            Volume = Volume2;
            Price = Price2;
            testOption2 = { OptionID, Volume, Price };*/
            const option2 = new option(id2, Volume2, Price2);
            options = [option1, option2];
            Price_range = `${Price1.toString()}VND - ${Price2.toString()}VND`;
            setOption(options);
        } else {
            /*OptionID = id2;
            Volume = Volume2;
            Price = Price2;
            testOption2 = { OptionID, Volume, Price };
            OptionID = id3;
            Volume = Volume3;
            Price = Price3;
            testOption3 = { OptionID, Volume, Price };*/
            const option2 = new option(id2, Volume2, Price2);
            const option3 = new option(id3, Volume3, Price3);
            options = [option1, option2, option3];
            Price_range = `${Price1.toString()}VND - ${Price3.toString()}VND`;
            setOption(options);
        }

        const item = {
            Gender,
            ID,
            Brand,
            Name,
            Image,
            Price_range,
            Option,
        };
        console.log(item);
        axios
            .post("/api/items", item)
            .then(() => swal("Success", "Item added", "success"))
            .catch((err) => console.log(err));
    };

    return (
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
                                    onChange={(e) => setGender(e.target.value)}
                                />
                                <Label for="male">Male</Label>
                            </Wrapper>
                            <Wrapper>
                                <Input
                                    type="radio"
                                    value="Female"
                                    id="female"
                                    name="gender"
                                    onChange={(e) => setGender(e.target.value)}
                                />
                                <Label for="female">Female</Label>
                            </Wrapper>
                            <Wrapper>
                                <Input
                                    type="radio"
                                    value="Unisex"
                                    id="unisex"
                                    name="gender"
                                    onChange={(e) => setGender(e.target.value)}
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
                            <Title style={{ fontSize: 18 }}>Option 1*</Title>
                            <Label>Volume</Label>
                            <Input
                                type="text"
                                placeholder="Volume in ml"
                                onChange={(e) =>
                                    setVolume1(
                                        "Eau de Parfum " + e.target.value + "ml"
                                    )
                                }
                                required
                            />
                            <Label>Price</Label>
                            <Input
                                type="text1"
                                placeholder="Price in VND"
                                onChange={(e) =>
                                    setPrice1(e.target.value + "VND")
                                }
                                required
                            />
                        </Wrapper>
                        <Wrapper>
                            <Title style={{ fontSize: 18 }}>Option 2</Title>
                            <Label>Volume</Label>
                            <Input
                                type="text"
                                placeholder="Volume in ml"
                                onChange={(e) =>
                                    setVolume2(
                                        "Eau de Parfum " + e.target.value + "ml"
                                    )
                                }
                            />
                            <Label>Price</Label>
                            <Input
                                type="text"
                                placeholder="Price in VND"
                                onChange={(e) =>
                                    setPrice2(e.target.value + "VND")
                                }
                            />
                        </Wrapper>
                        <Wrapper>
                            <Title style={{ fontSize: 18 }}>Option 3</Title>
                            <Label>Volume</Label>
                            <Input
                                type="text"
                                placeholder="Volume in ml"
                                onChange={(e) =>
                                    setVolume3(
                                        "Eau de Parfum " + e.target.value + "ml"
                                    )
                                }
                            />
                            <Label>Price</Label>
                            <Input
                                type="text"
                                placeholder="Price in VND"
                                onChange={(e) =>
                                    setPrice3(e.target.value + "VND")
                                }
                            />
                        </Wrapper>
                    </InputContainer>
                    <Button>Submit</Button>
                </Form>
            </TitleWrapper>
        </Menu>
    );
};

export default AdminAddItem;
