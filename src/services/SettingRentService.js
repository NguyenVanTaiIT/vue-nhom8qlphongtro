import httpCommon from "@/http-common";

class SettingRentService{

    get(){
        return httpCommon.get('/settingRent');
    }

    updateStatus(data){
        return httpCommon.put('/settingRent',data);
    }


}

export default new SettingRentService();