function testeFrase() {
    fetch("https://fatecrl.edu.br/projetos")
        .then(resp => {
            if (resp.status !== 200) {
                throw new Error("Houve algum problema no servidor (status: " + resp.status + ")");
            }
            return resp.text();
        })
        .then(text => {
            let d = new DOMParser();
            let doc = d.parseFromString(text, "text/html");
            pegarTexto(doc);
        })
        .catch(err => {
            document.querySelector("#res").innerHTML = "Erro: " + err.message;
        });
}

function pegarTexto(doc) {
    let element = doc.querySelector(".home-course-text");
    if (element) {
        document.querySelector("#res").innerHTML = "Texto encontrado: " + element.textContent.trim();
    } else {
        document.querySelector("#res").innerHTML = "Não foi possível encontrar o elemento com a classe 'home-course-text'.";
    }
}

function main() {
    document.querySelector("#btnF").addEventListener("click", testeFrase);
}

window.onload = main;
