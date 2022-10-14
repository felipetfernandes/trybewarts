const loginButton = document.getElementById('login');
const email = document.getElementById('email');
const password = document.getElementById('password');

const login = () => {
  if (email.value === 'tryber@teste.com' && password.value === '123456') {
    window.alert('Olá, Tryber!');
  } else {
    window.alert('Email ou senha inválidos.');
  }
};

loginButton.addEventListener('click', login);
