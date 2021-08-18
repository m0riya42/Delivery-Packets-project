import React, { useState, useEffect } from 'react'
import SenderChat from './SenderChat'
import ReciverChat from './ReciverChat'
import SendButton from './SendButton'
import { onSendMessage, socket } from '../../socket_io'

// var io = require('socket.io-client')
// const ENDPOINT = 'http://127.0.0.1:9000'
// var socket = io.connect(ENDPOINT);
// socket.on('connect', function (socket) {
//     console.log('Connected!');
// })


const ChatWithManager = ({ senderName, senderIcon, reciverIcon, reciverName, msgs, handleNewMsg }) => {


    const [chat, setChat] = useState([]);
    useEffect(() => {
        setChat(msgs)
    }, [msgs])
    // const [chat, setChat] = useState(msgs);


    // useEffect(() => {
    //     socket.on("private message", ({ from, message, date, to }) => {
    //         // if (to===senderName){

    //         console.log([...chat, { from, message, date }])
    //         setChat([...chat, { from, message, date }])
    //         console.log('update', from, message, date, to)
    //         // }
    //     })
    //     // socket.on('message', ({ name, message, date }) => {
    //     //     setChat([...chat, { name, message, date }])
    //     //     console.log('update', name, message, date)
    //     // })
    // })

    useEffect(() => {
        socket.on("private message", ({ from, to, msg, date, uId }) => {
            // setChatMsgs()
            // setChat([...chat, { from, to, msg, date, uId }])
            handleNewMsg({ from, to, msg, date, uId }) //to make sure only the right messages will be here
            // setChatMsgs([...chatMsgs, { from, to, msg, date, uId }])
            console.log('update', from, to, msg, date, uId)
        })
    })

    const sendText = (senderText) => {
        console.log(senderText)
        //send text to the server
        onSendMessage({ from: senderName, msg: senderText, to: reciverName })


    }





    if (!reciverName) return ""

    return <div class="mesgs" style={{ background: 'url(/assets/images/chat_pattern.png)', backgroundSize: '318px', filter: 'drop-shadow(1px 1px 1px black)' }}>
        <div class="msg_history" >
            {/* msgs.map */}
            {
                chat?.map(({ from, to, msg, date, uId }, index) => {
                    return from !== reciverName ? <SenderChat avatarImg={senderIcon} chatText={msg} date={date} /> : <ReciverChat avatarImg={reciverIcon} reciverName={reciverName} chatText={msg} date={date} />
                })
            }
        </div>
        <SendButton sendText={sendText} />
    </div>


}


export default ChatWithManager