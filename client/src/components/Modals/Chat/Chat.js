import React, { useEffect, useState } from 'react';
import './Chat.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
// import axios from 'axios';
// import socketClient from "socket.io-client";
import ReciverChat from './ReciverChat';
import SenderChat from './SenderChat'
import SendButton from './SendButton';


var io = require('socket.io-client')
const ENDPOINT = 'http://127.0.0.1:9000'
var socket = io.connect(ENDPOINT);
socket.on('connect', function (socket) {
    console.log('Connected!');
})



//get messages from the server and than use socket io to communicate
const Chat = ({ handleClose, display, senderName = 'אלכס כהן', senderIcon, reciverIcon, reciverName, msgs = [{ name: "אלכס כהן", message: "יש לי משימה בשבילך" }, { name: reciverName, message: "אוקי" }] }) => {

    const [chat, setChat] = useState(msgs);

    socket.on('message', ({ name, message }) => {
        // setChat([...chat, { name, message }])
        console.log('update', name, message)
    })
    useEffect(() => {
        // console.log('now')
        socket.on('message', ({ name, message }) => {
            setChat([...chat, { name, message }])
            console.log('update', name, message)
        })
    })

    const sendText = (senderText) => {
        console.log(senderText)
        // setSenderText(senderText);

        //send text to the server
        socket.emit('message', { name: senderName, message: senderText })
        //update ui?

    }



    let inDisplay;
    display ? inDisplay = 'block' : inDisplay = 'none';
    return (<>
        {/* <div style=
        {{ background: 'red', position: 'relative', bottom: '-108%', height: '37px' }}
        id="chatButton"></div> */}
        <div className="popup-box" style={{ background: "transparent", display: inDisplay, position: 'realetive', height: "auto", top: "38%" }}>
            <div className="col-lg-3" style={{ display: inDisplay, bottom: "-30%" }}>
                <div className="chatStyle chatStylebox box-primary direct-chat direct-chat-primary chatStyle" style={{ background: 'url(/assets/images/chat_pattern.png)', backgroundSize: '318px', filter: 'drop-shadow(1px 1px 1px black)' }} >
                    <div className="box-header with-border" style={{ height: "40px" }}>
                        <div className="box-tools pull-right">

                            <span className="close-icon" onClick={handleClose} style={{ display: "contents", marginLeft: -"35px", marginTop: -"14px", color: 'rgb(87 96 91)' }}>
                                <FontAwesomeIcon icon={faTimes} />
                            </span>
                        </div>
                    </div>
                    <div className="box-body">
                        <div className="direct-chat-messages" style={{ height: "300px" }}>
                            {
                                chat.map(({ name, message }, index) => {
                                    return name === senderName ? <SenderChat avatarImg={senderIcon} chatText={message} /> : <ReciverChat avatarImg={reciverIcon} reciverName={reciverName} chatText={message} />
                                })
                            }


                            {/* <SenderChat avatarImg={senderIcon} />
                            <ReciverChat avatarImg={reciverIcon} reciverName={reciverName} /> */}
                        </div>
                        <SendButton sendText={sendText} />
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}


export default Chat;
