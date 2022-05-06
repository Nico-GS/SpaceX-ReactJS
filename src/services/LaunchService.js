import axios from "axios";

const URL_GET_LAUNCHES = "https://api.spacexdata.com/v5/launches"

class LaunchService {

    getLaunches(){
        return axios.get(URL_GET_LAUNCHES)
    }
}

export default new LaunchService();