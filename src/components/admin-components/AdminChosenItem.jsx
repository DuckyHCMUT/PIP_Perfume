import styled from "styled-components";
import React, { useEffect, useState, useRef } from "react";
import { Title } from "../../pages/AdminHome";
import axios from "axios";
import swal from "sweetalert";

const TitleWrapper = styled.div`
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

const AdminChosenItem = ({ value }) => {
    const [Name, setName] = useState(value.Name);
    const [Brand, setBrand] = useState(value.Brand);
    const [Gender, setGender] = useState(value.Gender);
    const [Image, setImage] = useState(value.Image);
    const [Option, setOption] = useState(value.Option);
    const [Volume1, setVolume1] = useState();
    const [Volume2, setVolume2] = useState();
    const [Volume3, setVolume3] = useState();
    const [Price1, setPrice1] = useState();
    const [Price2, setPrice2] = useState();
    const [Price3, setPrice3] = useState();
    const [Price_range, setPrice_range] = useState();

    var item;
    var options;
    const firstUpdate = useRef(true);
    useEffect(() => {
        item = {
            Gender,
            ID: 50,
            Brand,
            Name,
            Image,
            Price_range,
            Option,
        };
        if (firstUpdate.current) {
            firstUpdate.current = false;
            return;
        }
        console.log(item);
        axios
            .put(`/api/items/${value._id}`, item)
            .then(() => swal("Success", "Item updated", "success"))
            .catch((err) => console.log(err));
    }, [Option]);
    const handleSubmit = (e) => {
        e.preventDefault();
        class option {
            constructor(OptionID, Volume, Price) {
                this.OptionID = OptionID;
                this.Volume = Volume;
                this.Price = Price;
            }
        }
        try {
            //console.log(Volume1, Price1, Volume2, Price2, Volume3, Price3);
            const option1 = new option("1000001", Volume1, Price1);

            const ID = 50;

            if (value.Option.length === 1) {
                options = [option1];
                setPrice_range(Price1);
            } else if (value.Option.length === 2) {
                const option2 = new option("1000002", Volume2, Price2);
                options = [option1, option2];
                setPrice_range(`${Price1} - ${Price2}`);
            } else {
                const option2 = new option("1000002", Volume2, Price2);
                const option3 = new option("1000003", Volume3, Price3);
                options = [option1, option2, option3];
                setPrice_range((Price_range = `${Price1} - ${Price3}`));
            }

            setOption(options);
            /*const item = {
                Gender,
                ID,
                Brand,
                Name,
                Image,
                Price_range,
                Option,
            };*/
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <TitleWrapper>
            <Form onSubmit={handleSubmit}>
                <InputContainer>
                    <Label>Product Name*</Label>
                    <Input
                        type="text"
                        defaultValue={value.Name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </InputContainer>
                <InputContainer>
                    <Label>Product Brand*</Label>
                    <Input
                        type="text"
                        defaultValue={value.Brand}
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
                        defaultValue={value.Image}
                        onChange={(e) => setImage(e.target.value)}
                    />
                </InputContainer>
                <InputContainer style={{ display: "flex" }}>
                    {value.Option.map((option, index) => {
                        return (
                            <Wrapper key={index}>
                                <Title style={{ fontSize: 18 }}>
                                    Option {(index + 1).toString()}
                                </Title>
                                <Label>Volume</Label>
                                <Input
                                    type="text"
                                    defaultValue={option.Volume}
                                    onChange={(e) => {
                                        if (index === 0)
                                            setVolume1(e.target.value);
                                        if (index === 1)
                                            setVolume2(e.target.value);
                                        if (index === 2)
                                            setVolume3(e.target.value);
                                    }}
                                    required
                                />
                                <Label>Price</Label>
                                <Input
                                    type="text1"
                                    defaultValue={option.Price}
                                    onChange={(e) => {
                                        if (index === 0)
                                            setPrice1(e.target.value);
                                        if (index === 1)
                                            setPrice2(e.target.value);
                                        if (index === 2)
                                            setPrice3(e.target.value);
                                    }}
                                    required
                                />
                            </Wrapper>
                        );
                    })}
                </InputContainer>
                <Button>Update</Button>
            </Form>
        </TitleWrapper>
    );
};

export default AdminChosenItem;
