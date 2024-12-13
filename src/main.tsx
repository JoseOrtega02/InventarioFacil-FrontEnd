import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
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
import "./index.css"
import '../styled-system/styles.css'
import Home from './pages/Home/Home.tsx';
import '@fontsource/krona-one';
import '@fontsource/pt-sans-narrow';
import '@fontsource/sarala';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children:
      [{
        path: "/home",
        element: <Home />
      }
        , {
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
          element: <PrivateRoute component={Table} />,

        }, {
          path: "tables/:id",
          element: <PrivateRoute component={Item} />
        }]
      }, {
        path: "sales",
        element: <PrivateRoute component={Sales} />
      }, {
        path: "make-sale",
        element: <PrivateRoute component={MakeSale} />
      }]
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>

    <RouterProvider router={router} />
  </React.StrictMode>,
)
