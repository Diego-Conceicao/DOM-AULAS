//classlist.add() --> cria um classificador
//createElement() --> cria um elemento
/*
const explicacao = document.querySelector('div')
explicacao.classList.add('Diego')
const texto = document.createElement('p')
const item = explicacao.appendChild(texto)
explicacao.classList.remove('Diego')
*/

const InputElement = document.querySelector('.new-task-input')
const addTaskbutton = document.querySelector('.new-tasks-button')
const addContainer = document.querySelector('.tasks-container')

function validarBotao(){
    if(InputElement.value=== ''){
InputElement.classList.add('error')
}else{
    InputElement.classList.remove('error')
    const texto = document.createElement('p')
    texto.innerText = InputElement.value
    addContainer.appendChild(texto)
}
}
addTaskbutton.addEventListener('click', validarBotao)