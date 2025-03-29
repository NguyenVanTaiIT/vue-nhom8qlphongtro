import httpCommon from "@/http-common";

class RentRoomService{

    rentRoom(id, data){
        return httpCommon.post(`/rent-rooms/${id}`,data);
    }

    getRentRoom(id){
        return httpCommon.get(`/rent-rooms/${id}`);
    }

    getAllRentRoomByUser(){
        return httpCommon.get("/rent-rooms");
    }

    createVnPayUrl(id){
        return httpCommon.post(`/rent-rooms/create-VNPayUrl/${id}`);
    }

    getAllRentRoom(){
        return httpCommon.get('/rent-rooms/all');
    }

    checkOutRoom(id){
        return httpCommon.post(`/rent-rooms/checkOut/${id}`);
    }


    updateConfirmRent(id, confirm){
        return httpCommon.post(`/rent-rooms/isConfirm/${id}?confirm=${confirm}`);
    }

    unRent(id){
        return httpCommon.post(`/rent-rooms/unRent/${id}`);
    }

    getAllRoomRentedByUser(){
        return httpCommon.get("/rent-rooms/rented");
    }

}

export default new RentRoomService();