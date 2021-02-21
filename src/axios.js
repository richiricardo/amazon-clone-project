import axios from "axios";

const instance = axios.create({
    baseURL: 'https://us-central1-clone-project-4638e.cloudfunctions.net/api'
    //'http://localhost:5001/clone-project-4638e/us-central1/api' 
});

export default instance;

