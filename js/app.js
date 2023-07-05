document.addEventListener("keyup", e=>{

    if (e.target.matches("#buscador")){

        if (e.key ==="Escape")e.target.value = ""

        document.querySelectorAll(".juego").forEach(fruta =>{

            fruta.textContent.toLowerCase().includes(e.target.value.toLowerCase())
            ?fruta.classList.remove("filtro")
            :fruta.classList.add("filtro")
        })
    }
})

document.getElementById('showButton').addEventListener('click', function() {
    document.getElementById('overlay').style.display = 'block';
});

document.getElementById('closeButton').addEventListener('click', function() {
    document.getElementById('overlay').style.display = 'none';
});

function generarCodigo() {
    var caracteres = "aAbBcCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUxXzZyYñÑvV";
    var codigo = "";

    for (var i = 0; i < 10; i++) {
      var indice = Math.floor(Math.random() * caracteres.length);
    codigo += caracteres.charAt(indice);
    }

    document.getElementById("codigoDiv").innerText = codigo;
}





function imprimirEnAside200() {
    var textoInput200 = document.getElementById("textoInput200").value;
    var elementosAside = document.querySelectorAll("#elemento200");

    for (var i = 0; i < elementosAside.length; i++) {
    elementosAside[i].innerText = textoInput200;
    }
}

function imprimirEnAside2() {
    var textoInput2 = document.getElementById("textoInput2").value;
    var elementosAside = document.querySelectorAll("#elemento2");

    for (var i = 0; i < elementosAside.length; i++) {
    elementosAside[i].innerText = textoInput2;
    }
}

function imprimirEnAside3() {
    var textoInput3 = document.getElementById("textoInput3").value;
    var elementosAside = document.querySelectorAll("#elemento3");

    for (var i = 0; i < elementosAside.length; i++) {
    elementosAside[i].innerText = textoInput3;
    }
}

function imprimirEnAside4() {
    var textoInput4 = document.getElementById("textoInput4").value;
    var elementosAside = document.querySelectorAll("#elemento4");

    for (var i = 0; i < elementosAside.length; i++) {
    elementosAside[i].innerText = textoInput4;
    }
}

function imprimirEnAside5() {
    var textoInput5 = document.getElementById("textoInput5").value;
    var elementosAside = document.querySelectorAll("#elemento5");

    for (var i = 0; i < elementosAside.length; i++) {
    elementosAside[i].innerText = textoInput5;
    }
}
