import http from '../newfrontend/http1-call'
const saveUser=(userData)=>{
  console.log(userData)
        
       return http.post("/savadata",userData)
    }
export default{
    saveUser
}