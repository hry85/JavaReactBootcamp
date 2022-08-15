import axios from "axios";
import {authHeader} from "./AuthHeader";

class BookService{
    constructor(){
        this.baseUrl = `${process.env.REACT_APP_BASE_ENDPOINT}/books`;
    }

    async getAllBooks(){
        return await axios.get(this.baseUrl).then(resp => resp.data);
    }

    async getOneBook(id){
        const url = `${this.baseUrl}/${id}`;
        return await axios.get(url).then(resp => resp.data);
    }

    async postOneBook(payload ){
        return await axios.post(this.baseUrl,payload,authHeader).then(resp => resp.data);
    }

    async putOneBook(id,payload){
        const url = `${this.baseUrl}/${id}`;
        return await axios.put(url,payload,authHeader).then(resp => resp.data);
    }

    async deleteOneBook(id){
        const url = `${this.baseUrl}/${id}`;
        await axios.delete(url,authHeader).then(resp => resp);
    }
}

export default BookService;