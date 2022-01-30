const btnClient = document.querySelector('#btn')
const alertCad = document.querySelector('.alert-cad')

btnClient.addEventListener('click', e => {
  e.preventDefault()
  const nameClient = document.querySelector('#name').value
  const addressClient = document.querySelector('#address').value
  const telClient = document.querySelector('#tel').value
  const valueClient = document.querySelector('#value').value
  const dataClient = document.querySelector('#data').value

  const client = {
    Nome: nameClient,
    endereco: addressClient,
    telefone: telClient,
    valor: valueClient,
    data: dataClient,
  }

    if (nameClient && addressClient && telClient && valueClient && dataClient) {
      let dataUsers = JSON.parse(localStorage.getItem('dataUsers') || '[]')
  
      dataUsers.push({
        Nome: nameClient,
        endereco: addressClient,
        telefone: telClient,
        valor: valueClient,
        data: dataClient,
      })
  
      localStorage.setItem('dataUsers', JSON.stringify(dataUsers))
    
      alertCad.innerHTML = `<div class="alert alert-success alert-dismissible fade show" role="alert"> 
      Cadastrando novo cliente...</div>`
      $(document).ready(function () {
        setTimeout(function () {
          $('.alertSuccess').fadeOut('slow', function () {
            $(this).alert('close')
          })
        }, 3000)
      })
  
      setTimeout(() => {
        window.location.href = './main.html'
      }, 3000)
    }
})
      
