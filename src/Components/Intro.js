import React from "react";
import styled from "styled-components";
import Women from '../img/women.png';

function Intro() {
  return (
    <Container>
      <Left>
        <Title>Adventures in Creative Age</Title>
        <Description>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi harum
          facilis iste dolores voluptates odio dolore sequi facere quasi sint.
        </Description>
        <Info>
            <Button>START A PROJECT</Button>
            <Contact>
                <Phone>Call Us (+91) 9745 56 6555</Phone>
                <Contacttext>For any question or concern</Contacttext>
            </Contact>
        </Info>
      </Left>
      <Right>
          <ImageCon>
          <Image src={Women}/>
          </ImageCon>
      </Right>
    </Container>
  );
}

export default Intro;

const Container = styled.div`
  height: calc(100vh - 50px);
  display: flex;
  padding: 20px;
  
  @media only screen and (max-width: 480px){
    flex-direction: column;
}
`;
const Left = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 480px){
    width: 100%;
    height: 100%;
}
`;
const Title = styled.h1`
  font-size: 60px;
  width: 60%;
  @media only screen and (max-width: 480px){
    width: 100%;
    font-size: 50px;
    margin-top: 0;
}
`;
const Description = styled.p`
  width: 60%;
  font-size: 20px;
  margin-top: 20px;
  @media only screen and (max-width: 480px){
    width: 100%
}
`;
const Info = styled.div`
width: 60%;
display: flex;
justify-content: space-between;
align-items: center;
@media only screen and (max-width: 480px){
  width: 100%;
  flex-direction: column;
}
`
const Button = styled.button`
padding: 15px;
background-color: darkblue;
color: #fff;
border-radius: 10px;
font-weight: bold;
border: none;
letter-spacing: 2px;
cursor: pointer;
@media only screen and (max-width: 480px){
margin-bottom: 20px
}

`
const Contact = styled.div`
display: flex;
flex-direction: column;
`
const Phone = styled.span`
color: #f0667d;
font-weight: bold;
margin-top: 5px
`
const Contacttext = styled.span`
color: gray;
margin-top: 5px
`
const Right = styled.div`
  width: 40%;
  @media only screen and (max-width: 480px){
    display: none;
}
`;
const ImageCon = styled.div`
position: relative;
margin-top: 217px;
`

const Image = styled.img`
width: 100%;
position: absolute;
`
