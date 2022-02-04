import React from "react";
import Header from "../components/Header";
import styled from "styled-components";
import Button from "@mui/material/Button";
import Axios from "axios";


const MainContainer= styled.div`
height: 100vh;
`

const CardContainer = styled.div`
  background-color: #EC8C00;
  border-radius: 10px;
  margin: 10px auto;
  width: 50%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  padding: 20px;
`

const ResumoContainer = styled.div`
  margin: 10px auto;
  width: 50%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const Texto = styled.p`
  font-size: 20px;
`
const ContainerTexto = styled.div`
  display: flex;
  justify-content: space-between;
  width: 40%; 
`
const Icone = styled.span`
  :hover{
    cursor: pointer;
    transition-duration: 1s;
    transform: scale(1.1,1.1)
  }  
`


class ShoppingCart extends React.Component {

  state = {
    servicos: []
  }

  componentDidMount = () => {
    this.getAllJobs()
  }

  getAllJobs = () => {
    const url = "https://labeninjas.herokuapp.com/jobs"

    Axios.get(url, {
      headers: {
        Authorization: "f6ea36c4-47c4-4187-a3fb-38bd313f9559"
      }
    })
    .then(resp => {
      this.setState({servicos: resp.data.jobs})
    })
    .catch(err => {
      alert("Erro ao Coletar Serviços")
    })
  }

  updateJob = (id) => {
    const url = `https://labeninjas.herokuapp.com/jobs/${id}`

    const body = {
      "taken": false
  }

    Axios.post(url, body, {
      headers: {
        Authorization: "f6ea36c4-47c4-4187-a3fb-38bd313f9559"
      }
    })
    .then(resp => {
      alert("O serviço foi deletado com sucesso!")
      this.getAllJobs()

    })
    .catch(err => {
      alert("Não possível deletar o serviço")
    })

  }

  finalizaCompra = () => {
    const servicosIds = this.state.servicos.map(servico => {
      return servico.id
    })

    for(let i=0; i < servicosIds.length - 1 ;i++) {
      
      const url = `https://labeninjas.herokuapp.com/jobs/${servicosIds[i]}`

      const body = {
        "taken": false
    }
  
      Axios.post(url, body, {
        headers: {
          Authorization: "f6ea36c4-47c4-4187-a3fb-38bd313f9559"
        }
      })
      .then(resp => {
        this.getAllJobs()
      })
      .catch(err => {
        alert("Não possível deletar o serviço")
      })
    }
    alert("Compra realizada com sucesso!")
    
  }

  render() {

    let valorTotal = 0

    const servicosCarrinho = this.state.servicos.filter(servico => {
      return servico.taken === true
    })
    .map(servico => {

      
      valorTotal += servico.price

      return (
        <CardContainer>
          <Texto>{servico.title}</Texto>
          <ContainerTexto>
            <Texto>R$ {servico.price}</Texto>
            <Icone>
              <span class="material-icons" onClick={() => this.updateJob(servico.id)}>delete</span>
            </Icone>
            {/* <Button variant="contained"
              onClick={() => this.updateJob(servico.id)}
              sx={{
                width: 100,
                background: "#EFDD08",
                color: "black",
              }}
           >
           </Button> */}
          </ContainerTexto>
        </CardContainer>
      )
    })

    return (
      <MainContainer>
        <Header goToHomeScreen={this.props.goToHomeScreen} goToShoppingCart={this.props.goToShoppingCart} />
        {servicosCarrinho}
        <ResumoContainer>
          <h2>Preço Total: R$ {valorTotal}</h2>
          
          <Button variant="contained" onClick={this.finalizaCompra}>Contratar Serviço 🙋‍♀️</Button>
        </ResumoContainer>
      </MainContainer>
    )
  }
}

export default ShoppingCart