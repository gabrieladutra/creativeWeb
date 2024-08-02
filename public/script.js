window.onload = async () => {
    const arquivo = await fetch("languages.json")
    const data = await arquivo.json()

    let body = funcaoRecursiva(document.body)
     let currentLanguage = localStorage.getItem('language') || 'pt'
    for (let i = 0; i < body.length; i++) {
        let elementoAtual = body[i]
        if (elementoAtual.innerText == '') {
            continue
        }
        elementoAtual.innerText = Mustache.render(elementoAtual.innerText, data[currentLanguage])

    }
    let btnEn = document.getElementById("btn-en")
    let btnPt = document.getElementById("btn-br")

    btnEn.onclick = () => {
        localStorage.setItem('language', 'en')
        window.location.reload()
    };

    btnPt.onclick = () => {
        localStorage.setItem('language', 'pt')
        window.location.reload()
    }

}

function funcaoRecursiva(elemento) {
    let elementos = []
    if (elemento.children.length == 0) {
        return [elemento]
    }
    for (let i = 0; i < elemento.children.length; i++) {
        if (elemento.children[i].length == 0) {
            elementos.push(elemento.children[i])
        } else {
            let filhos = funcaoRecursiva(elemento.children[i])
            elementos = elementos.concat(filhos)
        }
    }
    return elementos
}