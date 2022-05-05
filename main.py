radio.set_group(69)
radio.set_transmit_power(7)
radio.set_transmit_serial_number(True)
my_serial = control.device_serial_number()

name= "vote"
name= "send"
number= 1
value= 0
list_of_votes= [0,0,0,0]
list_of_microbits = [my_serial]

def client_working():
    if name == "send" and number == 0:
        radio.send_value("send", 1)
        basic.show_number(1)
    else:
        radio.send_value("send", 0)
        basic.show_number(0)
input.on_pin_pressed(TouchPin.P0, client_working)

def received_serial_number(name, value):
    global number, list_of_microbits
    remote_serial = radio.received_packet(RadioPacketProperty.SERIAL_NUMBER)
    if name == "learn" and value == 1:
        if remote_serial not in list_of_microbits:
            list_of_microbits.append(remote_serial)

def voting_A():
    global list_of_votes
    radio.send_value("vote", 1)
    list_of_votes[0] +=1
    basic.show_string("A")
    print(list_of_votes)
input.on_button_pressed(Button.A, voting_A)

def voting_B():
    global list_of_votes
    radio.send_value("vote", 2)
    list_of_votes[1] +=1
    basic.show_string("B")
    print(list_of_votes)
input.on_button_pressed(Button.B, voting_B)

def voting_C():
    global list_of_votes
    radio.send_value("vote", 3)
    list_of_votes[2] +=1
    basic.show_string("C")
    print(list_of_votes)
input.on_logo_event(TouchButtonEvent.PRESSED, voting_C)

def voting_D():
    global list_of_votes
    radio.send_value("vote", 4)
    list_of_votes[3] +=1
    basic.show_string("D")
    print(list_of_votes)
input.on_pin_pressed(TouchPin.P2, voting_D)

def list_voting_append():
    global list_of_votes
    basic.pause(3000)
    if name == "vote" and value == 1:
        pass

list_voting_append()