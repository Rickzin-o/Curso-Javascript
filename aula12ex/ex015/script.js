const msg = document.querySelector("#msg")
const imagem = document.querySelector("#imagem")

var dataDeHoje = new Date()
var horas = dataDeHoje.getHours()

msg.innerHTML = `Agora são ${horas} horas!`

if (horas >= 0 && horas < 12) {
    // BOM DIA
    document.body.style.background = "#e2cd9f"
} else if (horas >= 12 && horas < 18) {
    // BOA TARDE
    document.body.style.background = "#b9846f"
} else {
    //BOA NOITE
    document.body.style.background = "#515154"
}

