const btnLogin = document.querySelector('#btn-login')

function login() {
  let user = document.querySelector('#user')
  let userLabel = document.querySelector('#user-label')

  let senha = document.querySelector('#pass')
  let senhaLabel = document.querySelector('#pass-label')

  let errorMessage = document.querySelector('#error-message')

  let listUser = []

  let userValid = {
    nome: '',
    user: '',
    senha: '',
  }

  listUser = JSON.parse(localStorage.getItem('listUsers'))

  listUser.forEach(item => {
    if (user.value === item.userCad && senha.value === item.senhaCad) {
      userValid = {
        nome: item.nomeCad,
        user: item.userCad,
        senha: item.senhaCad,
      }
    }
  })
  if (userValid.user !== user.value && userValid.senha !== senha.value) {
    userLabel.style.color = 'red'
    user.style.borderColor = 'red'
    senhaLabel.style.color = 'red'
    senha.style.borderColor = 'red'
    errorMessage.style.display = 'block'
    errorMessage.innerHTML = 'Usuário ou senha incorretos'
    user.focus()
  } else if (userValid.user === '' && userValid.senha === '') {
    userLabel.style.color = 'red'
    user.style.borderColor = 'red'
    senhaLabel.style.color = 'red'
    senha.style.borderColor = 'red'
    errorMessage.style.display = 'block'
    errorMessage.innerHTML = 'Campos obrigatórios'
  } else if (userValid.user === user.value && userValid.senha === senha.value) {
    window.location.href = './main.html'

    let tokenUser = Math.random().toString(16).substring(2)
    localStorage.setItem('tokenUser', tokenUser)
  }
}

btnLogin.addEventListener('click', login)
