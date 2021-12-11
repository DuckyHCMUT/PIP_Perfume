import styled from "styled-components";

const Container = styled.div`
    height: 30px;
    background-color: #ffc890;
    color: 'black';
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 500;
`;

const Announcement = () => {
    return <Container>Super Deal! Free Shipping on Orders Over 20.000.000 VND</Container>;
};

export default Announcement;