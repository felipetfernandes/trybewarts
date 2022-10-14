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

const getRequiredCheckbox = document.getElementById('agreement');

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
