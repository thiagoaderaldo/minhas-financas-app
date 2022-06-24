import Axios from "axios";

const httpClient = Axios.create({
    baseURL: "http://localhost:8080"
})

class ApiService{
    
    constructor(apiURL){
        this.apiURL = apiURL;
    }

    post(url, objeto){
        const requestUrl = `${this.apiURL}${url}`
        return httpClient.post(requestUrl, objeto);
    }

    put(url, objeto){
        const requestUrl = `${this.apiURL}${url}`
        return httpClient.post(requestUrl, objeto);
    }

    delete(url){
        const requestUrl = `${this.apiURL}${url}`
        return httpClient.delete(requestUrl);
    }

    get(url){
        const requestUrl = `${this.apiURL}${url}`
        return httpClient.get(requestUrl);
    }
}

export default ApiService;