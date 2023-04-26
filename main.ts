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
basic.forever(function () {
    if (joystickbit.getRockerValue(joystickbit.rockerType.Y) > 800) {
        radio.sendNumber(1)
    } else if (joystickbit.getRockerValue(joystickbit.rockerType.Y) < 200) {
        radio.sendNumber(2)
    } else if (joystickbit.getButton(joystickbit.JoystickBitPin.P13)) {
        radio.sendNumber(6)
    } else if (joystickbit.getButton(joystickbit.JoystickBitPin.P14)) {
        radio.sendNumber(7)
    }
})
basic.forever(function () {
    if (action == 1) {
        forward()
    }
    if (action == 2) {
        backward()
    }
    if (action == 6) {
        fork_up()
    }
    if (action == 7) {
        fork_down()
    }
    if (action == 0) {
        wuKong.stopAllMotor()
    }
})
