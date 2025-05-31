import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "/src/pages/Dashboard/dashboard";
import Orders from "/src/pages/Orders/orders";
import Products from "/src/pages/Products/products";
import Other from "/src/pages/Other/other";
import Dashbord from "./Dashboard/dashboard";
import Login from "../../pages/Login/login";
import Categories from "../../pages/Other/categories";
import Brands from "../../pages/Other/brands";
import AddProduct from "../../pages/Products/addProduct";
import SubCategories from "../../pages/Other/subCategories";
import EditProduct from "../../pages/Products/editProduct";

function Layout() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
      children: [
        {
          path: "/",
          index: true,
          element: <Login />,
        },
      ],
    },
    {
      path: "/home",
      element: <Dashbord />,
      children: [
        {
          path: "dashboard",
          element: <Dashboard />,
        },
        {
          path: "orders",
          element: <Orders />,
        },
        {
          path: "products",
          element: <Products />,
        },
        {
          path: "addProduct",
          element: <AddProduct/>,
        },
        {
          path: "editProduct/:id",
          element:<EditProduct/>,
        },

        {
          path: "other",
          element: <Other />,
          children: [
            {
              path: "categories",
              element: <Categories />,
            },
            {
              path: "brands",
              element: <Brands />,
            },
            {
              path: "subCategories",
              element: <SubCategories/>,
            },
          ],
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default Layout;
