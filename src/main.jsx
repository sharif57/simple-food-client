import { StrictMode } from 'react'
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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/menus',
        element:<Menus></Menus>
      },
      {
        path:'/catering',
        element:<Catering></Catering>
      },
      {
        path:'/how',
        element:<How></How>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    </StrictMode>,
)
