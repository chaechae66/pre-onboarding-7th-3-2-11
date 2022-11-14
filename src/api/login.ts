import axios from "axios"
import { UserInfo } from "../types"

export const loginAPI = async (_userInfo :UserInfo) => {
    const token = await axios.post("/login",_userInfo,{
        withCredentials: true
    })
    return token.data.accessToken
}