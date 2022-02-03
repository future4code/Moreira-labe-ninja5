import React from "react";
import styled from 'styled-components';


const MainContainer = styled.div`
  border-radius: 5px;
  background-color: #e6930d;
  color: white;
  display: flex;
  flex-direction: column;
  width: 300px;
  padding: 10px;
  margin: 10px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  h2{
    margin-left: 10px;
  }
  :hover {
    transition-duration: 1s;
    transform: scale(1.1,1.1);
  
  }
  
`
const Titulos = styled.div`
  display: grid;
  grid-template-columns: 150px 150px;
  margin: 10px 0 0 10px;
  font-weight: bold;
  text-decoration: underline;
`

const Valores = styled.div`
  display: grid;
  grid-template-columns: 150px 150px;
  margin-left: 10px;
`

const Botoes = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 10px 0;
`
const Botao = styled.button`
  padding: 5px 0;
  background-color: #06a2cf;
  color: white;
  border: none;
  border-radius: 5px;
  width: 130px;
  :hover{
    cursor: pointer;
    background-color: #184cbd;
    transition-duration: 1s;
    transform: scale(1.1,1.1);
  }
`

export class ProductCard extends React.Component {

  render() {

    let data = new Date(this.props.dueDate)
    let dataFormatada = ((data.getDate() )) + "/" + ((data.getMonth() + 1)) + "/" + data.getFullYear();

    return (
      <MainContainer>
        <h2>{this.props.title}</h2>
        <Titulos>
          <p>Valor</p>
          <p>Prazo</p>
        </Titulos>
        <Valores>
          <p>R$ {this.props.price}</p>
          <p>Até {dataFormatada}</p>
        </Valores>
        <Botoes>
          <Botao onClick={this.props.irParaDetalhes}>DETALHES</Botao>
          {this.props.verificaBotaoCarrinho(this.props.taken, this.props.id)}
        </Botoes>
      </MainContainer>
    )
  }
}