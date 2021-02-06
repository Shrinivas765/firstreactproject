import axios from 'axios'
export default axios.create({
    baseURL:"http://localhost:8686/api",header:{
        "Content-type":"application/json"
    }
});