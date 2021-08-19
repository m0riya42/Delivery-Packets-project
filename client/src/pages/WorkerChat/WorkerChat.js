import React, { useState, useEffect } from 'react'
import $ from 'jquery'
import './WorkerChat.css'
import { serverGetUsersData, serverGetUserChatMsgs } from '../../axios_requests'
import { getChatMsgsOfUser } from '../../utils'
import ManagerBoxName from './ManagerBoxName'
import ChatWithManager from './ChatWithManager'
import { serverDeleteMsg } from '../../axios_requests'
import { serverDeleteChatAlert, socket } from '../../socket_io'



var usersList = []
serverGetUsersData().then((users) => {
    users.forEach(user => {
        if (user.type === "מנהל") {
            usersList.push(user)
        }
    })
}).catch(err => {
})

const WorkerChat = ({ user: connectedUser }) => {
    const [chatMsgs, setChatMsgs] = useState([])
    const [managerSelected, setChoosenManager] = useState({})
    const [specificChatMsgs, setSpecificChatMsgs] = useState([])
    // const [activeUser, setActiveUser]= useState({})

    const requestForMsgs = () => {
        serverGetUserChatMsgs({ userName: window.name }).then((data) => {
            setChatMsgs(data)
            console.log(data)
        })

    }

    useEffect(() => {
        socket.on("delete_msg", () => {
            //ask for msgs again
            requestForMsgs()
        })
    })
    useEffect(() => {
        requestForMsgs()
        // serverGetUserChatMsgs({ userName: window.name }).then((data) => {
        //     setChatMsgs(data)
        //     console.log(data)
        // })
    }, [])

    const updatChatUserList = (user) => {
        const currentUser = user ? user : managerSelected
        console.log('in setSpecificChatMsgs')
        setSpecificChatMsgs(
            getChatMsgsOfUser({ chatMsgs, currentUser, connectedUser }))

    }

    useEffect(() => {
        console.log('in update right list')
        updatChatUserList()
        // console.log('updated list: ', specificChatMsgs)
    }, [chatMsgs])


    const handlers = {
        handleNewMsg: (msg) => {
            console.log(msg)
            setChatMsgs([...chatMsgs, msg])

        },
        handleClickOnUser: (user) => {
            setChoosenManager(user)
            updatChatUserList(user)
        },
        handleDeleteMsg: (uId) => {
            serverDeleteMsg({ userName: window.name, uId, }).then((msgs) => {
                console.log(msgs)
                setChatMsgs(msgs)
            })
            serverDeleteChatAlert();
        }
    }
    // console.log(usersList)

    return <>
        {/* <h1 style={{ textAlign: 'center', background: 'white' }}>יצירת קשר עם מנהל</h1> */}
        <div class="messaging" onContextMenu={(e) => e.preventDefault()}>
            <div class="inbox_msg" style={{ display: 'flex', flexDirection: ' row-reverse' }}>
                <div class="inbox_people">
                    <div class="inbox_chat scroll">
                        {/* List of Managers */}

                        {
                            usersList.map(user => <ManagerBoxName isActive={false} user={user} setChoosenManager={handlers.handleClickOnUser} managerSelected={managerSelected} />)
                        }

                    </div>
                </div>
                <ChatWithManager handleDeleteMsg={handlers.handleDeleteMsg} senderIcon={connectedUser.image} senderName={connectedUser.fullName} reciverIcon={managerSelected.image} reciverName={managerSelected.fullName} msgs={specificChatMsgs} handleNewMsg={handlers.handleNewMsg} />
            </div>
        </div>
    </>
}
export default WorkerChat;