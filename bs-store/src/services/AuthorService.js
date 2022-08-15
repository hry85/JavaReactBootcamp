import axios from "axios";
import { authHeader } from "./AuthHeader";

class AuthorService {
  constructor() {
    this.baseUrl = `${process.env.REACT_APP_BASE_ENDPOINT}/authors`;
  }

  async getAllAuthors() {
    return await axios
      .get(this.baseUrl)
      .then((resp) => resp.data)
      .catch((err) => console.log(err));
  }

  async getOneAuthor(id) {
    const url = `${this.baseUrl}/${id}`;
    return await axios
      .get(url)
      .then((resp) => resp.data)
      .catch((err) => console.log(err));
  }

  async postOneAuthor(payload) {
    return await axios
      .post(this.baseUrl, payload,authHeader)
      .then((resp) => resp.data)
      .catch((err) => console.log(err));
  }

  async putOneAuthor(id, author) {
    return await axios
      .put(id, author,authHeader)
      .then((resp) => resp.data)
      .catch((err) => console.log(err));
  }

  async deleteOneAuthor(id) {
    return await axios
      .delete(id,authHeader)
      .then((resp) => resp)
      .catch((err) => console.log(err));
  }
}

export default AuthorService;
