const fetch = require('node-fetch');
require('dotenv').config()

const api = "https://www.omdbapi.com/?i=tt3896198&apikey="
const getDataFromApi = async () => {
    try {
        console.log("GGG ")
        const headers = {}
        headers['Accept'] = 'application/json'
        headers['Content-Type'] = 'application/json'
        headers['Access-Control-Allow-Origin'] = '*'
        let url = `${api}${process.env.API_KEY}`
        let res = await fetch(url)
        res = await res.json()
        console.log("🚀 ~ file: RestApi.js ~ line 15 ~ getDataFromApi ~ res", res)
        return res;

    } catch (error) {
        console.log(" getDataFromApi ~ error", error)
        return {}
    }

}
module.exports = {getDataFromApi}
