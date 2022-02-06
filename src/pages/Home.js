import React from "react";
import styled from "styled-components";
import Button from "@mui/material/Button";
import MainLogo from "../assets/Ninja-logo.png";
import Emoji from "../components/Emoji";

const MainSection = styled.section`
  background: #071021;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background-image: linear-gradient(160deg, #09152d, #09152d, #071021, #071021);

  @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
  /* celulares */
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  }
`;

const TextAndButtons = styled.div`
  display: flex;
  height: 40vh;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

const ButtonsContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;

  @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
  /* celulares */
  flex-direction: column;
  width: 80%;
  justify-content: space-between;
  align-items: center;
  height: 15vh;
  }
`;

const MainTextH1 = styled.h1`
  color: white;
`;

const MainTextP = styled.p`
  color: white;
`;

export class Home extends React.Component {
  render() {
    return (
      <MainSection>
        <img src={MainLogo}></img>
        <TextAndButtons>
          <MainTextH1>Ninjas estão por toda parte.</MainTextH1>
          <MainTextP>
            Se você é um deles, bem-vindo. Se precisa de um deles, bem-vindo
            também.
          </MainTextP>
          <ButtonsContainer>
            <Button
              variant="contained"
              onClick={this.props.goToFreelancerScreen}
              sx={{
                width: 300,
                background: "#EC8C00",
                color: "black",
              }}
            >
              Sou um ninja <Emoji symbol="🥷" label="ninja"/>
            </Button>
            <Button variant="contained" onClick={this.props.goToCustomerScreen}>
              Preciso de um ninja <Emoji symbol="🙋‍♀️" label="woman"/>
              
            </Button>
          </ButtonsContainer>
        </TextAndButtons>
      </MainSection>
    );
  }
}
