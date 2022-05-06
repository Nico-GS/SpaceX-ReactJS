import axios from "axios";

const URL_GET_CAPSULES = "https://api.spacexdata.com/v4/capsules"

class CapsulesService {

    getCapsules(){
        return axios.get(URL_GET_CAPSULES)
    }

    getCapsulesById(id){
        return axios.get(URL_GET_CAPSULES + '/' + id)
    }
}

export default new CapsulesService();