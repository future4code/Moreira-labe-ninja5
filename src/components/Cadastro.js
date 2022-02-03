import React from "react";
import Axios from "axios";
import styled from "styled-components";
// import Select from "react-select/dist/declarations/src/Select";



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
  

const FormularioTot = styled.div`
  form{
      display:flex;
      flex:direction-column;
      aling-items:center;
      justify-content:center;
      
      

  }

  h1{
    display:flex;
    flex:direction-column;
    aling-items:center;
    justify-content:center;
   
    
  }

  form{
 
    
    
    input{
      display:block
    
      
    }
  }

  fieldset{
    height:400px;
  }

  button{
    display: inline;
    border-radius:4px;
    cursor: pointer;
  }
  
`

const baseURL="https://labeninjas.herokuapp.com"



export default class Cadastro extends React.Component {
  state = {
    valor:"",
    cadastrado:""
  }

  CreateApiKey =()=>{
      const body= {
        nome: this.state.cadastrado
      } 

    Axios
    .post(baseURL,body)
    .then((res)=>{
        alert(`O cadastro ${this.state.cadastrado}foi realizado com sucesso`)
    })
    .catch((err)=>{
        console.log(err)
        alert (`Algo ${this.state.cadastrado} deu errado tente novamente`)
    })
  }

//   CreateApiKey()
  
   
  
//   alteraValor=(event) =>{
//       this.setState({valor:event.target.value})
//   }
  
    render() {
    return (
      <FormularioTot>
        <h1>Cadastro</h1>
        <form>
          <fieldset>
            <input placeholder="Titulo"></input>
            <input placeholder="Descrição"></input>
            <input placeholder="Preço $" type="number"></input>
            <input id="date" type="date"></input>
            </fieldset>
            <div>
            {/* {MyComponent} */}
           
            <button onClick={this.CreateApiKey}>cadastrar</button>
            <p>item selecionado {this.state.valor}</p>
            </div>
        </form>
        
      </FormularioTot>
    );
  }
}
