import React, { useEffect } from 'react'
// import ContextMenu from '../../components/Modals/ContextMenu/ContextMenu'
// import '../../components/Modals/ContextMenu/contextMenu.css'
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography';
import FileCopyOutlinedIcon from '@material-ui/icons/FileCopyOutlined';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
const initialState = {
    mouseX: null,
    mouseY: null,
};






const SenderChat = ({ avatarImg, chatText, date, uId }) => {
    const msgDate = new Date(date)

    const [state, setState] = React.useState(initialState);

    const handleClick = (event) => {
        // handleClose()
        event.preventDefault();
        setState({
            mouseX: event.clientX - 2,
            mouseY: event.clientY - 4,
        });
    };

    const handleClose = () => {
        setState(initialState);
    };

    useEffect(() => {

    })
    // const onContextMenuHandler = (e) => {
    //     e.preventDefault();
    //     alert('context menu Sender')
    // }
    return <>
        <div class="outgoing_msg" >
            <div class="sent_msg" onContextMenu={handleClick} style={{ cursor: 'context-menu' }} >
                <p>{chatText}</p>
                <span class="time_date"> {msgDate?.toDateString()}</span>
            </div>

        </div>
        <Menu
            onContextMenu={(e) => e.preventDefault()}
            open={state.mouseY !== null}
            onClose={handleClose}
            anchorReference="anchorPosition"
            anchorPosition={
                state.mouseY !== null && state.mouseX !== null
                    ? { top: state.mouseY, left: state.mouseX }
                    : undefined
            }
        >
            {/* <MenuItem onClick={handleClose} onContextMenu={(e) => e.preventDefault()}>Copy</MenuItem> */}
            <MenuItem onClick={handleClose} >
                <FileCopyOutlinedIcon /><a style={{ left: '5px', position: 'inherit' }}>Copy</a>
            </MenuItem>
            <MenuItem onClick={handleClose}>
                <DeleteOutlineOutlinedIcon /><a style={{ left: '5px', position: 'inherit' }}>Delete</a>
            </MenuItem>
            {/* <MenuItem onClick={handleClose}>Highlight</MenuItem>
            <MenuItem onClick={handleClose}>Email</MenuItem> */}
        </Menu>
    </>
}

export default SenderChat