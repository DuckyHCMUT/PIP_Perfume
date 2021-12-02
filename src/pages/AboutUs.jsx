import styled from "styled-components";
import BannerCart from "../components/BannerCart";

const Container = styled.div``;

const Center = styled.div`
    flex: 1;
    text-align: center;
`;

const Introduction = styled.div`
    text-align: center;
    width: 100%;
    background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
        url('https://wallpapercave.com/wp/wp7039156.jpg')
            center;
    background-size: cover;
    background-repeat: no-repeat;
    height: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: white;
`

const Footer = styled.div`
    transform: translateY(-120px);
    width: 100%;
`

const TeamMember = styled.div`
    width: 100%;
    height: 300px;
    transform: translateY(-120px);
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;
    position: relative;
`

const Member = styled.div`
    width: 15%;
    height: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    flex-direction: column;
    gap: 10px;
`

const MemberImg = styled.img`
    width: 180px;
    height: 180px;
    border-radius: 50%;
`

const MemberName = styled.text`
    font-weight: bold;
    letter-spacing: 1px;
`

const Contributor = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 25px;
    margin: 30px;
`

const ContributorImg = styled.img`
    width: 150px;
    height: 150px;
    border-radius: 50%;
`

const ContributorName = styled.text`
    font-weight: bold;
    letter-spacing: 0.2px;
    text-align: left;
    font-size: 20px;
`

const AboutUs = () => {
    return (
        <Container>
            <BannerCart />
            <Introduction>
                <h1>Who are we? Meet our team!</h1>
                We listen, we disscuss and we develop. We love to learn and use the lastest technologies.
            </Introduction>

            <TeamMember>
                <Member>
                    <MemberImg src = {"resource/AboutUs/Viet1.png"}/>
                    <MemberName>
                        Tran Quoc Viet
                    </MemberName>
                    Full-stack Developer
                </Member>

                <Member>
                    <MemberImg src = {"resource/AboutUs/Viet2.png"}/>
                    <MemberName>
                        Nguyen Hoang Cat
                    </MemberName>
                    Back-end Developer
                </Member>

                <Member>
                    <MemberImg src = {"resource/AboutUs/Viet3.png"}/>
                    <MemberName>
                        Dang Vu Hanh Duyen
                    </MemberName>
                    Front-end Developer
                </Member>

                <Member>
                    <MemberImg src = {"resource/AboutUs/Viet4.png"}/>
                    <MemberName>
                        Nguyen Duc Thanh
                    </MemberName>
                    Full-stack Developer
                </Member>

                <Member>
                    <MemberImg src = {"resource/AboutUs/Viet5.png"}/>
                    <MemberName>
                        Ly Kim Phong
                    </MemberName>
                    Front-end Developer              
                    {" "}
                </Member>

            </TeamMember>

            <Footer>
                <hr/>
                <Center>
                    <h1>Special thanks to</h1>
                    <Contributor>
                        <ContributorImg src = {"resource/AboutUs/DrQuanThanhTho.jpg"} alt={"DrThanhTho"}/>
                        <ContributorName>
                            Professor Quan Thanh Tho
                        </ContributorName>
                    </Contributor>
                    <h3>For always guiding and assisting us in completing this project.</h3>
                </Center>
            </Footer>
            

        </Container>
    );
};

export default AboutUs;