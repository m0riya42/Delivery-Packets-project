import React, { useState } from 'react'
import Users from '../../components/Accessories/Users';
import EditUser from '../../components/Modals/EditUser';
import SaveUser from '../../components/Modals/SaveUser';
import Chat from '../../components/Modals/Chat/Chat';
import axios from 'axios';

var users = []
axios.post('http://localhost:9000/usersInfo/getUsers')
    .then(res => {
        users = res.data;
    })
    .catch(err => {
    })


const UsersInfo = () => {

    const [editUserIsOpen, setEditUserIsOpen] = useState(false);
    const [chatIsOpen, setChatIsOpen] = useState(false);
    const [userToEdit, setUserToEdit] = useState({});
    const [saveUserIsOpen, setSaveUserIsOpen] = useState(false);

    //const users = [{id:'123456789', fullName: 'אוריה כהן', userName: 'oriaCh', password: '11212', phone: '050-467-3212', email: 'none@gmail.com', address:'ירושלים 453' }, { fullName: 'ליאור אדרי', phone: '050-654-3212', email: 'lior@gmail.com' }, { fullName: 'מאיה כהן', phone: '050-467-3212', email: 'none@gmail.com' }, { fullName: 'אוריה כהן', phone: '050-467-3212', email: 'none@gmail.com' }, { fullName: 'אוריה כהן', phone: '050-467-3212', email: 'none@gmail.com' }]



    const handlers = {
        //close an open
        closeHandle: () => {
            setEditUserIsOpen(!editUserIsOpen);
        },
        closeHandleSave: () => {
            setSaveUserIsOpen(!saveUserIsOpen);
        },
        openChat: (user) => {

            //maybe to delete:
            handlers.updateUserToEdit(user);

            //
            setChatIsOpen(true)
        },
        closeChat: () => {

            setChatIsOpen(false)
        },
        updateUserToEdit: (user) => {
            setUserToEdit(user)
        },
        saveUser: (user) => {

            handlers.updateUserToEdit(user);
            //Send user information to the server to save it -DB
            users[0] = user


            //clse window
            handlers.closeHandle()
            //change user information on view--> refresh page
            // window.location.reload(true);
        },
        editUser: (user) => {
            //Open the Window:
            handlers.closeHandle();
            //Show User Information
            handlers.updateUserToEdit(user);

        },

        newUser: () => {
            //Open the Window:
            handlers.closeHandleSave();
            //Show User Information
            //handlers.updateUserToEdit();

        }

    }
    console.log(userToEdit)
    return (
        <>
            <EditUser handleClose={handlers.closeHandle} display={editUserIsOpen} user={userToEdit} handleSave={handlers.saveUser} />
            <Users users={users} handlers={handlers} />
            <Chat handleClose={handlers.closeChat} display={chatIsOpen} reciverName={userToEdit.fullName} reciverIcon={userToEdit.image} />
            <SaveUser handleClose={handlers.closeHandleSave} display={saveUserIsOpen} handleSave={handlers.saveUser} />

        </>


    )

}

export default UsersInfo