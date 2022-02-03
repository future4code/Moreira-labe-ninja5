import React from "react";
import Header from "../components/Header";

export class FreelancerScreen extends React.Component{
    render(){
        return <Header goToHomeScreen={this.props.goToHomeScreen} goToShoppingCart={this.props.goToShoppingCart}></Header>
    }
}