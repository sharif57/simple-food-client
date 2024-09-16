import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home';
import Main from './Layout/Main';
import Menus from './Page/Menus';
import Catering from './Page/Catering';
import How from './Components/How';
import Testimonials from './Page/Testimonials';
import Faq from './Page/Faq';
import Register from './Page/Register';
import AuthProvider from './AuthProvider/AuthProvider';
import MenusDetails from './Page/MenusDetails';
import Trending from './Components/Trending';
import Dashboard from './Dashboard/Dashboard';
import AllMenus from './Dashboard/AllMenus';
import AddMenu from './Dashboard/AddMenu';
import FoodUpdate from './Dashboard/FoodUpdate';
import Login from './Page/Login';
import Error from './Page/Error';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main ></Main>,
    errorElement: <Error></Error>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/menus',
        element: <Menus></Menus>,
        loader: () => fetch('https://simple-food-server.vercel.app/food')
      },
      {
        path: '/foodDetails/:id',
        element: <MenusDetails></MenusDetails>,
        loader: ({ params }) => fetch(`https://simple-food-server.vercel.app/foods/${params.id}`)
      },
      {
        path: '/catering',
        element: <Catering></Catering>
      },
      {
        path: '/how',
        element: <How></How>
      },
      {
        path: '/testimonials',
        element: <Testimonials></Testimonials>
      },
      {
        path: '/faq',
        element: <Faq></Faq>
      },
      {
        path: '/register',
        element: <Register></Register>
      }, {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/trending',
        element: <Trending></Trending>,
        loader: () => fetch('https://simple-food-server.vercel.app/food')
      }
    ]
  },
  {
    path: '/dashboard',
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: 'allMenus',
        element: <AllMenus></AllMenus>,
        loader: () => fetch('https://simple-food-server.vercel.app/food')
      },
      {
        path: 'addMenu',
        element: <AddMenu></AddMenu>
      },
      {
        path: 'update/:id',
        element: <FoodUpdate></FoodUpdate>,
        loader: ({ params }) => fetch(`https://simple-food-server.vercel.app/foods/${params.id}`)
      }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <RouterProvider router={router} />
  </AuthProvider>
)
