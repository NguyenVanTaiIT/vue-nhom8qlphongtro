import httpCommon from "@/http-common";

class FloorService{
    getAll(){
        return httpCommon.get(`/floors`);
    }

}

export default new FloorService();