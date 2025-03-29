import {createRouter, createWebHistory} from "vue-router";
import HomePage from "./components/user/HomePage.vue";
import LoginPage from "./components/user/LoginPage.vue";
import SignUp from "./components/user/SignUp.vue";
import RoomsPage from "./components/user/RoomsPage.vue";
import RoomDetail from "./components/user/RoomDetail.vue";
import ConfirmRent from "./components/user/ConfirmRent.vue";
import RentFail from "./components/user/RentFail.vue";
import RentSuccessful from "./components/user/RentSuccessful.vue";
import RentRoomOrder from "./components/user/RentRoomOrder.vue";
import RoomOrder from "./components/user/RoomOrder.vue";
import PaymentSuccess from "./components/user/PaymentSuccess.vue";
import PaymentFail from "./components/user/PaymentFail.vue";
import RoomBill from "./components/user/RoomBill.vue";
import AdminPage from "./components/admin/AdminPage.vue";
import ManageRent from "./components/admin/ManageRent.vue";
import ServiceUses from "./components/admin/ServiceUses.vue";
import AddServiceToRent from "./components/admin/AddServiceToRent.vue";
import OtherServiceUpdate from "./components/admin/OtherServiceUpdate.vue";
import AddElectricWaterToRent from "./components/admin/AddElectricWaterToRent.vue";
import ElectricWaterUpdate from "./components/admin/ElectricWaterUpdate.vue";
import RentRoomsSendMail from "./components/admin/RentRoomsSendMail.vue";
import AboutUsPage from "./components/user/AboutUsPage.vue";
import OrderRoom from "./components/admin/OrderRoom.vue";
import ListOrderRoom from "./components/admin/ListOrderRoom.vue";
import StatisticalPage from "./components/admin/StatisticalPage.vue";
import LoginTimeOut from "./components/user/LoginTimeOut.vue";
import SearchPage from "./components/user/SearchPage.vue";
import RentRoomDetail from "./components/user/RentRoomDetail.vue";
import ContactPage from "./components/user/ContactPage.vue";
import ProfilePage from "./components/user/ProfilePage.vue";
import ConfigPage from "./components/admin/ConfigPage.vue";
import RoomList from "./components/admin/RoomList.vue";
import AddRoom from "./components/admin/AddRoom.vue";
import UpdateRoom from "./components/admin/UpdateRoom.vue";
import MyRoomPage from "./components/user/MyRoomPage.vue";
import ListFloor from "./components/admin/ListFloor.vue";
import ListCategory from "./components/admin/ListCategory.vue";
import ListMotel from "./components/admin/ListMotel.vue";


const routes = [
    {
        name:"HomePage",
        component: HomePage,
        path:'/'
    }
    ,
    {
        name:"SignUp",
        component: SignUp,
        path:'/sign-up'
    },
    {
        name:"LoginPage",
        component: LoginPage,
        path:'/login'
    },
    {
        name:"RoomsPage",
        component: RoomsPage,
        path:'/rooms'
    },
    {
        name:"RoomDetail",
        component: RoomDetail,
        path:'/rooms/:id'
    },
    {
        name:"ConfirmRent",
        component: ConfirmRent,
        path:'/confirm-rent/:id'
    },
    {
        name:"RentFail",
        component: RentFail,
        path:'/rentFail/:id'
    },
    {
        name:"RentSuccessful",
        component: RentSuccessful,
        path:'/rentSuccessful/:id'
    },
    {
        name:"RentRoomOrder",
        component: RentRoomOrder,
        path:'/rentRoomOrder'
    },
    {
        name:"RoomOrder",
        component: RoomOrder,
        path:'/roomOrder'
    },
    {
        name:"PaymentSuccess",
        component: PaymentSuccess,
        path:'/payment-success'
    },
    {
        name:"paymentFail",
        component: PaymentFail,
        path:'/payment-fail'
    },
    {
        name:"RoomBill",
        component: RoomBill,
        path:'/RoomBill/:id'
    },
    {
        name:"AdminPage",
        component: AdminPage,
        path:'/admin'
    },
    {
        name:'ManageRent',
        component: ManageRent,
        path:'/admin/manageRent/:id'
    },
    {
        name:'ServiceUses',
        component: ServiceUses,
        path:'/admin/manageRent/services/:id'
    },
    {
        name:'AddServiceToRent',
        component: AddServiceToRent,
        path:'/admin/addServiceToRent/:id/:idn'
    },
    {
        name:'OtherServiceUpdate',
        component: OtherServiceUpdate,
        path:'/admin/update-otherService/:idn/:id'
    },
    {
        name:'AddElectricWaterToRent',
        component: AddElectricWaterToRent,
        path:'/admin/addElectricWaterToRent/:id/:idn'
    },
    {
        name:'ElectricWaterUpdate',
        component: ElectricWaterUpdate,
        path:'/admin/update-ElectricWater/:idn/:id'
    },
    {
        name:'RentRoomsSendMail',
        component: RentRoomsSendMail,
        path:'/admin/rentRoom-sendMail'
    },
    {
        name:'AboutUsPage',
        component: AboutUsPage,
        path:'/about-us'
    },
    {
        name:'OrderRoom',
        component: OrderRoom,
        path:'/admin/create-order/:id'
    },
    {
        name:'ListOrderRoom',
        component: ListOrderRoom,
        path:'/admin/list-order'
    },
    {
        name:'StatisticalPage',
        component: StatisticalPage, 
        path: '/admin/statistical'
        
    },
    {
        name:'LoginTimeOut',
        component: LoginTimeOut,
        path:'/login-timeout'
    },
    {
        name:'SearchPage',
        component: SearchPage,
        path:'/search'
    },
    {
        name:'RentRoomDetail',
        component: RentRoomDetail,
        path:'/rentRoomOrder/:id'
    },
    {
        name:'ContactPage',
        component: ContactPage,
        path:'/contact'
    },
    {
        name:'ProfilePage',
        component:ProfilePage,
        path:'/profile'
    },
    {
        name:'ConfigPage',
        component:ConfigPage,
        path:'/admin/config'
    },
    {
        name:'RoomList',
        component:RoomList,
        path:'/admin/rooms'
    },
    {
        name:'AddRoom',
        component:AddRoom,
        path:'/admin/rooms/add'
    },
    {   
        name:'UpdateRoom',
        component:UpdateRoom,
        path:'/admin/rooms/update/:id'
    },
    {
        name:'MyRoomPage',
        component:MyRoomPage,
        path:'/myRoom'
    },
    {
        name:'ListFloor',
        component:ListFloor,
        path:'/admin/floors'
    },
    {
        name:'ListCategory',
        component:ListCategory,
        path:'/admin/categories'
    },
    {
        name:'ListMotel',
        component:ListMotel,
        path:'/admin/motels'
    }

];

const router = createRouter(
    {
        history: createWebHistory(),
        routes
    }
);

export default router;