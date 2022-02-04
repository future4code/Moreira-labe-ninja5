import React from "react";
import Header from "../components/Header";

export class Home extends React.Component{
    render(){
        return (
            <>
            <Header goToHomeScreen={this.props.goToHomeScreen} goToShoppingCart={this.props.goToShoppingCart}></Header>
            <button onClick={this.props.goToFreelancerScreen}>Sou um ninja</button>
            <button onClick={this.props.goToCustomerScreen}>Preciso de um ninja</button>
            </>
        )
    }
}