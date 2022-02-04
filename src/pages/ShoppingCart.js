import React from "react";
import Header from "../components/Header";

function ShoppingCart(props) {
  return (
    <div>
      <Header goToHomeScreen={props.goToHomeScreen} goToShoppingCart={props.goToShoppingCart}></Header>
      <h1>Página de Carrinho</h1>
      <p>{props.price}</p>
    </div>
  )
}

export default ShoppingCart