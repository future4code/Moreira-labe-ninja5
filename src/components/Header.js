import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
background-color: #EC8C00;
height: 100px;
color: whitesmoke;
h1{
    margin-left: 20px;
}
`
const Slogan = styled.div`
  font-size: 25px;
  color: whitesmoke;
  border: solid 1px;
  border-radius: 10px;
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
const Button = styled.button`
padding: 10px;
width: 130px;
text-align: center;
font-size: 20px;
color: whitesmoke;
background-color: #2B27C4;
border: none;
border-radius: 5px;
:hover{
    transform: scale(1.1, 1.1);
    transition-duration: 1s;  
    cursor: pointer;
}
`

export default class Header extends React.Component {
  render() {
    return <HeaderContainer>
        <h1>LabeNinjas</h1>
        <Slogan>"O talento certo, no momento certo."</Slogan>
        <ButtonContainer>
            <Button onClick={this.props.goToHomeScreen}>Home</Button>
            <Button onClick={this.props.goToShoppingCart}>Carrinho</Button>   
        </ButtonContainer>
        
    </HeaderContainer>;
  }
}
