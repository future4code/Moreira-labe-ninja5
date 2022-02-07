import React from "react";
import styled from "styled-components";
import Button from "@mui/material/Button";
import MainLogo from "../assets/Ninja-logo.png";
import ImagemPagamento from "../assets/pagamentos.png";
import ImagemInstagram from '../assets/instagram.png'
import ImagemFacebook from '../assets/facebook.png'
import ImagemWhatsapp from '../assets/whatsapp.png'

const HeaderContainer = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
background-color: #071021;
height: 100px;
color: whitesmoke;
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
border-radius: 5px 5px 0 0;
position: relative;
bottom: 0;

@media screen and (min-device-width : 320px) and (max-device-width : 480px) {
  /* celulares */
  padding: 10px;
  flex-direction: column;
  justify-content: flex-start;
  height: 250px;
  text-align:center;
  width: 100%;
  position: relative;
  bottom: 0;
  }

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
width: 30%;
margin-right: 80px;
`
const Img = styled.img`
  width: 50px;
`
const Logo = styled.div`
  display:flex;
  margin-left: 20px;
`
const ImgPag = styled.img`
  height: 60px;
`
const Pgt = styled.div`
  display:flex;
  flex-direction: column;

  margin-right: 20px;
`
const ImagensRedes = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50%;
  margin: 0 auto;
`
const ImgRedes = styled.img`
  margin: 15px 0 15px 0;
  width: 30px;  
`
const Texto = styled.p`
  font-size: 25px;
  color: whitesmoke;
  padding: 5px;
  font-weight: bold;
`



export default class Footer extends React.Component {
  render() {
    return <HeaderContainer>
        <Logo>
          <Img src={MainLogo}></Img>
          <h1>LabeNinjas</h1>
        </Logo>
        <Pgt>
          <Texto>Nos visite em nossas redes</Texto>
          <ImagensRedes>
            <ImgRedes src={ImagemInstagram} />
            <ImgRedes src={ImagemFacebook} /> 
            <ImgRedes src={ImagemWhatsapp} />
          </ImagensRedes>
        </Pgt>
        <Pgt>
          <Texto>Formas de Pagamento</Texto>
          <ImgPag src={ImagemPagamento}></ImgPag>
        </Pgt>
    </HeaderContainer>;
  }
}
