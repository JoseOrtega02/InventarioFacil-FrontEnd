import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from './pages/Login/Login';
import Register from './pages/Login/Register';
import { PrivateRoute } from './components/privateRoute/PrivateRoute';
import Dashboard from './pages/Dashboard/Dashboard';
import Table from './pages/Table/Table';
import Item from './pages/Item/Item';
import Sales from './pages/Sales/Sales';
import MakeSale from './pages/MakeSale/MakeSale';
import "./index.css"
import '../styled-system/styles.css'
import Home from './pages/Home/Home';
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
