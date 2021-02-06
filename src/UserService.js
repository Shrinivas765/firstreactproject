import http from './http-call'

const saveUser = (userData) => {

    // console.log(userData)
    
    return http.post("/savedata",userData)
}

export default {
   saveUser
}