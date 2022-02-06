import Axios from "axios";
import { BaseUrl } from "../constants/urls";

export const getServicos = (salvaDados) => { 

  Axios.get(BaseUrl, {
    headers: {
      Authorization: "f6ea36c4-47c4-4187-a3fb-38bd313f9559"
    }
  })
  .then(resp => {
    salvaDados(resp.data.jobs)
  })
  .catch(err => {
    alert("Erro")
  })
}

export const addCarrinho = (id, salvaDados) => {
  const url = `${BaseUrl}/${id}`
  const body = {
    "taken":true
  }

  Axios.post(url, body, {
    headers: {
      Authorization: "f6ea36c4-47c4-4187-a3fb-38bd313f9559"
    }
  })
  .then(resp => {
    alert("Serviço Adicionado ao Carrinho")
    getServicos(salvaDados)
  })
  .catch(err => {
    alert("Erro ao Adicionar ao Carrinho")
  })
}

 export const createJob =(title, description, price, paymentMethods, dueDate)=>{
  const headers = {
    headers: {
      Authorization: "f6ea36c4-47c4-4187-a3fb-38bd313f9559"
    } 
  }

  const body= {
    title:title,
    description:description,
    price:Number(price), 
    paymentMethods:paymentMethods,
    dueDate: dueDate
   }

Axios.post(BaseUrl,body,headers)
.then((res)=>{
    alert(`O cadastro foi realizado com sucesso`)
})
.catch((err)=>{
    console.log(err.response)
    alert (`Algo deu errado tente novamente`)
})
}

export const updateJob = (id, salvaDados) => {
  const url = `${BaseUrl}/${id}`

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
    getServicos(salvaDados)

  })
  .catch(err => {
    alert("Não possível deletar o serviço")
  })

}

export const finalizaCompra = (servicos,salvaDados) => {
  const servicosIds = servicos.map(servico => {
    return servico.id
  })

  for(let i=0; i < servicosIds.length - 1 ;i++) {
    
    const url = `${BaseUrl}/${servicosIds[i]}`

    const body = {
      "taken": false
  }

    Axios.post(url, body, {
      headers: {
        Authorization: "f6ea36c4-47c4-4187-a3fb-38bd313f9559"
      }
    })
    .then(resp => {
      getServicos(salvaDados)
    })
    .catch(err => {
      alert("Não possível deletar o serviço")
    })
  }
  alert("Compra realizada com sucesso!")
  
}