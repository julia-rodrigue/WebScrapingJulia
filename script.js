function testeFrase() {
    fetch("https://reqres.in/")
        .then(resp => {
            if (resp.status != 200) {
                throw new Error("Houve algum problema no servidor");
            }
            return resp.text();
        })
        .then(text => {
            let d = new DOMParser();
            let doc = d.parseFromString(text, "text/html");
            pegarFrase(doc);
        })
        .catch(err => {
            document.querySelector("#res").innerHTML = err.message;
        });
}

function pegarFrase(doc) {
    let p = doc.querySelector("p");
    if (p) {
        document.querySelector("#res").innerHTML = "Frase: " + p.textContent;
    } else {
        document.querySelector("#res").innerHTML = "Não foi possível encontrar uma frase... ";
    }
}

function main() {
    document.querySelector("#btnF").addEventListener("click", testeFrase);
}

window.onload = main;
