const loginButton = document.getElementById('login');
const email = document.getElementById('email');
const password = document.getElementById('password');
const textArea = document.querySelector('textarea');
const counter = document.getElementById('counter');
const getRequiredCheckbox = document.getElementById('agreement');

const login = () => {
  if (email.value === 'tryber@teste.com' && password.value === '123456') {
    window.alert('Olá, Tryber!');
  } else {
    window.alert('Email ou senha inválidos.');
  }
};

const count = () => {
  counter.innerText = 500 - textArea.value.length;
};

function enableButton() {
  const buttonSubmmit = document.getElementById('submit-btn');
  const verifyCheck = getRequiredCheckbox.checked;
  if (verifyCheck === true) {
    buttonSubmmit.disabled = false;
  } else {
    buttonSubmmit.disabled = true;
  }
}

getRequiredCheckbox.addEventListener('click', enableButton);
loginButton.addEventListener('click', login);
textArea.addEventListener('input', count);
