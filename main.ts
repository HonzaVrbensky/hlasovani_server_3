radio.setGroup(69)
radio.setTransmitPower(7)
radio.setTransmitSerialNumber(true)
let my_serial = control.deviceSerialNumber()
let name = "vote"
name = "send"
let number = 1
let value = 0
let list_of_votes = [0, 0, 0, 0]
let list_of_microbits = [my_serial]
input.onPinPressed(TouchPin.P0, function client_working() {
    if (name == "send" && number == 0) {
        radio.sendValue("send", 1)
        basic.showNumber(1)
    } else {
        radio.sendValue("send", 0)
        basic.showNumber(0)
    }
    
})
function received_serial_number(name: any, value: any) {
    
    let remote_serial = radio.receivedPacket(RadioPacketProperty.SerialNumber)
    if (name == "learn" && value == 1) {
        if (list_of_microbits.indexOf(remote_serial) < 0) {
            list_of_microbits.push(remote_serial)
        }
        
    }
    
}

input.onButtonPressed(Button.A, function voting_A() {
    
    radio.sendValue("vote", 1)
    list_of_votes[0] += 1
    basic.showString("A")
    console.log(list_of_votes)
})
input.onButtonPressed(Button.B, function voting_B() {
    
    radio.sendValue("vote", 2)
    list_of_votes[1] += 1
    basic.showString("B")
    console.log(list_of_votes)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function voting_C() {
    
    radio.sendValue("vote", 3)
    list_of_votes[2] += 1
    basic.showString("C")
    console.log(list_of_votes)
})
input.onPinPressed(TouchPin.P2, function voting_D() {
    
    radio.sendValue("vote", 4)
    list_of_votes[3] += 1
    basic.showString("D")
    console.log(list_of_votes)
})
function list_voting_append() {
    
    basic.pause(3000)
    if (name == "vote" && value == 1) {
        
    }
    
}

list_voting_append()
