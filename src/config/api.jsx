import axios from "axios"



 export const API_BASE_URL="http://localhost:8080"
// export const API_BASE_URL="https://chirper-x-backend-production-a429.up.railway.app"  //MAIN-URL


export const api= axios.create({
    baseURL:API_BASE_URL,
    headers:{
        "Authorization":`Bearer ${localStorage.getItem("jwt")}`,
        "Content-Type":"application/json"
    }
})