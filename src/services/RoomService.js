import httpCommon from "@/http-common";
import axios from "axios";


class RoomService{

    getAllRoom(){
        return httpCommon.get("/rooms");
    }

    getRoom(id){
        return httpCommon.get(`/rooms/${id}`);
    }


    searchRoom(key){
        return httpCommon.get(`/rooms/search?keyword=${key}`)
    }


    getAllRoomWithPagination(page, size){
        return httpCommon.get(`/rooms/pagination?page=${page}&size=${size}`)
    }


    getPageNumber(size, page){
        return httpCommon.get(`/rooms/pageNumber?size=${size}&page=${page}`);
    }


    addNewRoom(formData){
        return axios.post(`http://localhost:8080/api/rooms`, formData, {
            Headers:{
                "Content-Type": "multipart/form-data"
            },
        });
    }


    updateRoom(formData, id){
        return axios.put(`http://localhost:8080/api/rooms/${id}`, formData,{
            Headers:{
                "Content-Type": "multipart/form-data"
            },
        });
    }



}

export default new RoomService();