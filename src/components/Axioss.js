import axios from "axios";
const API=`https://wrk.acronex.com/api/challenge/machines/`;

export function get(path){
     
   return axios({
        method: "get",
        url: API + path
    })
}