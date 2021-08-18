export const getChatMsgsOfUser = ({ chatMsgs, currentUser }) => {
    return chatMsgs.reduce((newList, msg) => {
        if ((msg.to === currentUser.fullName) || (msg.from === currentUser.fullName)) {
            newList.push(msg)
            console.log(msg)
        }
        return newList
    }, [])
    // return []
}