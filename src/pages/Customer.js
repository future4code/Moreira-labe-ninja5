import React from "react";
import { ProductCard } from '../components/ProductCard'
import styled from "styled-components";
import axios from 'axios'

const MainContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 10px;

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

const BotaoFechado = styled.button`
  padding: 5px 0;
  background-color: lightgray;
  color: white;
  border: none;
  border-radius: 5px;
  width: 130px;
`



class CustomerScreen extends React.Component {

  state = {
    servicos: [],
    carrinho: []
  }

  componentDidMount = () => {
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
      console.log(resp.data.jobs)
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
      this.getServicos()
    })
    .catch(err => {
      alert("Erro ao Adicionar ao Carrinho")
    })
  }


  render() {
    
    const listaServicos = this.state.servicos.map(servico => {
      return <ProductCard key={servico.id}
              id = {servico.id} 
              title = {servico.title}
              description = {servico.description}
              price = {servico.price}
              paymentMethods = {servico.paymentMethods}
              dueDate = {servico.dueDate}
              taken = {servico.taken}
              verificaBotaoCarrinho = {this.verificaBotaoCarrinho}
              irParaDetalhes = {() => this.props.irParaDetalhes(
                servico.id, servico.title, servico.description, servico.price, servico.paymentMethods,
                servico.dueDate, servico.taken)}
              irParaCarrinho = {() => this.props.irParaCarrinho(
                servico.id, servico.title, servico.description, servico.price, servico.paymentMethods,
                servico.dueDate, servico.taken)}
                addCarrinho = {this.addCarrinho}
            />
    })

    return (
      <MainContainer>
        {listaServicos}
      </MainContainer>
    )
  }
}

export default CustomerScreen;
