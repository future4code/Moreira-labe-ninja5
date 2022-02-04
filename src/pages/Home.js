import React from "react";
import styled from "styled-components";
import Button from "@mui/material/Button";
import MainLogo from "../assets/Ninja-logo.png";

const MainSection = styled.section`
  background: #071021;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background-image: linear-gradient(160deg, #09152d, #09152d, #071021, #071021);
`;

const TextAndButtons = styled.div`
  display: flex;
  height: 30vh;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

const ButtonsContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
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
              Sou um ninja 🥷
            </Button>
            <Button variant="contained" onClick={this.props.goToCustomerScreen}>
              Preciso de um ninja 🙋‍♀️
            </Button>
          </ButtonsContainer>
        </TextAndButtons>
      </MainSection>
    );
  }
}
