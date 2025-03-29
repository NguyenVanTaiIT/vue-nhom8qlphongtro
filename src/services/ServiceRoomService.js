import httpCommon from "@/http-common";

class ServiceRoomService{

    getAllService(){
        return httpCommon.get("/serviceRooms");
    }

    getOnlyElectricWater(){
        return httpCommon.get("/serviceRooms/electricWaters");
    }
    
    getWithOutElectricWater(){
        return httpCommon.get("/serviceRooms/withOut-electricWater");
    }

    getById(id){
        return httpCommon.get(`/serviceRooms/${id}`);
    }
    

}

export default new ServiceRoomService();