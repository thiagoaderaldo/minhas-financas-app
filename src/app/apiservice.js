import Axios from "axios";

const httpClient = Axios.create({
    baseURL: "http://localhost:8080"
})

class ApiService{
    
    constructor(apiURL){
        this.apiURL = apiURL;
    }

    post(url, objeto){
        return httpClient.post(url, objeto);
    }

    put(url, objeto){
        return httpClient.post(url, objeto);
    }

    delete(url){
        return httpClient.delete(url);
    }

    get(url){
        return httpClient.get(url);
    }
}

export default ApiService;