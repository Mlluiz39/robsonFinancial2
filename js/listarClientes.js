const listarClientes = document.querySelector('#listar-clientes')
document.addEventListener('click', (e) => {
 if (e.target.classList.contains('btn-exc')) {
  let dataUsers = JSON.parse(localStorage.getItem('dataUsers') || '[]')
  let index = e.target.parentElement.parentElement.rowIndex - 1
  dataUsers.splice(index, 1)
  localStorage.setItem('dataUsers', JSON.stringify(dataUsers))
  e.target.parentElement.parentElement.remove()
 }
})

const motarLista = () => {
  let dataUsers = JSON.parse(localStorage.getItem('dataUsers') || '[]')

  dataUsers.forEach(client => {
    const cliente = document.createElement('tr')

    let dataClient = client.data
    let dataClientFormat = moment(dataClient).format('DD/MM/YYYY')
  

    function valueData() {
      if (dataClientFormat < moment().format('DD/MM/YYYY')) {
        return ` <td class="bg-danger text-white text-center">${dataClientFormat}</td>`
      } else if (dataClientFormat > moment().format('DD/MM/YYYY')) {
        return ` <td class="bg-success text-white text-center">${dataClientFormat}</td>`
      }
    }
    cliente.innerHTML = `
      <td>${client.Nome}</td>
      <td>${client.endereco}</td>
      <td>${client.telefone}</td>
      <td>${client.valor}</td>
      ${valueData()}
      <td><button class="btn btn-danger btn-exc"">excluir</button></td> 
    `
    function clearUser() {
      localStorage.removeItem('listUsers')
      window.location.href = './main.html'
    }
    listarClientes.appendChild(cliente)
  })
}

motarLista()
