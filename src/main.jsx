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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main ></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/menus',
        element: <Menus></Menus>,
        loader: () => fetch('http://localhost:5000/food')
      },
      {
        path:'/foodDetails/:id',
        element:<MenusDetails></MenusDetails>,
        loader: ({ params }) => fetch(`http://localhost:5000/foods/${params.id}`)
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
      },
      {
        path:'/trending',
        element: <Trending></Trending>,
        loader: () => fetch('http://localhost:5000/food')
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
)
