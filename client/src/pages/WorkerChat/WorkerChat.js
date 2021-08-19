import React, { useState, useEffect } from 'react'
import $ from 'jquery'
import './WorkerChat.css'
import { serverGetUsersData, serverGetUserChatMsgs } from '../../axios_requests'
import { getChatMsgsOfUser } from '../../utils'
import ManagerBoxName from './ManagerBoxName'
import ChatWithManager from './ChatWithManager'


var usersList = []
serverGetUsersData().then((users) => {
    users.forEach(user => {
        if (user.type === "מנהל") {
            usersList.push(user)
        }
    })
}).catch(err => {
})

const WorkerChat = ({ user }) => {
    const [chatMsgs, setChatMsgs] = useState([])
    const [ManagerSelected, setChoosenManager] = useState({})
    const [specificChatMsgs, setSpecificChatMsgs] = useState([])


    useEffect(() => {
        serverGetUserChatMsgs({ userName: window.name }).then((data) => {
            setChatMsgs(data)
            console.log(data)
        })
    }, [])

    const updatChatUserList = (user) => {
        const currentUser = user ? user : ManagerSelected
        setSpecificChatMsgs(
            getChatMsgsOfUser({ chatMsgs, currentUser }))

    }

    useEffect(() => {
        updatChatUserList()
        console.log('updated list: ', specificChatMsgs)
    }, [chatMsgs])


    const handlers = {
        handleNewMsg: (msg) => {
            setChatMsgs([...chatMsgs, msg])

        },
        handleClickOnUser: (user) => {
            setChoosenManager(user)
            updatChatUserList(user)
        }
    }
    console.log(usersList)

    return <>
        <h1 style={{ textAlign: 'center', background: 'white' }}>יצירת קשר עם מנהל</h1>
        <div class="messaging">
            <div class="inbox_msg" style={{ display: 'flex', flexDirection: ' row-reverse' }}>
                <div class="inbox_people">
                    <div class="inbox_chat scroll">


                        {/* List of Managers */}

                        {
                            usersList.map(user => <ManagerBoxName isActive={false} user={user} setChoosenManager={handlers.handleClickOnUser} />)
                        }

                    </div>
                </div>
                <ChatWithManager senderName={user.fullName} reciverIcon={ManagerSelected.image} reciverName={ManagerSelected.fullName} senderIcon={user.image} msgs={specificChatMsgs} handleNewMsg={handlers.handleNewMsg} />
            </div>
        </div>
    </>
}
export default WorkerChat;