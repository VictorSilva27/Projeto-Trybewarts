const submitBtn = document.querySelector('#submit-btn');
const textArea = document.getElementsByTagName('textarea')[0];
const counter = document.getElementById('counter');
const agreement = document.querySelector('#agreement');
const button = document.getElementById('button');

function confimarLogin() {
  const email = document.getElementById('email').value;
  const senha = document.getElementById('password').value;

  if (email === 'tryber@teste.com' && senha === '123456') {
    window.alert('Olá, Tryber!');
  } else {
    window.alert('Email ou senha inválidos.');
  }
}
button.addEventListener('click', confimarLogin);

function enableSubmit() {
  submitBtn.disabled = !agreement.checked;
}
agreement.addEventListener('change', enableSubmit);

function contando() {
  const value = textArea.value.length;
  const calc = 500 - value;
  if (calc >= 0) {
    counter.innerText = calc;
  } else {
    counter.innerText = '0';
  }
}
textArea.addEventListener('keyup', contando);

const nome = document.getElementById('input-name');
const sobrenome = document.getElementById('input-lastname');
const email = document.getElementById('input-email');
const casa = document.getElementById('house');
const form = document.getElementById('evaluation-form');
const obs = document.getElementById('textarea');
const p = document.getElementById('p-input');

function desativar() {
  submitBtn.setAttribute('type', 'button');
}

function printInfo() {
  const materias = document.getElementsByClassName('subject');
  const materiasCheck = [];
  for (let index = 0; index < materias.length; index += 1) {
    if (materias[index].checked) {
      materiasCheck.push(` ${materias[index].value}`);
    }
  }
  p.innerText = `Nome: ${nome.value} ${sobrenome.value}
      Email: ${email.value}
      Casa: ${casa.value}
      Família: ${form.family.value}
      Matérias: ${materiasCheck.join()}
      Avaliação: ${form.rate.value}
      Observações: ${obs.value}`;
}
// terminando projeto
submitBtn.addEventListener('click', printInfo);
submitBtn.addEventListener('click', desativar);
