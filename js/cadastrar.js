const btnCadastrar = document.querySelector('#btnCad')
const alertError = document.querySelector('.alertError')
const alertSuccess = document.querySelector('.alertSuccess')

const inputName = document.querySelector('#inputName')
const labelName = document.querySelector('#labelName')
let validName = false

const inputUser = document.querySelector('#inputUser')
const labelUser = document.querySelector('#labelUser')
let validUser = false

const inputPassword = document.querySelector('#inputPassword')
const labelPassword = document.querySelector('#labelPassword')
let validPassword = false

const btnLogin = document.querySelector('#btn-login')

inputName.addEventListener('keyup', () => {
  if (inputName.value.length <= 2) {
    labelName.setAttribute('style', 'color: red')
    labelName.innerHTML = '*Insira no mínimo 3 caracteres'
    inputName.setAttribute('style', 'border-color: red')
    validName = false
  } else {
    labelName.setAttribute('style', 'color: green')
    labelName.innerHTML = 'Nome'
    inputName.setAttribute('style', 'border-color: none')
    validName = true
  }
})

inputUser.addEventListener('keyup', () => {
  if (inputUser.value.length < 4) {
    labelUser.setAttribute('style', 'color: red')
    labelUser.innerHTML = '*Insira no mínimo 4 caracteres'
    inputUser.setAttribute('style', 'border-color: red')
    validUser = false
  } else {
    labelUser.setAttribute('style', 'color: green')
    labelUser.innerHTML = 'Usuário'
    inputUser.setAttribute('style', 'border-color: none')
    validUser = true
  }
})

inputPassword.addEventListener('keyup', () => {
  if (inputPassword.value.length <= 4) {
    labelPassword.setAttribute('style', 'color: red')
    labelPassword.innerHTML = '*Insira no mínimo 4 caracteres'
    inputPassword.setAttribute('style', 'border-color: red')
    validPassword = false
  } else {
    labelPassword.setAttribute('style', 'color: green')
    labelPassword.innerHTML = 'Senha'
    inputPassword.setAttribute('style', 'border-color: none')
    validPassword = true
  }
})

btnCadastrar.addEventListener('click', e => {
  e.preventDefault()
  if (validName && validUser && validPassword) {
    let listUsers = JSON.parse(localStorage.getItem('listUsers') || '[]')

    listUsers.push({
      nomeCad: inputName.value,
      userCad: inputUser.value,
      senhaCad: inputPassword.value,
    })

    localStorage.setItem('listUsers', JSON.stringify(listUsers))

    alertSuccess.innerHTML = `<div class="alert alert-success alert-dismissible fade show" role="alert"> 
    Cadastrando usuário...</div>`
    $(document).ready(function () {
      setTimeout(function () {
        $('.alertSuccess').fadeOut('slow', function () {
          $(this).alert('close')
        })
      }, 3000)
    })

    setTimeout(() => {
      window.location.href = './index.html'
    }, 3000)
  } else {
    alertError.innerHTML = `<div class="alert alert-danger alert-dismissible fade show" role="alert">
    Campo vazio ou errado
  </div>`
    $(document).ready(function () {
      setTimeout(function () {
        $('.alertError').fadeOut('slow', function () {
          $(this).alert('close')
        })
      }, 3000)
    })
  }

  inputName.value = ''
  labelName.innerHTML = 'Nome'
  labelName.setAttribute('style', 'border-color: none')
  inputUser.value = ''
  labelUser.innerHTML = 'Usuário'
  labelUser.setAttribute('style', 'border-color: none')
  inputPassword.value = ''
  labelPassword.innerHTML = 'Senha'
  labelPassword.setAttribute('style', 'border-color: none')
})

