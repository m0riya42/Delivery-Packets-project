import React, { useState } from 'react'
import $ from 'jquery'
import './WorkerChat.css'
import axios from 'axios';

import ManagerBoxName from './ManagerBoxName'
import ChatWithManager from './ChatWithManager'


var users = []
axios.post('http://localhost:9000/usersInfo/getUsers')
    .then(res => {

        let array = res.data
        array.forEach(user => {
            if (user.type === "מנהל") users.push(user)
        })

    })
    .catch(err => {
    })

const WorkerChat = () => {

    const [ManagerSelected, setChoosenManager] = useState({})

    console.log(users)

    return <>
        <h1 style={{ textAlign: 'center', background: 'white' }}>יצירת קשר עם מנהל</h1>
        <div class="messaging">
            <div class="inbox_msg" style={{ display: 'flex', flexDirection: ' row-reverse' }}>
                <div class="inbox_people">
                    <div class="inbox_chat scroll">


                        {/* List of Managers */}

                        {
                            users.map(user => <ManagerBoxName isActive={false} user={user} setChoosenManager={setChoosenManager} />)
                        }

                    </div>
                </div>
                {/* senderName = "טל מרום ישראל", senderIcon, reciverIcon, reciverName, msgs */}
                <ChatWithManager reciverIcon={ManagerSelected.image} reciverName={ManagerSelected.fullName} />
            </div>
        </div>
    </>
}
export default WorkerChat;