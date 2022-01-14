import React from 'react'
import styled from 'styled-components';


function PriceCard({price, type}) {
    return (
        <Container>
            <PriceContainer>
                $<Price>{price}</Price>/month
                </PriceContainer>
                <Type>{type} plan</Type>
                <List>
                    <ListItem>200 Hand-crafted Template</ListItem>
                    <ListItem>Exclusive Support</ListItem>
                    <ListItem>50+ PreBuilt Websites</ListItem>
                    <ListItem>Premium Plugins</ListItem>{""}
                </List>
                <Button>Join now</Button>
           
        </Container>
    )
}

export default PriceCard

const Container = styled.div`
padding: 20px;
margin-right: 50px;
-webkit-box-shadow: 15px 13px 12px -3px rgba(0,0,0,0.56);
-moz-box-shadow: 15px 13px 12px -3px rgba(0,0,0,0.56);
background-color: #fff;
border-radius: 10px;
display: flex;
flex-direction: column;
align-items: center;
@media only screen and (max-width: 480px){
    margin-right: 0;
    margin-bottom: 10px;
    padding: 10px;
}
`
const PriceContainer = styled.div`
display: flex;
align-items: center;
`

const Price = styled.span`
font-weight: bold;
font-size: 50px;
@media only screen and (max-width: 480px){
 font-size: 30px;
}
`

const Type = styled.button`
padding: 10px;
margin: 10px 0px;
border: 1.5px solid crimson;
background-color: #fff;
border-radius: 20px;
@media only screen and (max-width: 480px){
 display: none;
}
`

const ListItem = styled.li`
margin 30px 0px;
@media only screen and (max-width: 480px){
    margin: 10px;
    font-size: 12px;
}
`

const Button = styled.button`
border: none;
background-color: darkblue;
color: #fff;
font-size: 16px;
padding: 15px;
border-radius: 10px;
cursor: pointer;
font-weight: bold;
@media only screen and (max-width: 480px){
    padding: 5px;
    font-size: 12px;
    font-weight: 300;
}
`

const List = styled.ul`
list-style: none;

`