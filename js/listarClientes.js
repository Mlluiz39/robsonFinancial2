const listarClientes = document.querySelector('#listar-clientes')

const motarLista = () => {
  let dataUsers = JSON.parse(localStorage.getItem('dataUsers') || '[]')

  dataUsers.forEach(client => {
    const cliente = document.createElement('tr')
    let dataNow = new Date()
    console.log(dataNow)
    let dataClient = client.data
    console.log(dataClient)
    function valueData() {
      if(dataClient >= dataNow.getTime()) {
      return ` <td class="bg-danger text-white text-center">${client.data}</td>`
      }else if(dataClient <= dataNow.getTime()) {
      return ` <td class="bg-success text-white text-center">${client.data}</td>`
      }
    }
    cliente.innerHTML = `
      <td>${client.Nome}</td>
      <td>${client.endereco}</td>
      <td>${client.telefone}</td>
      <td>${client.valor}</td>
      ${valueData()}
    `
    listarClientes.appendChild(cliente)
  })
}

motarLista()
