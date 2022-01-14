import React from 'react'
import styled from "styled-components";
import Map from '../img/map.png'
import phone from '../img/phone.png'
import send from '../img/send.png'

function Contact() {
    return (
        <Container>
            <Wrapper>
                <FormContainer>
                    <Title> Questions ? <br/> Get in Touch</Title>
                    <Form>
                    <Left>
                        <Input placeholder='Your name' />
                        <Input placeholder='Your email' />
                        <Input placeholder='Your subject' />
                    </Left>
                    <Right>
                        <TextArea placeholder='Your message'/>
                        <Button>Send</Button>
                    </Right>
                    </Form>
                </FormContainer>
                <AddressContainer>
                    <AddresItem>
                        <Icon src={Map} />
                        <Text>123 Park Avenue st., New York, USA</Text>
                    </AddresItem>
                    <AddresItem>
                        <Icon src={phone} />
                        <Text>+1 9684 343 4333</Text>
                        <Text>+1 9684 343 4567</Text>
                    </AddresItem>
                    <AddresItem>
                        <Icon src={send} />
                        <Text>contactsinsar@gmail.com</Text>
                        <Text>sinsarulhaq@gmail.com</Text>
                    </AddresItem>
                </AddressContainer>
            </Wrapper>
        </Container>
    )
}

export default Contact

const Container =styled.div`
height: 90%;
`

const Wrapper =styled.div`
height: 100%;
padding: 20px;
display: flex;
justify-content: center;
align-items: center;
@media only screen and (max-width: 480px){
    flex-direction: column;
}
`

const AddressContainer =styled.div`
width: 50%;
display: flex;
flex-direction: column;
align-items: center;
@media only screen and (max-width: 480px){
    width: 100%;
}
`

const FormContainer =styled.div`
width: 50%;
@media only screen and (max-width: 480px){
    margin: 100%;
}
`
const Form = styled.form`
height: 250px;
display: flex;
align-items: center;
justify-content: center;
@media only screen and (max-width: 480px){
    flex-direction: column;
}
`
const Left = styled.div`
height: 100%;
display: flex;
flex-direction: column;
justify-content:  space-between;
margin-right: 20px;
@media only screen and (max-width: 480px){
    height: 50%;
    margin-right: 0;
}
`
const Right = styled.div`
height: 100%;
display: flex;
flex-direction: column;
justify-content:  space-between;
@media only screen and (max-width: 480px){
    

}
`
const Input = styled.input`
width: 200px;
padding: 20px;
@media only screen and (max-width: 480px){
    padding: 10px;
    margin: 5px;
}
`
const TextArea = styled.textarea`
height: 60%;
width: 200px;
padding: 20px;
@media only screen and (max-width: 480px){
    padding: 10px;
    margin-top: 25px;
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
@media only screen and (max-width: 480px){
    padding: 5px;
    margin-top: 5px;
    font-size: 14px;
    width: 100%
}
`

const Title = styled.h1`
margin: 50px;
margin-top: 0px;
margin-left: 110px;
@media only screen and (max-width: 480px){
    margin: 20px;
    font-size: 20px;
    margin-bottom: 25px;
}
`

const AddresItem = styled.div`
display: flex;
align-items: center;
margin-bottom: 30px;

@media only screen and (max-width: 480px){
    margin-bottom: 15px;

   
`

const Icon = styled.img`
width: 20px;
margin-right: 20px;
@media only screen and (max-width: 480px){
   width: 15px;
}
`

const Text = styled.span`
font-size: 20px;
margin-right: 15px;
@media only screen and (max-width: 480px){
    font-size: 14px;
    
}
`