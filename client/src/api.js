import axios from "axios";
const url = "/api/post";


export default class API{

    static async getAllEvents(){
        const res=await axios.get(url);
        return res.data;
    }
    static async getEventById(id){
        const res=await axios.get(`${url}/${id}`);
        return res.data;
    }


    static async createEvent(event){
        const res=await axios.post(url,event);
        return res.data;
    }

    static async updateateEvent(id,event){
        const res=await axios.patch(`${url}/${id}`,event);
        return res.data;
    }

    static async deleteEvent(id){
        const res=await axios.delete(`${url}/${id}`);
        return res.data;
    }
}

