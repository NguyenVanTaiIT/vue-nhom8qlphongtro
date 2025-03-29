import httpCommon from "@/http-common";

class StatisticalService{

    

    get(){
        return httpCommon.get(`/statistical`);
    }

}

export default new StatisticalService();