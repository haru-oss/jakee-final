import { Home } from "../components/pages/Home ";
import { Setting } from "../components/pages/Setting";
import { UserManagement } from "../components/pages/UserManagement";
import { Page404 } from "../components/pages/Page404";



export const homeroutes = [
    {
        path:"",
        children:<Home/>
    },

    {
        path:"setting",
        children:<Setting/>
    },
    {
        path:"user_management",
        children:<UserManagement/>
    },
    {
        path:"*",
        children:<Page404/>
    },


]