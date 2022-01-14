import React from 'react'
import styled from 'styled-components';

function Navbar() {
    return (
        <Container>
            <Wrap>
            <Left>
                <Logo>Agency</Logo>
                <Menu>
                    <MenuItem>Home</MenuItem>
                    <MenuItem>Features</MenuItem>
                    <MenuItem>Services</MenuItem>
                    <MenuItem>Prices</MenuItem>
                    <MenuItem>Contact</MenuItem>
                </Menu>
            </Left>
               <Button>JOIN TODAY</Button>
            </Wrap>
        </Container>
    )
}

export default Navbar

const Container = styled.nav`

`
const Wrap = styled.nav`
padding: 5px 20px;
display: flex;
justify-content: space-between;
align-items: center;
`
const Left = styled.div`
width: 60%;
display: flex;
align-items: center;
justify-content: space-between;
`
// const Right = styled.div`

// `
const Logo = styled.h1`
font-weight: bold;
text-decoration: underline crimson;
font-size: 25px;
`

const Menu = styled.ul`
display: flex;
list-style: none;

@media only screen and (max-width: 480px){
    display: none;
}
`

const MenuItem = styled.li`
margin-right: 30px;
font-size: 20px;
font-weight: bold;
color: gray;
`

const Button = styled.button`
border: 2px solid white;
padding: 10px 15px;
background-color: crimson;
color: #fff;
font-weight: bold;
border-radius: 10px;
cursor: pointer;
`