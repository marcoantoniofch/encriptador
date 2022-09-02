const ingresoTexto = document.querySelector(".entradaTexto")
const salidaMensaje = document.querySelector(".outMensaje")
const copiarTexto = document.querySelector(".capturaTexto")

function btnEncriptar(){
    const encriptandoTexto = encriptar(ingresoTexto.value)
    salidaMensaje.style.backgroundImage="none"
    salidaMensaje.value=encriptandoTexto;
    ingresoTexto.value=""
}

function encriptar(strEncritado) {
    let arrayCodigo = [
        ["e", "enter"],
        ["i", "imes"],
        ["a", "ai"],
        ["o", "ober"],
        ["u", "ufat"]
    ]
    strEncritado = strEncritado.toLowerCase(); //convirtiendo todo a minucsula
    for (let i = 0; i < arrayCodigo.length; i++) {
        if (strEncritado.includes(arrayCodigo[i][0])) {
            strEncritado = strEncritado.replaceAll(arrayCodigo[i][0],arrayCodigo[i][1])
        }
    }
    return strEncritado;
}

/*
Swal.fire({
    title: 'Bienevenido',
    text: 'se encripto correctamente',
    icon: 'info',
    width: '20%',
    timer: 1500,
    timerProgressBar: true
})
/*
Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: 'Your work has been saved',
    showConfirmButton: false,
    timer: 1500
  })*/
