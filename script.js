const loginButton = document.getElementById("login");
const email = document.getElementById("email");
const password = document.getElementById("password");
const textArea = document.querySelector("textarea");
const counter = document.getElementById("counter");
const getRequiredCheckbox = document.getElementById("agreement");
const buttonSubmmit = document.getElementById("submit-btn");
const form = document.getElementById("evaluation-form");
const formData = document.getElementById("form-data");
const name = document.getElementById("input-name");
const lastName = document.getElementById("input-lastname");
const newEmail = document.getElementById("input-email");
const house = document.getElementById("house");
const family = document.getElementById("label-family");
const techList = document.getElementsByClassName("subject");

const login = () => {
  if (email.value === "tryber@teste.com" && password.value === "123456") {
    window.alert("Olá, Tryber!");
  } else {
    window.alert("Email ou senha inválidos.");
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
  let lista = '';
  for (let index = 0; index < techList.length; index += 1) {
    if (techList[index].checked) {
      lista += `${techList[index].value}, `;
    }
  }
  lista = lista.slice(0, lista.length - 2);
  return lista;
}

function criarLinha(input, text) {
  const linha = document.createElement("p");
  linha.innerText = `${input}: ${text}`;
  formData.appendChild(linha);
}

function formChange() {
  form.style.display = "none";
  formData.classList.add("form-data");
  formData.style.display = "flex";
  criarLinha("Nome", `${name.value} ${lastName.value}`);
  criarLinha("Email", newEmail.value);
  criarLinha("Casa", house.value);
  criarLinha("Família", family.value);
  criarLinha("Matérias", techs());
  event.preventDefault();
}

getRequiredCheckbox.addEventListener("click", enableButton);
loginButton.addEventListener("click", login);
textArea.addEventListener("input", count);
buttonSubmmit.addEventListener("click", formChange);
