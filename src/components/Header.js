import React from "react";
import styled from "styled-components";
import Button from "@mui/material/Button";
import MainLogo from "../assets/Ninja-logo.png";

const HeaderContainer = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
background-color: #071021;
height: 100px;
color: whitesmoke;
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
border-radius: 0 0 5px 5px;

h1{
    margin-left: 20px;
}
`
const Slogan = styled.div`
  font-size: 25px;
  color: whitesmoke;
  padding: 5px;
  :hover{
  transform: scale(1.1, 1.1);
  transition-duration: 1s;
}
`
const ButtonContainer = styled.div`
display: flex;
justify-content: space-between;
width: 20%;
margin-right: 80px;
`
const Img = styled.img`
  width: 50px;
`
const Logo = styled.div`
  display:flex;
  margin-left: 20px;
`

export default class Header extends React.Component {
  render() {
    return <HeaderContainer>
        <Logo>
          <Img src={MainLogo}></Img>
          <h1>LabeNinjas</h1>
        </Logo>
        <Slogan>"O talento certo, no momento certo."</Slogan>
        <ButtonContainer>
          <Button variant="contained" 
            sx={{
              width: 120,
            }}
            onClick={this.props.goToHomeScreen}>
          <span class="material-icons">home</span>
             Home</Button>
          <Button variant="contained" 
          sx={{
            width: 120,
          }}
          onClick={this.props.goToShoppingCart}>
          <span class="material-icons">shopping_cart </span>
            Carrinho</Button>
            {/* <Button onClick={this.props.goToHomeScreen}>Home</Button>
            <Button onClick={this.props.goToShoppingCart}>Carrinho</Button>    */}
        </ButtonContainer>
        
    </HeaderContainer>;
  }
}
