import React from "react";


function ShoppingCart(props) {
  return (
    <div>
      <h1>Página de Carrinho</h1>
      <p>{props.price}</p>
    </div>
  )
}

export default ShoppingCart