import httpCommon from "@/http-common";

class ServiceRoomService{

    getAllByRentRoom(id){
        return httpCommon.get(`/electric-waters/rent-room/${id}`);
    }

    create(data){
        return httpCommon.post("/electric-waters",data);
    }

    update(id, data){
        return httpCommon.put(`/electric-waters/${id}`,data);
    }
    
    checkByServiceAndRent(idRent,idService){
        return httpCommon.get(`/electric-waters/check?idRent=${idRent}&id=${idService}`);
    }

    getById(id){
        return httpCommon.get(`/electric-waters/${id}`);
    }
    

}

export default new ServiceRoomService();