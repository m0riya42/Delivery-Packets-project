import axios from 'axios';



/********************************************** */
/*               USER REQUESTS                  */
/********************************************** */

export const serverLogIn = (data) => {
    return axios.post('http://localhost:9000/usersInfo/login', data)
}

export const serverGetUserChatMsgs = ({ userName, handler }) => {
    return axios.post('http://localhost:9000/chatMsg/getUserMsg', { userName }).then(res => res.data)
}

export const serverGetUserByNameData = ({ name }) => {
    return axios.post('http://localhost:9000/usersInfo/getUserByName', { name }).then(res => res.data)
}
export const serverGetUsersData = () => {
    return axios.post('http://localhost:9000/usersInfo/getUsers').then(res => res.data)
}

export const serverUpdateUserData = (userData) => {
    return axios.post('http://localhost:9000/usersInfo/updateUser', userData).then(res => res.data)

}

export const serverCreateNewUser = (newUser) => {
    return axios.post('http://localhost:9000/usersInfo/addUser', newUser)

}

/********************************************** */
/*            PACKAGES REQUESTS                 */
/********************************************** */

export const serverUpdatePackage = (updatedPackage) => {
    return axios.post('http://localhost:9000/packages/updatePackage', updatedPackage).then(res => res.data)
}


export const serverGetPackages = () => {
    return axios.post('http://localhost:9000/packages/getPackages').then(res => res.data)
}


/********************************************** */
/*            SCHEDULE REQUESTS                 */
/********************************************** */


export const serverSetScheduleDistribution = (info) => {
    return axios.post('http://localhost:9000/workSchedule/setDistribution', info)
}


export const serverAddSchedule = (info) => {
    return axios.post('http://localhost:9000/workSchedule/addSchedule', info)
}

export const serverGetWorkSchedule = (info) => {
    return axios.post('http://localhost:9000/workSchedule/getSchedule', info).then(res => res.data)
}


/********************************************** */
/*                BLOG REQUESTS                 */
/********************************************** */


export const serverGetBlogData = () => {
    return axios.post('http://localhost:9000/blog').then(res => res.data)
}

export const serverCreateRightPost = (body) => {
    return axios.post('http://localhost:9000/blog/createRightPost', body)
}


/********************************************** */
/*               OTHER REQUESTS                 */
/********************************************** */


export const serverLocationIqRequest = (location) => {
    let url = 'https://us1.locationiq.com/v1/search.php?key=pk.1b51763a32aec03e04936d4c92da7191&q=' + location + '&format=json'
    console.log(url);
    return axios.post(url).then(res => res.data)
}