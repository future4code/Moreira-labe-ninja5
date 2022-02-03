import React from "react";
import styled from 'styled-components';
import axios from 'axios';

const MainContainer = styled.div`
  border-radius: 5px;
  background-color: #e6930d;
  color: white;
  display: flex;
  flex-direction: column;
  width: 500px;
  padding: 10px;
  margin: 10px auto;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  font-size: 1.2rem;
  h2{
    text-align: center;
    font-size: 2rem;
  }
`
const Descricao = styled.p`
  border-radius: 5px;
  padding: 20px 10px;
  margin-top: 10px;
  text-align: center;
  background-color: whitesmoke;
  color: #e6930d;
  font-weight: bold;
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
    this.getServicos()
  }


  getServicos = () => {
    const url = "https://labeninjas.herokuapp.com/jobs"

    axios.get(url, {
      headers: {
        Authorization: "f6ea36c4-47c4-4187-a3fb-38bd313f9559"
      }
    })
    .then(resp => {
      this.setState({servicos: resp.data.jobs})
    })
    .catch(err => {
      console.log(err)
    })
  }

  verificaBotaoCarrinho = (taken,id) => {
    if(taken) {
      return <BotaoFechado>ADICIONAR AO CARRINHO</BotaoFechado>
    }
    else {
      return <Botao onClick={() => this.addCarrinho(id)}>ADICIONAR AO CARRINHO</Botao>
    }
  }

  addCarrinho = (id) => {
    const url = `https://labeninjas.herokuapp.com/jobs/${id}`
    const body = {
      "taken":true
    }

    axios.post(url, body, {
      headers: {
        Authorization: "f6ea36c4-47c4-4187-a3fb-38bd313f9559"
      }
    })
    .then(resp => {
      alert("Serviço Adicionado ao Carrinho")
    })
    .catch(err => {
      alert("Erro ao Adicionar ao Carrinho")
    })
  }

  render() {

    const listaPagamentos = this.props.paymentMethods.map(pagamento => {
      return <li>{pagamento}</li>
    })
  
    let data = new Date(this.props.dueDate)
    let dataFormatada = ((data.getDate() )) + "/" + ((data.getMonth() + 1)) + "/" + data.getFullYear();
  
    

    return (
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
          <Botao onClick={this.props.goToCustomerScreen}>VOLTAR AO CATÁLOGO</Botao>
          {this.verificaBotaoCarrinho(this.props.taken,this.props.id)}
        </Botoes>
      </MainContainer>
    )
  }
  


  
}

export default ProductDetails