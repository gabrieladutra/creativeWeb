const arquivo = await fetch("languages.json")
const data = await arquivo.json();
console.log(data)

let language = data.pt // To-do : Mudar a lógica para substituir pt por en ao clicar nos botões
console.log
document.body.innerHTML = document.body.innerHTML.replaceAll('{{projectsTitle}}', language.projectsTitle)
document.body.innerHTML = document.body.innerHTML.replaceAll('{{projectsList}}', language.projectsList)





