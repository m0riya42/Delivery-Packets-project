import React, { useState, useEffect } from 'react'
import SenderChat from './SenderChat'
import ReciverChat from './ReciverChat'
import SendButton from './SendButton'
import { onSendMessage, socket } from '../../socket_io'

const ChatWithManager = ({ senderName, senderIcon, reciverIcon, reciverName, msgs, handleNewMsg }) => {


    const [chat, setChat] = useState([]);
    useEffect(() => {
        setChat(msgs)
    }, [msgs])

    useEffect(() => {

        socket.on("private_message", ({ from, to, msg, date, uId }) => {
            handleNewMsg({ from, to, msg, date, uId }) //to make sure only the right messages will be here
            console.log('update', from, to, msg, date, uId)
        })
    })

    const sendText = (senderText) => {
        console.log(senderText)
        //send text to the server
        onSendMessage({ from: senderName, msg: senderText, to: reciverName })


    }

    





    if (!reciverName) return ""

    return <div  class="mesgs" style={{ background: 'url(/assets/images/chat_pattern.png)', backgroundSize: '318px', filter: 'drop-shadow(1px 1px 1px black)' }}>
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