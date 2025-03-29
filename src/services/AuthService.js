import httpCommon from "@/http-common";

class AuthService{


    create(data){
        return httpCommon.post("/auth/addNewUser",data);
    }

    login(data){
        return httpCommon.post("/auth/generateToken", data);
    }

    getUserLogin(){
        return httpCommon.get("/auth/getUsernameLogin");
    }

    getUserInformation(){
        return httpCommon.get("/auth/user/userProfile");
    }

    getRole(token){
        return httpCommon.get("/auth/getRole",{
            headers:{
                Authorization: `Bearer ${token}`
            }
        });
    }

    refreshToken(token){
        return httpCommon.post("/auth/refreshToken", token);
    }


    logout(token){
        return httpCommon.post("/auth/logout", token);
    }


    getUserProfile(){
        return httpCommon.get("/auth/user/userProfile");
    }

    editUserProfile(user){
        return httpCommon.put("/auth/edit-profile", user);
    }

}

export default new AuthService();