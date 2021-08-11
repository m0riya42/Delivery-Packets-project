import React, { useState, useEffect } from 'react'
import SenderChat from './SenderChat'
import ReciverChat from './ReciverChat'
import SendButton from './SendButton'

var io = require('socket.io-client')
const ENDPOINT = 'http://127.0.0.1:9000'
var socket = io.connect(ENDPOINT);
socket.on('connect', function (socket) {
    console.log('Connected!');
})


const ChatWithManager = ({ senderName = "טל מרום ישראל", senderIcon, reciverIcon, reciverName, msgs = [{ name: "אלכס כהן", message: "יש לי משימה בשבילך", date: new Date(2020, 8, 15) }, { name: "טל מרום ישראל", message: "אוקי", date: new Date(2020, 8, 16) }] }) => {



    const [chat, setChat] = useState(msgs);


    useEffect(() => {
        socket.on('message', ({ name, message, date }) => {
            setChat([...chat, { name, message, date }])
            console.log('update', name, message, date)
        })
    })

    const sendText = (senderText) => {
        console.log(senderText)
        // setSenderText(senderText);

        //send text to the server
        socket.emit('message', { name: senderName, message: senderText, date: new Date() })
        //update ui?

    }





    if (!reciverName) return ""

    return <div class="mesgs" style={{ background: 'url(/assets/images/chat_pattern.png)', backgroundSize: '318px', filter: 'drop-shadow(1px 1px 1px black)' }}>
        <div class="msg_history" >
            {/* msgs.map */}
            {
                chat.map(({ name, message, date }, index) => {
                    return name === senderName ? <SenderChat avatarImg={senderIcon} chatText={message} date={date} /> : <ReciverChat avatarImg={reciverIcon} reciverName={reciverName} chatText={message} date={date} />
                })
            }
        </div>
        <SendButton sendText={sendText} />
    </div>


}


export default ChatWithManager