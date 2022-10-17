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
const arrayFamily = document.getElementsByName('family');
const techList = document.getElementsByClassName('subject');
const arrayRate = document.getElementsByName('rate');

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

function techs() {
  let list = '';
  for (let index = 0; index < techList.length; index += 1) {
    if (techList[index].checked) {
      list += `${techList[index].value}, `;
    }
  }
  list = list.slice(0, -2);
  return list;
}

function getChecked(array) {
  for (let index = 0; index < array.length; index += 1) {
    const verify = array[index].checked;
    if (verify === true) {
      return array[index].value;
    }
  }
}

function criateLine(input, text) {
  const line = document.createElement('p');
  line.innerText = `${input}: ${text}`;
  formData.appendChild(line);
}

function formChange() {
  form.style.display = 'none';
  formData.style.display = 'flex';
  criateLine('Nome', `${name.value} ${lastName.value}`);
  criateLine('Email', newEmail.value);
  criateLine('Casa', house.value);
  criateLine('Família', getChecked(arrayFamily));
  criateLine('Matérias', techs());
  criateLine('Avaliação', getChecked(arrayRate));
  criateLine('Observações', textArea.value);
  window.event.preventDefault();
}

getRequiredCheckbox.addEventListener('click', enableButton);
loginButton.addEventListener('click', login);
textArea.addEventListener('input', count);
buttonSubmmit.addEventListener('click', formChange);
