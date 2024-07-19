function clicar() {
    let a = document.getElementById('btn-br');
    a.innerText = "Clicou"; 
    alert("Clicou");
}

document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('btn-br').onclick = clicar;
});


const arquivo = await fetch("languages.json")
const data = await arquivo.json();
console.log(data)


let language = data.pt // To-do : Mudar a lógica para substituir pt por en ao clicar nos botões
document.body.innerHTML = document.body.innerHTML.replaceAll('{{projectsTitle}}', language.projectsTitle)
document.body.innerHTML = document.body.innerHTML.replaceAll('{{projectsList}}', language.projectsList)
document.body.innerHTML = document.body.innerHTML.replaceAll('{{aboutMe}}', language.aboutMe)





