import httpCommon from "@/http-common";

class CategoryService{
    getAll(){
        return httpCommon.get(`/categories`);
    }

}

export default new CategoryService();