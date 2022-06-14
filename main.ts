input.onButtonPressed(Button.A, function () {
    Luz_inicial = input.lightLevel()
})
function Muda_Imagem (imagemOn: boolean) {
    if (coração_está_ligado) {
        basic.showIcon(IconNames.Heart)
    } else {
        basic.clearScreen()
    }
}
let Luz_agora = 0
let coração_está_ligado = false
let Luz_inicial = 0
Luz_inicial = input.lightLevel()
coração_está_ligado = false
basic.forever(function () {
    Luz_agora = input.lightLevel()
    if (Luz_agora < Luz_inicial / 3) {
        coração_está_ligado = !(coração_está_ligado)
        Muda_Imagem(coração_está_ligado)
        basic.pause(500)
    }
})
