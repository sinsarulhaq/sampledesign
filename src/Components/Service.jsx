import React, { useState } from 'react'
import styled from 'styled-components';
import How from '../img/how.png'
import MiniCard from './MiniCard';
import Play from '../img/play.png'

function Service() {
    const [open, setOpen] = useState(false)
    return (
        <Container>
            <Left>
                <Image open={open} src={How}/>
                <Video open={open} autoPlay loop controls src="https://www.youtube.com/watch?v=668nUCeBHyY" />
            </Left>
            <Right>
                <Wrapper>
                    <Title>Simple process to start</Title>
                    <Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam fugiat magni cupiditate culpa voluptas dolorem ea ipsum obcaecati asperiores qui quo omnis eos quasi, tempore quisquam! Corporis facere nesciunt dignissimos.</Desc>
                </Wrapper>
                <CaerdContainer>
                <MiniCard/>
                <MiniCard/>
                <MiniCard/>
                </CaerdContainer>
                <Button onClick={() => setOpen(true)}><Icon src={Play}/>How its work</Button>
            </Right>
        </Container>
    )
}

export default Service

const Container = styled.div`
display: flex;
@media only screen and (max-width: 480px){
    flex-direction: column;
}
`

const Right = styled.div`
width: 50%;
@media only screen and (max-width: 480px){
    width: 100%; 
}
`
const Left = styled.div`
position: relative;
width: 50%;
@media only screen and (max-width: 480px){
   display: none;
}
`

const Image = styled.img`
display: ${props=> props.open && "none"};
margin-top: 200px;
`
const Wrapper = styled.div`
padding: 50px;
display: flex;
flex-direction: column;
@media only screen and (max-width: 480px){
    padding: 20px;
    
 }
`

const Title = styled.h1`
margin-top: 10px;
text-align: center;
`

const Desc = styled.p`
font-size: 20px;
color: #555;
`
const CaerdContainer = styled.div`
display: flex;
justify-content: space-around;
margin-top: 20px;
margin-left: 20px;
`

const Button = styled.button`
width: 180px;
border: none;
border-radius: 10px;
background-color: darkblue;
color: #fff;
font-size: 20px;
cursor: pointer;
margin-top: 25px;
padding: 15px;
margin-left: 55px;
display: flex;
align-items: center;
`

const Icon = styled.img`
width: 20px;
margin-right: 10px;
`
const Video = styled.video`
display: ${(props) => !props.open && "none"};
height: 300px;
position: absolute;
top: 0;
bottom: 0;
margin: auto;
`