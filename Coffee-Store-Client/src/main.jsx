import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AddCoffee from './Components/AddCoffee.jsx';
import UpdateCoffee from './Components/UpdateCoffee.jsx';
import Register from './Components/Register.jsx';
import Authprovider from './Api/Authprovider.jsx';
import Users from './Components/Users.jsx';
import LogIn from './Components/LogIn.jsx';




const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    loader: () => fetch(`https://coffee-store-server-mt79l8sbo-aurnabs-projects.vercel.app/coffee`)
  },
  {
    path: 'addCoffee',
    element: <AddCoffee />
  },
  {
    path: 'updateCoffee/:id',
    element: <UpdateCoffee />,
    loader: ({ params }) => fetch(`https://coffee-store-server-mt79l8sbo-aurnabs-projects.vercel.app/coffee/${params.id}`)
  },
  {
    path: '/register',
    element: <Register />
  },
  {
    path: '/users',
    element: <Users />,
    loader: () => fetch(`https://coffee-store-server-mt79l8sbo-aurnabs-projects.vercel.app/user`)
  },
  {
    path: '/login',
    element: <LogIn />
  }
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>


    <Authprovider>
      <RouterProvider router={router} />
    </Authprovider>


  </React.StrictMode>,
)
