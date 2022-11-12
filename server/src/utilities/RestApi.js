const fetch = (...args) =>
    import('node-fetch').then(({default: fetch}) => fetch(...args));
require('dotenv').config()

const getDataFromApi = async () => {
    const api = `https://omdbapi.com/?apikey=${process.env.API_KEY}&s=kill`
    try {
        const headers = {}
        headers['Accept'] = 'application/json'
        headers['Content-Type'] = 'application/json'
        headers['Access-Control-Allow-Origin'] = '*'
        let url = api
        let res = await fetch(url)
        res = await res.json()
        return res;

    } catch (error) {
        console.log(" getDataFromApi ~ error", error)
        return {}
    }

}
module.exports = {getDataFromApi}
