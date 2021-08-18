import React, { useEffect, useState } from 'react';
import './Chat.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
// import axios from 'axios';
// import socketClient from "socket.io-client";
import ReciverChat from './ReciverChat';
import SenderChat from './SenderChat'
import SendButton from './SendButton';
import { socket, onSendMessage } from '../../../socket_io'


//get messages from the server and than use socket io to communicate
const Chat = ({ handleClose, display, senderName = 'אלכס כהן', senderIcon, reciverIcon, reciverName, msgs = [{ from: "אלכס כהן", message: "יש לי משימה בשבילך", date: new Date(2020, 8, 15) }, { from: reciverName, message: "אוקי", date: new Date(2020, 8, 16) }] }) => {

    const [chat, setChat] = useState(msgs);

    // socket.on('message', ({ name, message, date }) => {
    //     // setChat([...chat, { name, message }])
    //     console.log('update', name, message)
    // })
    useEffect(() => {
        // console.log('now')

        // socket.on('message', ({ name, message, date }) => {
        socket.on("private message", ({ from, message, date, to }) => {
            // if (to===senderName){

            setChat([...chat, { from, message, date }])
            console.log('update', from, message, date, to)
            // }
        })
    })

    const sendText = (senderText) => {
        console.log(senderText)
        // setSenderText(senderText);//, to
        socket.emit("private message", { from: senderName, message: senderText, date: new Date(), to: reciverName });

        // onSendMessage({ from: senderName, message: senderText, to: reciverName })
        //send text to the server
        // socket.emit('message', { name: senderName, message: senderText, date: new Date() })
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
                                chat.map(({ from, message, date }, index) => {
                                    return from === senderName ? <SenderChat avatarImg={senderIcon} chatText={message} date={date} /> : <ReciverChat avatarImg={reciverIcon} reciverName={reciverName} chatText={message} date={date} />
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
