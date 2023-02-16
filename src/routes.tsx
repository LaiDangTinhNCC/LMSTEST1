import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';
//
import BlogPage from './pages/BlogPage';
import UserPage from './pages/UserPage';
import LoginPage from './pages/LoginPage';
import Page404 from './pages/Page404';
import ProductsPage from './pages/ProductsPage';
import DashboardAppPage from './pages/DashboardAppPage';
import PrivateRoute from './router/PrivateRoute';
import PublicRoute from './router/PublicRoute';
import TeacherList from './pages/teacher/TeacherList';
import StudentList from './pages/student/StudentList';


// ----------------------------------------------------------------------

export default function Router() {
  const routes = useRoutes([
    {
      element: <PrivateRoute/>,
      children : [
        { element: <Navigate to="dashboard" />, index: true },
        {path: 'dashboard',element: <DashboardLayout /> ,
      children: [
        { element: <Navigate to="/dashboard/app" />, index: true },
        { path: 'app', element: <DashboardAppPage /> },
        { path: 'user', element: <UserPage /> },
        { path: 'teacher', element: <TeacherList /> },
        { path: 'student', element: <StudentList /> },
        { path: 'products', element: <ProductsPage /> },
        { path: 'blog', element: <BlogPage /> },
        { path: '404', element: <Page404 /> },
        { path: '*', element: <Navigate to="/404" /> },
      ]}
      ]
    },

    {
      element: <PublicRoute/>,
      children : [
        { element: <Navigate to="login" />, index: true },
        {path: 'login',element: <LoginPage/> ,}
      ]
    },
   
    // {
    //   path: '/dashboard',
    //   element: <DashboardLayout /> ,
    //   children: [
    //     { element: <Navigate to="/dashboard/app" />, index: true },
    //     { path: 'app', element: <DashboardAppPage /> },
    //     { path: 'user', element: <UserPage /> },
    //     { path: 'products', element: <ProductsPage /> },
    //     { path: 'blog', element: <BlogPage /> },
    //     { path: '404', element: <Page404 /> },
    //     { path: '*', element: <Navigate to="/404" /> },
    //   ],
    // },
    // {
    //   path: 'login',
    //   element: <LoginPage />,
    // },
    // {
    //   element: <SimpleLayout />,
    //   children: [
    //     { element: <Navigate to="/dashboard/app" />, index: true },
    //     { path: '404', element: <Page404 /> },
    //     { path: '*', element: <Navigate to="/404" /> },
    //   ],
    // },
    {
      path: '*',
      element: <Navigate to="/dashboard" replace />,
    },
  ]);

  return routes;
}