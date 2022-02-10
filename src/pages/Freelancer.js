import React from "react";
import Header from "../components/Header";
import styled from "styled-components";
import Footer from '../components/Footer'
import { createJob } from "../services/requests";

const FormularioTot = styled.div`
  form{
      display:flex;
      flex-direction: column;
      align-items:center;
      justify-content:center;
     }
 
  h3{
    
    text-align:center;
    color: whitesmoke;
    font-size:30px;
    margin-top: 10px;
   }  
`
const ContainerInput = styled.fieldset`
display:flex;
flex-direction:column;
width:50%;
margin:40px 0;
border-radius:15px;
border: none;
background-color:#ec8c00;
box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;

@media screen and (min-device-width : 320px) and (max-device-width : 480px) {
  /* celulares */
  width: 90%;
  }
`
const Input = styled.input`
width:50%;
margin: 20px auto 0 auto;
height:40px;
font-size:20px;
padding-left:10px;
border-radius:10px;
border:none;
@media screen and (min-device-width : 320px) and (max-device-width : 480px) {
  /* celulares */
  width: 90%;
  }
`

const Botao = styled.button`
width:40%;
margin: 0 auto 20px auto;
padding: 10px;
font-size:20px;
background-color:#06a2cf;
color:white;
border:none;
border-radius:7px;
box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
:hover{
  cursor:pointer;
  background-color:#071226;
  transition-duration:1s;
}

`
const Select = styled.select`
width:50%;
margin: 15px auto 0 auto;
height:40px;
font-size:20px;
padding-left:10px;
border-radius:10px;
border:none;
color: grey;
@media screen and (min-device-width : 320px) and (max-device-width : 480px) {
  /* celulares */
  width: 90%;
  }

`

 


export class FreelancerScreen extends React.Component{
    state = {
        nome:"",
        titulo:"",
        descricao:"",
        preco:"",
        pgt:[],
        prazo:""
       }
     

     
          editarValor = e =>{
             e.preventDefault();
             
          }
        
          setEstado = (event) =>{
          this.setState({pgt:[event.target.value]})
         }
     
     
         tituloNome = (event) => {
           this.setState({titulo:event.target.value})
         }
       
         descricaoFunction = (event) => {
           this.setState({descricao:event.target.value})
         }
     
         precoFunction = (event) => {
           this.setState({preco:event.target.value})
         }
         
     
         prazoFunction = (event) => {
           this.setState({prazo:event.target.value})
         }
         
         
    render(){




        return (
        <div>
        <Header 
          goToHomeScreen={this.props.goToHomeScreen} 
          goToShoppingCart={this.props.goToShoppingCart}
          goToCustomerScreen={this.props.goToCustomerScreen}
        />
        <FormularioTot>    
        <form onSubmit={this.editarValor}> 
          <ContainerInput>
          <h3>Cadastre seu Serviço</h3>
            <Input type="text" placeholder="Titulo" value={this.state.titulo} onChange={this.tituloNome} required></Input>
            <Input type="text" placeholder="Descrição" value={this.state.descricao} onChange={this.descricaoFunction}required></Input>
            <Input placeholder="Preço R$" type="number" value= {this.state.preco} onChange={this.precoFunction} required></Input>
            <Input placeholder="Prazo DD/MM/AAAA" id="date" type="date" value={this.state.prazo} onChange={this.prazoFunction}></Input>
            <label></label>
            <Select name="Pagamento" value={this.state.pgt} onChange={this.setEstado}>
              <option value="" >Pagamento :</option>
              <option value="Cartão Crédito">Cartão Crédito</option>
              <option value="Cartão Débito">Cartão Débito</option>
              <option value="Pix">Pix</option>
              <option value="Paylpal">Paylpal</option>
              <option value="Boleto">Boleto</option>
            </Select><br /><br />
            {/* <form value={this.state.pgt} onChange={this.setEstado}>
            <input type="checkbox" name="pagamento" value="Cartão de Débito"/>Cartão de Débito
            <input type="checkbox" name="pagamento" value="Cartão de Crédito"/>Cartão de Crédito
            <input type="checkbox" name="pagamento" value="Pix"/>Pix
            <input type="checkbox" name="pagamento" value="Paypal"/>Paypal
            <input type="checkbox" name="pagamento" value="Boleto"/>Boleto
             */}
            <Botao type="submit"onClick={() => createJob(
                                                this.state.titulo,
                                                this.state.descricao,
                                                this.state.preco,
                                                this.state.pgt,
                                                this.state.prazo
                                              )}>Cadastrar</Botao>
            </ContainerInput>         
        </form>       
      </FormularioTot>
      <Footer />
      </div>
   ) }
}