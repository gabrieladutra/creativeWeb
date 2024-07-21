window.onload = async () => {
    const arquivo = await fetch("languages.json")
    const data = await arquivo.json()
    let html = document.body.innerHTML

    function switchlanguage() {
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
        document.body.innerHTML = html.replaceAll('{{projectsTitle}}', language.projectsTitle)
        document.body.innerHTML = document.body.innerHTML.replaceAll('{{projectsList}}', language.projectsList)
        document.body.innerHTML = document.body.innerHTML.replaceAll('{{aboutMe}}', language.aboutMe);
        switchlanguage()
    }

    replaceLanguage("pt")
    switchlanguage()
}