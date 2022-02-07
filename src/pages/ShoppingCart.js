import React from "react";
import Header from "../components/Header";
import styled from "styled-components";
import Button from "@mui/material/Button";
import Footer from '../components/Footer'
import { getServicos } from "../services/requests";
import { updateJob } from "../services/requests";
import { finalizaCompra } from "../services/requests";



const MainContainer= styled.div`
height: 100vh;
display:flex;
flex-direction: column;
justify-content: space-between;
`

const PageContainer = styled.div`
  margin-top: 30px;
`

const CardContainer = styled.div`
  background-color: #EC8C00;
  border-radius: 10px;
  margin: 20px auto;
  width: 50%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  padding: 20px;
  box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
  @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
  /* celulares */
  width: 80%;
  }
`

const ResumoContainer = styled.div`
  margin: 10px auto;
  width: 50%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
  /* celulares */
  width: 80%;
  }
`
const Texto = styled.p`
  font-size: 20px;
  @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
  /* celulares */
  font-size: 16px;
  }
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
const Loading = styled.div`
  display: flex;
  width: 10%;
  justify-content: space-evenly;
  margin: 20px auto;
  font-size: 30px;
  font-weight: bold;
`

class ShoppingCart extends React.Component {

  state = {
    servicos: []
  }

  componentDidMount = () => {
    getServicos(this.salvaDados)
  }

  salvaDados = (data) => {
    this.setState({servicos: data})
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
              <span class="material-icons" onClick={() => updateJob(servico.id, this.salvaDados)}>delete</span>
            </Icone>
          </ContainerTexto>
        </CardContainer>

      )
    })
  
    return (
      
      <MainContainer>
        <Header 
          goToHomeScreen={this.props.goToHomeScreen} 
          goToShoppingCart={this.props.goToShoppingCart} 
          goToCustomerScreen={this.props.goToCustomerScreen}
        />    
        
          {this.state.servicos && valorTotal ?
            (<div>
              <PageContainer>
                {servicosCarrinho}
                <ResumoContainer>
                  <h2>Preço Total: R$ {valorTotal}</h2>
                  <Button variant="contained" onClick={() => finalizaCompra(this.state.servicos,this.salvaDados)}>Contratar Serviço 🙋‍♀️</Button>
                </ResumoContainer>
              </PageContainer>    
            </div>)
            : 
            <Loading>
              <span class="material-icons">loop</span>
              <Texto>Carregando...</Texto>
            </Loading>
          } 
        <Footer />
      </MainContainer>
    )
  }
}

export default ShoppingCart