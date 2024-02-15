import {createBrowserRouter, Navigate} from "react-router-dom";

import {MainLayout} from "./layouts/MainLayout";
import {UserPage} from "./pages/UserPage";
import {userService} from "./services/userService";
import {UserDetailsPage} from "./pages/UserDetailsPage";

const router = createBrowserRouter([
    {
        path:'', element: <MainLayout/>, children:[
            {
                index:true, element: <Navigate to={'users'}/>
            },
            {
                path: 'users', element: <UserPage/>, loader: () => userService.getAll(), children: [
                    {
                        path: ':id', element: <UserDetailsPage/>, loader:({params:{id}})=>userService.getById(id)
                    },
                ]
            }
        ]
    }
])

export {
    router
}