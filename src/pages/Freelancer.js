import React from "react";
import Header from "../components/Header";
import Axios from "axios";
import styled from "styled-components";
// import Select from "react-select/dist/declarations/src/Select";
//tinha importado essa api pois estava com dificuldade com o formulario.


// const options = [
//     { value: 'credito', label: 'Cartão de Crédito' },
//     { value: 'debito', label: 'Cartão de Crédito' },
//     { value: 'pix', label: 'Pix' },
//     { value: 'paypal', label: 'Paypal' },
//     { value: 'boleto', label: 'Boleto' }]

//     const MyComponent = () => (
//         <Select options={options} />
//       ) 



// const  = styled.div`
//   margin:5x
// `
 // {/* {MyComponent} */}

const FormularioTot = styled.div`
  form{
      display:flex;
      flex:direction-column;
      aling-items:center;
      justify-content:center;
     }
 
  h3{
    
    text-align:center;
    color:#2B27C4;
    font-size:40px;
    background-color:;
   }  
`
const ContainerInput = styled.fieldset`
display:flex;
flex-direction:column;
width:50%;
margin-top:200px;
border-radius:15px;
background-color:#ec8c00;
box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
`
const Input = styled.input`
width:50%;
margin: 15px auto 0 auto;
height:40px;
font-size:25px;
padding-left:10px;
border-radius:10px;
border:none;

`
const Botao = styled.button`
width:40%;
margin: 15px auto ;
padding: 10px;
font-size:25px;
background-color:#2B27C4;
color:white;
border-radius:5px;
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
font-size:25px;
padding-left:10px;
border-radius:10px;
border:none;

`
const baseURL="https://labeninjas.herokuapp.com/jobs"

const headers = {
  headers: {
    Authorization: "f6ea36c4-47c4-4187-a3fb-38bd313f9559"
  }
};




export class FreelancerScreen extends React.Component{
    state = {
        nome:"",
        titulo:"ewerton",
        descricao:"dev",
        preco:"",
        pgt:[],
        prazo:""
       }
     
     
     
       CreateJob =()=>{
           const body= {
         title:this.state.titulo,
         description:this.state.descricao,
          price:Number(this.state.preco), 
          paymentMethods:this.state.pgt,
          dueDate: this.state.prazo
           } 
     
         Axios
         .post(baseURL,body,headers)
         .then((res)=>{
             alert(`O cadastro foi realizado com sucesso`)
         })
         .catch((err)=>{
             console.log(err.response)
             alert (`Algo deu errado tente novamente`)
         })
       }
     
     //   CreateApiKey()
       
        
       
     //   alteraValor=(event) =>{
     //       this.setState({valor:event.target.value})
     //   }
     
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
        <Header goToHomeScreen={this.props.goToHomeScreen} goToShoppingCart={this.props.goToShoppingCart}></Header>
        <FormularioTot>
        
        
        
        
        
        {/* ligar a função didupdate para salvar dados do formulario */}
        <form onSubmit={this.editarValor}> 
          <ContainerInput>
          <h3>Cadastre seu Serviço</h3>
            <Input type="text" placeholder="Titulo" value={this.state.titulo} onChange={this.tituloNome} required></Input>
            <Input type="text" placeholder="Descrição" value={this.state.descricao} onChange={this.descricaoFunction}required></Input>
            <Input placeholder="Preço $" type="number" value= {this.state.preco} onChange={this.precoFunction} required></Input>
            <Input id="date" type="date" value={this.state.prazo} onChange={this.prazoFunction}></Input>
            <label></label>
            <Select name="Pagamento" value={this.state.pgt} onChange={this.setEstado}>
              <option value="" >selecione :</option>
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
            
            
            {/* </form> */}
          {/* função da api  */}
            <Botao type="submit"onClick={this.CreateJob}>Cadastrar</Botao>
            </ContainerInput>
            
            
            
            
            
           
            
            {/* <p>item selecionado {this.state.valor}</p> */}
          
        </form>
        
      </FormularioTot>
      </div>
   ) }
}