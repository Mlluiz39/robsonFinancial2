const listarClientes = document.querySelector('#listar-clientes')

const motarLista = () => {
  let dataUsers = JSON.parse(localStorage.getItem('dataUsers') || '[]')

  let dataNow = moment()
  console.log(dataNow)

  dataUsers.forEach(client => {
    const cliente = document.createElement('tr')
    
    // let dataClient = client.data
    // console.log(dataClient)
    // function valueData() {
    //   if(dataClient >= dataNow.getTime()) {
    //   return ` <td class="bg-danger text-white text-center">${client.data}</td>`
    //   }else if(dataClient <= dataNow.getTime()) {
    //   return ` <td class="bg-success text-white text-center">${client.data}</td>`
    //   }
    //   console.log(dataClient)
    // }
    cliente.innerHTML = `
      <td>${client.Nome}</td>
      <td>${client.endereco}</td>
      <td>${client.telefone}</td>
      <td>${client.valor}</td>
      <td>${client.data}</td>
    `
    listarClientes.appendChild(cliente)
  })
}

motarLista()
