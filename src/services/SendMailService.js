import httpCommon from "@/http-common";

class SendMailService{

    SendMail(idOrder){
        return httpCommon.post(`/sendMail/orderRoom/${idOrder}`);
    }

    

}

export default new SendMailService();