radio.onReceivedNumber(function (receivedNumber) {
    action = receivedNumber
})
function fork_down () {
    wuKong.setServoAngle(wuKong.ServoTypeList._180, wuKong.ServoList.S0, 5)
}
function backward () {
    wuKong.setAllMotor(-20, -20)
}
function fork_up () {
    wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S0, 60)
}
function forward () {
    wuKong.setAllMotor(20, 20)
}
let action = 0
joystickbit.initJoystickBit()
radio.setGroup(17)
basic.showLeds(`
    . . # . .
    . # # # .
    . # . # .
    # # # # #
    # . # . #
    `)
