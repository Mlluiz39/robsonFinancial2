const btnClose = document.querySelector('#btn-clear-token')

if (localStorage.getItem('tokenUser') === null) {
  alert('Você não está logado!')
  window.location.href = './index.html'
}

function clearToken() {
  localStorage.removeItem('tokenUser')
  window.location.href = './index.html'
}

btnClose.addEventListener('click', clearToken)
