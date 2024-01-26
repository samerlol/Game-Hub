import { createBrowserRouter } from "react-router-dom";
import { GameDetailsPage } from "../pages/GameDetailsPage";
import { HomePage } from "../pages/HomePage";
import Layout from "../pages/Layout";

const router = createBrowserRouter([
    { 
        path: '/', 
        element: <Layout />,
        children: [
            {
                index: true,
                element: <HomePage/>,
            },
            {
                path: 'games',
                children: [
                    {
                        path: ':id',
                        element: <GameDetailsPage/>
                    }
                ],
            }
        ],
    }
]);

export default router;