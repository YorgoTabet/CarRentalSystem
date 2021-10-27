import axios from "axios";

const instance = axios.create({
    baseURL: "https://rental-project-96fe5-default-rtdb.europe-west1.firebasedatabase.app/"
})

export default instance