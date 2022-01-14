import React from 'react'
import styled from "styled-components";
import inhand from '../img/inhand.png';
function Feature() {
    return (
        <Container>
            <Left><Image src={inhand} /></Left>
            <Right>
                <Title>
                <b>good</b> design <br/>
                   <b>good</b> bussiness
                </Title>
                <SubTitle>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis debitis et laudantium recusandae odio maxime vel molestiae praesentium dolorem dolore provident eum aspernatur delectus fugiat ea dignissimos, dolores numquam nemo?</SubTitle>
                <Desc>adipisicing elit. Omnis debitis et laudantium recusandae odio maxime vel molestiae praesentium dolorem dolore provident</Desc>
                <Button>Learn More</Button>
            </Right>
        </Container>
    )
}

export default Feature

const Container = styled.div`
display: flex;
@media only screen and (max-width: 480px){
    flex-direction: column;padding: 30px 20px;
}
`

const Left = styled.div`
width: 50%;
@media only screen and (max-width: 480px){
    display: none;
}
`

const Right = styled.div`
width: 50%;
display: flex;
flex-direction: column;
justify-content: center;
@media only screen and (max-width: 480px){
    width: 100%;
}
`

const Image = styled.img`
width: 80%;
`

const Title = styled.span`
font-size: 70px;
@media only screen and (max-width: 480px){
   font-size: 47px
}
`
const SubTitle = styled.span`
font-size: 24px;
font-style: italic;
margin-top: 30px;
`
const Desc = styled.p`
font-size: 20px;
color: #777;
margin-top: 30px;
`
const Button = styled.button`
width: 150px;
border: none;
padding: 15px 20px;
background-color: darkblue;
color: white;
font-size: 20px;
border-radius: 20px;
`