const btnQr = document.querySelector("#btnGerarQrCode");
const inputQr = document.querySelector("#inputQrCode");
const qrCodeImg = document.querySelector("#qr-code img");
const container = document.querySelector(".container")

const gerarQrCode = () => {
  const inputQrValue = inputQr.value
  if (!inputQrValue) return;
  btnQr.innerText = "Gerando QR-Code ..."
  qrCodeImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${inputQrValue}`
  container.classList.add("active")
  btnQr.innerText = "QR-Code gerado"
}

const limparDados = () => {

}
btnQr.addEventListener("click", () => {
  gerarQrCode()
})

inputQr.addEventListener("keydown", (e) => {
  if(e.code === "Enter") {
    gerarQrCode()
  }
})

inputQr.addEventListener("keyup", () => {
  if(!inputQr.value) {
    container.classList.remove("active")
    btnQr.innerText = "Gerar QR Code"
  }
})