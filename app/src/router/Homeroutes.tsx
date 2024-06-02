import { Home } from "../components/pages/Home ";
import { Setting } from "../components/pages/Setting";
import { UserManagement } from "../components/pages/UserManagement";



export const homeroutes = [

    {
        path:"/",
        children:<Home/>
    },
    {
        path:"/setting",
        children:<Setting/>
    },
    {
        path:"/user_management",
        children:<UserManagement/>
    },


]