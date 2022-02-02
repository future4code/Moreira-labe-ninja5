import React from "react";

export class Home extends React.Component{
    render(){
        return (
            <>
            <button onClick={this.props.goToFreelancerScreen}>Sou um ninja</button>
            <button onClick={this.props.goToCustomerScreen}>Preciso de um ninja</button>
            </>
        )
    }
}