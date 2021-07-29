import React, { useState } from 'react'
import Users from '../../components/Accessories/Users';
import EditUser from '../../components/Modals/EditUser';
import SaveUser from '../../components/Modals/SaveUser';
import Chat from '../../components/Modals/Chat';
import axios from 'axios';

var users = []
axios.post('http://localhost:9000/usersInfo/getUsers')
    .then(res => {
        //console.log(res.data);
        users = res.data;
        //console.log(users);
    })
    .catch(err => {
        console.log(err);
    })


const UsersInfo = ({ pages }) => {

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
        openChat: () => {
            console.log('chat To User');

            setChatIsOpen(!chatIsOpen)
        },
        updateUserToEdit: (user) => {
            setUserToEdit(user)
        },
        saveUser: (user) => {

            handlers.updateUserToEdit(user);
            //Send user information to the server to save it -DB
            users[0] = user
            console.log(users)


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

    return (
        <>
            <EditUser handleClose={handlers.closeHandle} display={editUserIsOpen} user={userToEdit} handleSave={handlers.saveUser} />
            <Users users={users} handlers={handlers} />
            <Chat handleClose={handlers.openChat} display={chatIsOpen} />
            <SaveUser handleClose={handlers.closeHandleSave} display={saveUserIsOpen} handleSave={handlers.saveUser} />

        </>


    )

}

export default UsersInfo