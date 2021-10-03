import axios from "axios";

export default axios.create( {
    baseURL: "https://api.unsplash.com",
    headers: {
        Authorization: "Client-ID KoMB6JrBiAxWXIAXXPtDKUpWGQpSMQNK_dMKjY1uc0A"
    }
} )