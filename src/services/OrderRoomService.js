import httpCommon from "@/http-common";

class OrderRoomService{

    getAllOrderRoomByUser(){
        return httpCommon.get("/order-rooms/user-orderRooms");
    }

    getOrderRoomById(id){
        return httpCommon.get(`/order-rooms/${id}`);
    }

    createVnPayUrl(id){
        return httpCommon.post(`/order-rooms/create-VNPayUrl/${id}`);
    }

    getAll(){
        return httpCommon.get(`/order-rooms`);
    }

    createOrder(data){
        return httpCommon.post(`/order-rooms`,data);
    }


}

export default new OrderRoomService();