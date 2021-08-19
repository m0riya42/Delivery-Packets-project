
import React, { useEffect } from 'react'
import Chat from '../../components/ChatBox/Chat'
import { serverGetUsersData } from '../../axios_requests'

var usersList = []


const ManagerChat = ({ user: currentUser }) => {

    useEffect(() => {
        serverGetUsersData().then((users) => {
            users.forEach(user => {
                if (user.fullName !== currentUser.fullName) {
                    usersList.push(user)
                }
            })
        }).catch(err => {
        })
    })


    const props = { user: currentUser, usersList }
    return <Chat {...props} />
}
export default ManagerChat;