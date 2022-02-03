import React, { Component } from 'react'
import styled from 'styled-components';
import axios from 'axios'

import Customer from '../pages/Customer';
import ProductDetails from '../pages/ProductDetails'
import ShoppingCart from '../pages/ShoppingCart'



export class AppContainer extends Component {

  state = {
    telaAtual: "Customer",
    id: "",
    title: "",
    description: "",
    price: "",
    paymentMethods: "",
    dueDate: "",
    taken: ""
  }

  verificarTela = () => {
    switch(this.state.telaAtual) {
      case "Home":
        return 
      case "Customer":
        return <Customer 
                  irParaDetalhes = {this.irParaDetalhes} 
                  irParaCarrinho = {this.irParaCarrinho} 
                  /* verificaBotaoCarrinho = {this.verificaBotaoCarrinho}
                  addCarrinho = {this.addCarrinho} */
                /> 
      case "Detalhes":
        return <ProductDetails 
                id={this.state.id}
                title={this.state.title}
                description={this.state.description}
                price={this.state.price}
                paymentMethods={this.state.paymentMethods}
                dueDate={this.state.dueDate}
                taken={this.state.taken}
                /* verificaBotaoCarrinho = {this.verificaBotaoCarrinho}
                addCarrinho = {this.addCarrinho} */
              />
      case "Carrinho":
        return <ShoppingCart 
                id={this.state.id}
                title={this.state.title}
                description={this.state.description}
                price={this.state.price}
                paymentMethods={this.state.paymentMethods}
                dueDate={this.state.dueDate}
                taken={this.state.taken}
              />
    }
  }

  irParaCustomer = () => {
    this.setState({telaAtual: "Customer"})
  }

  irParaDetalhes = (id, title, description, price, paymentMethods, dueDate, taken) => {
    this.setState({telaAtual: "Detalhes",id: id, title: title, description: description, price:price, paymentMethods: paymentMethods, dueDate: dueDate, taken: taken})
  }

  irParaCarrinho = (id, title, description, price, paymentMethods, dueDate, taken) => {
    this.setState({telaAtual: "Carrinho",id: id, title: title, description: description, price:price, paymentMethods: paymentMethods, dueDate: dueDate, taken: taken})
  }
  
  render() {
    return (
      <div>
        <p>Pronto para começar!</p>
        {this.verificarTela()}
      </div>
    )
  }
}
