import React, { useState } from 'react'
import Users from './Users';
import EditUser from '../../components/Modals/EditUser';
// import Chart from './managerPages/Chart';
import Chat from '../../components/Modals/Chat';
import NavBar from '../../components/Layout/NavBar';
import Preloder from '../../components/Layout/Preloader';
// import '../../App.css';


const UsersInfo = ({ pages }) => {

    const [editUserIsOpen, setEditUserIsOpen] = useState(false);
    const [chatIsOpen, setChatIsOpen] = useState(false);
    const [userToEdit, setUserToEdit] = useState({});
    const users = [{id:'123456789', fullName: 'אוריה כהן', userName: 'oriaCh', password: '11212', phone: '050-467-3212', email: 'none@gmail.com', address:'ירושלים 453' }, { fullName: 'ליאור אדרי', phone: '050-654-3212', email: 'lior@gmail.com' }, { fullName: 'מאיה כהן', phone: '050-467-3212', email: 'none@gmail.com' }, { fullName: 'אוריה כהן', phone: '050-467-3212', email: 'none@gmail.com' }, { fullName: 'אוריה כהן', phone: '050-467-3212', email: 'none@gmail.com' }]




    const handlers = {
        //close an open
        closeHandle: () => {
            setEditUserIsOpen(!editUserIsOpen);
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
        // chatToUser: () => {
        //   console.log('chat To User');
        // },
        newUser: () => {
            console.log('new User');

        }

    }

    return (
        <>
            <EditUser handleClose={handlers.closeHandle} display={editUserIsOpen} user={userToEdit} handleSave={handlers.saveUser} />
            <Users users={users} handlers={handlers} />
            <Chat handleClose={handlers.openChat} display={chatIsOpen} />
        </>


    )

}

export default UsersInfo