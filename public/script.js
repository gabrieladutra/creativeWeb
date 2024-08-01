window.onload = async () => {
    const arquivo = await fetch("languages.json")
    const data = await arquivo.json()
    let html = document.body.innerHTML

    function switchLanguage() {
        let btnEn = document.getElementById("btn-en")
        let btnPt = document.getElementById("btn-br")

        btnEn.onclick = () => {
            replaceLanguage("en")
        };

        btnPt.onclick = () => {
            replaceLanguage("pt")
        };
    }

    function replaceLanguage(idioma) {
        let language = data[idioma]
        document.body.innerHTML = Mustache.render(html, language)
        switchLanguage()
    }

    replaceLanguage("pt")
    switchLanguage()
}