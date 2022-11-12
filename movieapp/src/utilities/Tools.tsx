import { sign } from "react-native-pure-jwt"
import Config from 'react-native-config'
import { UserTypes } from "../stores/types"


export const getJwt = async (data: UserTypes) => {
    return await sign(data, Config.JWT_KEY as string, { alg: "HS256" })
}
