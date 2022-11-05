import { Navigate, useRoutes } from 'react-router-dom';
import DashboardLayout from "./layouts/DashboardLayout";
import NotFound from "./layouts/NotFound";
import Dashboard from "./dashboard/Dashboard";
import Fetchlist from './fetchlist/Fetchlist';
import Todo from './todo/Todo';
import Formularios from './formularios/Formularios';

const Routes = () => {
    return useRoutes([
        {
            path: '/',
            element: <DashboardLayout />,
            children: [
                { path: '', element: <Dashboard /> },
                { path: 'fetch-list', element: <Fetchlist /> },
                { path: 'todo', element: <Todo /> },
                { path: 'forms', element: <Formularios /> },
                ]
            },
        {path: '/404', element: <NotFound/>},
        {path:'*', element: <Navigate to="/404" replace/>}
        ]
    )
}

export default Routes;