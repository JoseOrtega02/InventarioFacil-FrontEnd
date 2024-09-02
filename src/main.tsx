import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from './pages/Login/Login.tsx';
import Register from './pages/Login/Register.tsx';
import { PrivateRoute } from './components/privateRoute/PrivateRoute.tsx';
import Dashboard from './pages/Dashboard/Dashboard.tsx';
import Table from './pages/Table/Table.tsx';
import Item from './pages/Item/Item.tsx';
import Sales from './pages/Sales/Sales.tsx';
import MakeSale from './pages/MakeSale/MakeSale.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children:
      [{
        path: "login",
        element: <Login />
      }, {
        path: "register",
        element: <Register />
      }, {
        path: "dashboard",
        element: <PrivateRoute component={Dashboard} />,
        children: [{
          path: "tables",
          element: <Table />,

        }, {
          path: "tables/:id",
          element: <Item />
        }]
      }, {
        path: "sales",
        element: <Sales />
      }, {
        path: "make-sale",
        element: <MakeSale />
      }]
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
