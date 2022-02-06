import React from "react";
import styled from 'styled-components';
import Header from "../components/Header";
import Footer from '../components/Footer'
import { getServicos } from "../services/requests";
import { addCarrinho } from "../services/requests";


const Container = styled.div`

`

const MainContainer = styled.div`
  border-radius: 5px;
  background-color: #EC8C00;
  color: white;
  display: flex;
  flex-direction: column;
  width: 500px;
  padding: 10px;
  margin: 60px auto;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  font-size: 1.2rem;
  opacity:0.8;
  h2{
    text-align: center;
    font-size: 2rem;
  }
`
const Descricao = styled.p`
  border-radius: 5px;
  padding: 20px 10px;
  margin-top: 10px;
  text-align: justify;
  background-color: whitesmoke;
  color: #e6930d;
`

const Pagamento = styled.div`
  display: flex;
  align-items: center;
  justify-content: left;
  margin: 10px auto;
  
  div {
    margin-left: 20px;
  }
`

const Valores = styled.p`
  font-size: 1.5rem;
  text-align: center;
  margin: 10px 0;

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
  width: 150px;
  :hover{
    cursor: pointer;
    background-color: #184cbd;
    transition-duration: 1s;
    transform: scale(1.1,1.1);
  }
`
const BotaoFechado = styled.button`
  padding: 5px 0;
  background-color: lightgray;
  color: white;
  border: none;
  border-radius: 5px;
  width: 150px;
`
class ProductDetails extends React.Component {

  componentDidUpdate = () => {
    getServicos(this.salvaDados)
  }

  salvaDados = (data) => {
    this.setState({servicos: data})
  }

  verificaBotaoCarrinho = (taken,id) => {
    if(taken) {
      return <BotaoFechado><span class="material-icons">shopping_cart </span></BotaoFechado>
    }
    else {
      return <Botao onClick={() => addCarrinho(id,this.salvaDados)}><span class="material-icons">shopping_cart </span></Botao>
    }
  }

  render() {

    const listaPagamentos = this.props.paymentMethods.map(pagamento => {
      return <li>{pagamento}</li>
    })
  
    let data = new Date(this.props.dueDate)
    let dataFormatada = ((data.getDate() + 1 )) + "/" + ((data.getMonth() + 1)) + "/" + data.getFullYear();
  
    

    return (
      <Container>
      <Header 
        goToHomeScreen={this.props.goToHomeScreen} 
        goToShoppingCart={this.props.goToShoppingCart}
        goToCustomerScreen={this.props.goToCustomerScreen}
      />
      <MainContainer>
        <h2>{this.props.title}</h2>
        <Descricao>{this.props.description}</Descricao>
        <Pagamento>
          <p>Pagamento:</p>
          <div>
            {listaPagamentos} 
          </div>
        </Pagamento>
        <Valores>Até <strong>{dataFormatada}</strong> por <strong>R$ {this.props.price}</strong></Valores>
        <Botoes>
          <Botao onClick={this.props.goToCustomerScreen}><span class="material-icons">
keyboard_return
</span></Botao>
          {this.verificaBotaoCarrinho(this.props.taken,this.props.id)}
        </Botoes>
      </MainContainer>
      <Footer />
      </Container>
      
    )
  } 
}

export default ProductDetails