import './contextMenu.css'
// import { CtxMenu } from './../../assets/ctxmenu/ctxmenu.js'
// import { ContextMenu as ContextMenuReact, MenuItem, ContextMenuTrigger } from "react-contextmenu";
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography';
// const styles = {
//     textAlign: 'center',
//     backgroundColor: '#CCC',
//     padding: 30
// }

// const ID = 'ID'

// const handleClick = (event, data) => {
//     // window.setAnchorPoint({ x: event.pageX, y: event.pageY });
//     console.log(`clicked`, { event, data })
// }

// const attributes = {
//     className: 'custom-root',
//     disabledClassName: 'custom-disabled',
//     dividerClassName: 'custom-divider',
//     selectedClassName: 'custom-selected'
// }


const ContextMenu = ({open, onClose, }) => {

    return (<>
       <Menu {...props}
            // onContextMenu={handleClick}
            onContextMenu={(e) => e.preventDefault()}
            // keepMounted
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
        {/* <ContextMenuTrigger id="add_same_id">
            "click here"
        </ContextMenuTrigger>

        <ContextMenuReact className="menu" id="add_same_id" onShow={handleClick}>
            <MenuItem
                data={{ action: 'copy' }}
                onClick={handleClick}
                attributes={attributes}
            >
                Copy
            </MenuItem>
            <MenuItem
                data={{ action: 'paste' }}
                onClick={handleClick}
                attributes={attributes}
            >
                Paste
            </MenuItem>
            <MenuItem divider />
            <MenuItem
                data={{ action: 'delete' }}
                onClick={handleClick}
                attributes={attributes}
            >
                Delete
            </MenuItem>
        </ContextMenuReact>
    </>) */}
}

export default ContextMenu
