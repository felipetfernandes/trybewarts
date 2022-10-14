const loginButton = document.getElementById('login');
const email = document.getElementById('email');
const password = document.getElementById('password');
const textArea = document.querySelector('textarea');
const counter = document.getElementById('counter');
const getRequiredCheckbox = document.getElementById('agreement');
const buttonSubmmit = document.getElementById('submit-btn');
const form = document.getElementById('evaluation-form');
const formData = document.getElementById('form-data');
const name = document.getElementById('input-name');
const lastName = document.getElementById('input-lastname');
const newEmail = document.getElementById('input-email');
const house = document.getElementById('house');
const family = document.getElementById('label-family');
const arrayFamily = document.getElementsByName('family');

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
  const verifyCheck = getRequiredCheckbox.checked;
  if (verifyCheck === true) {
    buttonSubmmit.disabled = false;
  } else {
    buttonSubmmit.disabled = true;
  }
}


function criarLinha(input, text) {
    const linha = document.createElement('p');
    linha.innerText = `${input}: ${text}`;
    formData.appendChild(linha);
}

function formChange() {
  form.style.display = 'none';
  formData.classList.add('form-data');
  formData.style.display = 'flex';
  criarLinha('Nome', `${name.value} ${lastName.value}`);
  criarLinha('Email', newEmail.value);
  criarLinha('Casa', house.value);
  criarLinha('Família', getFamilyChecked());
  event.preventDefault();
}

getRequiredCheckbox.addEventListener('click', enableButton);
loginButton.addEventListener('click', login);
textArea.addEventListener('input', count);
buttonSubmmit.addEventListener('click', formChange);

function getFamilyChecked() {
  for (let index = 0; index < arrayFamily.length; index += 1) {
    const verifyFamily = arrayFamily[index].checked;
    if (verifyFamily === true) {
      return arrayFamily[index].value;
    }
  }
}
