import axios from "axios" 

 const todourl = axios.create({
    baseURL : "https://jsonplaceholder.typicode.com"
})

export default todourl