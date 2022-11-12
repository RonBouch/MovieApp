import axios, { AxiosResponse } from "axios";

export const Api = async (urlType: string, token: string) => {
    try {
        const { data }: AxiosResponse = await axios.post(`http://localhost:5000/${urlType}`, { token })
        return data;
    } catch (err) {
        console.error(err)
        return 'Auth failed';
    }
}