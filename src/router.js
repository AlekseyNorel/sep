import {createBrowserRouter} from "react-router-dom";

import {TodosPage} from "./pages/TodosPage";
import {MainLayout} from "./layouts/MainLayout";
import {CommentsPage} from "./pages/CommentsPage";
import {AlbumsPage} from "./pages/AlbumsPage";
import {PostsPage} from "./pages/PostsPage";

const router = createBrowserRouter([
    {
        path:'',element: <MainLayout/>, children:[
            {
                path: 'todos', element: <TodosPage/>
            },
            {
                path: 'comments', element: <CommentsPage/>
            },
            {
                path:'posts', element: <PostsPage/>
            },
            {
                path: 'albums', element: <AlbumsPage/>
            }
        ]
    }
])

export {
    router
}