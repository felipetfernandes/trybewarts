const loginButton = document.getElementById('login');
const email = document.getElementById('email');
const password = document.getElementById('password');
const textArea = document.querySelector('textarea');
const counter = document.getElementById('counter');

const login = () => {
  if (email.value === 'tryber@teste.com' && password.value === '123456') {
    window.alert('Olá, Tryber!');
  } else {
    window.alert('Email ou senha inválidos.');
  }
};

const count = () => {
  counter.innerText = (500 - textArea.value.length);
};

loginButton.addEventListener('click', login);
textArea.addEventListener('input', count);
