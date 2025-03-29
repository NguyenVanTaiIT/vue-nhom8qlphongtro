import httpCommon from "@/http-common";

class MotelService{

    

    getAllMotel(){
        return httpCommon.get(`/motels`);
    }

}

export default new MotelService();