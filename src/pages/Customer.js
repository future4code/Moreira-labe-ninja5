import React from "react";
import { ProductCard } from '../components/ProductCard'
import styled from "styled-components";
import Header from "../components/Header";
import Footer from '../components/Footer'
import { getServicos } from "../services/requests";
import { addCarrinho } from "../services/requests";

const Pagina = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  margin-top: 30px;
`

const InputsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  margin: 0 auto;
  @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
  /* celulares */
  flex-wrap: wrap;
  }
`
const InputContainer = styled.div`
  display: flex;
  flex-direction:column;
  width: 200px;
  @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
  /* celulares */
  margin: 10px;
  width: 100px;
  }
  input{
    border: 1px solid #e6930d;
    border-radius: 5px;
    padding: 10px;
    background-color:transparent;
    color: #e6930d;
  }
  select {
    border: 1px solid #e6930d;
    border-radius: 5px;
    padding: 10px;
    background-color:transparent;
    color: gray;
    @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
    /* celulares */
    width: 150px;
  }
  }
  label{
    color: #e6930d;
    position:absolute;
    top: 130px;
    background-color: white;
    padding: 0 10px;
    text-align:center;
    font-size: 0.8rem;
    margin-left: 5px;
    @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
      /* celulares */
      top: 240px;
      margin-left: 1px;
      padding: 0 5px;
    }
  }
`
 const LabelOrden = styled.p`
    color: #e6930d;
    position:absolute;
    top: 130px;
    background-color: white;
    padding: 0 10px;
    text-align:center;
    font-size: 0.8rem;
    margin-left: 5px;
    @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
      /* celulares */
      top: 295px;
    }
 `

const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 85%;
  margin: 10px auto;
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
const Loading = styled.div`
  display: flex;
  width: 10%;
  justify-content: space-evenly;
  margin: 20px auto;
  font-size: 30px;
  font-weight: bold;
`
const Texto = styled.p`
  font-size: 20px;
  @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
  /* celulares */
  font-size: 16px;
  }
`

class CustomerScreen extends React.Component {

  state = {
    servicos: [],
    valorMin: "",
    valorMax: "",
    buscador: "",
    ordenacao: "titulo crescente"
  }

  componentDidMount = () => {
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

  atualizaValorMin = (event) => {
    this.setState({valorMin: event.target.value})
  }

  atualizaValorMax = (event) => {
    this.setState({valorMax: event.target.value})
  }

  atualizaValorBuscador = (event) => {
    this.setState({buscador: event.target.value})
  }

  atualizaValorOrdenacao = (event) => {
    this.setState({ordenacao: event.target.value})
  }

  limparFiltros = () => {
    this.setState({valorMin: "", valorMax: "", buscador: ""})
  }

  render() {
    
    let carregando = false

    const listaServicos = this.state.servicos
    .filter(servico => {
      return servico.price >= this.state.valorMin
    })
    .filter(servico => {
      return servico.price <= this.state.valorMax || this.state.valorMax === ""
    })
    .filter(servico => {
      return servico.title.toLowerCase().includes(this.state.buscador.toLowerCase())
    })
    .sort((a, b) => {
      switch (this.state.ordenacao) {
        case "crescente":
          return a.price - b.price
        case "decrescente":
          return b.price - a.price
        case "prazo crescente":
          return new Date(a.dueDate) - new Date(b.dueDate)
        case "prazo decrescente":
          return new Date(b.dueDate) - new Date(a.dueDate)
        case "titulo crescente":
          if(a.title > b.title) {
            return 1;
          } else {
            return -1;
          }
        case "titulo decrescente":
          if(b.title > a.title) {
            return 1;
          } else {
            return -1;
          }
        default:
          return a.price - b.price
      }
    })
    .map(servico => {
      carregando = true
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
     <Pagina> 
      <Header 
        goToHomeScreen={this.props.goToHomeScreen} 
        goToShoppingCart={this.props.goToShoppingCart} 
        goToCustomerScreen={this.props.goToCustomerScreen}
      />
      {this.state.servicos && carregando ?
      <MainContainer>
      <InputsContainer>
        <InputContainer>
          <label for="valMin">Valor Mínimo</label>
          <input id ="valMin" type="number" placeholder="R$" 
                 value={this.state.valorMin} 
                 onChange={this.atualizaValorMin}
          />
        </InputContainer>
        <InputContainer>
          <label for="valMax">Valor Máximo</label>
          <input id ="valMax" type="number" placeholder="R$"
                 value={this.state.valorMax} 
                 onChange={this.atualizaValorMax}
          />
        </InputContainer>
        <InputContainer>
          <label for="titulo">Busca por Título</label>
          <input id ="titulo" type="text" placeholder="Nome"
                 value={this.state.buscador} 
                 onChange={this.atualizaValorBuscador}
          />
        </InputContainer>
        <InputContainer>
          <LabelOrden for="orden">Ordenação</LabelOrden>
          <select id="orden" value={this.state.ordenacao} onChange={this.atualizaValorOrdenacao}>
            <option value="titulo crescente" >Título Crescente</option>
            <option value="titulo decrescente" >Título Decrescente</option>
            <option value="prazo crescente" >Prazo Crescente</option>
            <option value="prazo decrescente" >Prazo Decrescente</option>
            <option value="crescente" >Preço Crescente</option>
            <option value="decrescente" >Preço Decrescente</option>
          </select>
        </InputContainer>
        <Botao onClick={this.limparFiltros}>Limpar Filtros</Botao>
      </InputsContainer>
      <CardsContainer>
        {listaServicos}
      </CardsContainer> 
    </MainContainer>

    : 
    <Loading>
    <span class="material-icons">loop</span>
    <Texto>Carregando...</Texto>
  </Loading>
    
      }
      
      <Footer />
    </Pagina>
    )
  }
}

export default CustomerScreen;
