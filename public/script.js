// window.onload = function (){
//     document.addEventListener('DOMContentLoaded', (event) => {
//         document.getElementById('btn-br').onclick = changeLanguage();
//     });
//     document.addEventListener('DOMContentLoaded', (event) => {
//         document.getElementById('btn-en').onclick = changeLanguage();
//     });

//     function changeLanguage(){
//         alert("Clicou")
//     }

// }
// inserir click
// let btn = document.getElementById("btn-en")

// console.log("JesusS");

// btn.addEventListener("click", function() {

//   console.log("clicou");
//   alert("hello")

// });


window.onload = async () => {
    // Carregando arquivo de tradução e realizando substituições
    const arquivo = await fetch("languages.json")
    const data = await arquivo.json();
    console.log('traducao', data)
    let html = document.body.innerHTML
    function mudarIdioma(idioma) {
        let language = data[idioma]
        document.body.innerHTML = html.replaceAll('{{projectsTitle}}', language.projectsTitle)
        document.body.innerHTML = document.body.innerHTML.replaceAll('{{projectsList}}', language.projectsList)
        document.body.innerHTML = document.body.innerHTML.replaceAll('{{aboutMe}}', language.aboutMe)
    }
    mudarIdioma("pt")
    
    let btnEn = document.getElementById("btn-en");
    console.log(btnEn)
    btnEn.onclick = () => {
        console.log("Botão inglês")
        mudarIdioma("en")
        console.log(html)
    }
    console.log(html)
    let btnPt = document.getElementById("btn-br");
    console.log(btnPt)
    console.log(btnPt)
    btnPt.onclick = () => {
        console.log("Clicou em Portugues")
        mudarIdioma("pt")
    }
}



// let language = data.pt // To-do : Mudar a lógica para substituir pt por en ao clicar nos botões
// document.body.innerHTML = document.body.innerHTML.replaceAll('{{projectsTitle}}', language.projectsTitle)
// document.body.innerHTML = document.body.innerHTML.replaceAll('{{projectsList}}', language.projectsList)
// document.body.innerHTML = document.body.innerHTML.replaceAll('{{aboutMe}}', language.aboutMe)








