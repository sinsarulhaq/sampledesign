import React from 'react'
import styled from 'styled-components';
import search from '../img/search.png'

function miniCard() {
    return (
        <div>
            <Container>
                <Image src={search}/>
                <Text>
                    Lorem ipsum dolor sit amet consecteture.
                </Text>
            </Container>
        </div>
    )
}

export default miniCard

const Container = styled.div`
width: 150px;
padding: 20px;
display: flex;
align-items: center;
flex-direction: column;
box-shadow: 15px 13px 12px -3px rgba(0,0,0,0.56);
-webkit-box-shadow: 15px 13px 12px -3px rgba(0,0,0,0.56);
-moz-box-shadow: 15px 13px 12px -3px rgba(0,0,0,0.56);
@media only screen and (max-width: 480px){
    width: 50px;
 }
`

const Image = styled.img`
width: 20px;
`

const Text = styled.span`
margin-top: 10px;
text-align: center;

@media only screen and (max-width: 480px){
    font-size: 14px;
    
 }
`
