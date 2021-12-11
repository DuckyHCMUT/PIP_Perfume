import styled from "styled-components";
import BannerCart from "../components/BannerCart";
import Footer from "../components/Footer";

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

const FooterBox = styled.div`
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
                    <MemberImg src = {"resource/AboutUs/Viet_1953097.png"} alt = {"VietImg"} />
                    <MemberName>
                        Tran Quoc Viet <br/>
                        Student ID: 1953097
                    </MemberName>
                    Front-end Developer <br/>
                    Software Tester
                </Member>

                <Member>
                    <MemberImg src = {"resource/AboutUs/Cat_1952587.jpg"} alt = {"CatImg"} />
                    <MemberName>
                        Nguyen Hoang Cat <br/>
                        Student ID: 1952587
                    </MemberName>
                    Back-end Developer <br/>
                    Database Manager
                </Member>

                <Member>
                    <MemberImg src = {"resource/AboutUs/Duyen_1952620.jpg"} alt = {"DuyenImg"} />
                    <MemberName>
                        Dang Vu Hanh Duyen <br/>
                        Student ID: 1952620
                    </MemberName>
                    Front-end Developer <br/>
                    Logic Designer
                </Member>

                <Member>
                    <MemberImg src = {"resource/AboutUs/Thanh_1952983.png"} alt = {"ThanhImg"} />
                    <MemberName>
                        Nguyen Duc Thanh <br/>
                        Student ID: 1952983
                    </MemberName>
                    Front-end Developer <br/>
                    Web Interface Designer
                </Member>

                <Member>
                    <MemberImg src = {"resource/AboutUs/Phong_1952916.png"} alt = {"PhongImg"} />
                    <MemberName>
                        Ly Kim Phong <br/>
                        Student ID: 1952916
                    </MemberName>
                    Front-end Developer <br/>
                    Logic Designer      
                </Member>
            </TeamMember>
            <br/>

            <FooterBox>
                <hr/>
                <Center>
                    <br/>
                    <h1>Special thanks to</h1>
                    <Contributor>
                        <ContributorImg src = {"resource/AboutUs/DrQuanThanhTho.jpg"} alt={"DrThanhTho"}/>
                        <ContributorName>
                            Professor Quan Thanh Tho
                        </ContributorName>
                    </Contributor>
                    <h3>For always guiding and giving us valuable feedback to complete this project.</h3>
                    <br/>
                </Center>
                <hr/>
            </FooterBox>
        <Footer />
        </Container>
    );
};

export default AboutUs;