import httpCommon from "@/http-common";

class OtherServiceService{

    getAllByRentRoomId(id){
        return httpCommon.get(`/other-services/rent-room/${id}`);
    }

    create(data){
        return httpCommon.post("/other-services",data);
    }
    
    update(id, data){
        return httpCommon.put(`/other-services/${id}`, data);
    }

    checkByidRentAndIdService(idRent, idService){
        return httpCommon.get(`/other-services/check?idRent=${idRent}&idService=${idService}`);
    }


    getById(id){
        return httpCommon.get(`/other-services/${id}`);
    }
    

}

export default new OtherServiceService();