import { createBrowserRouter } from "react-router-dom";
import Roots from "../layout/Roots";
import Home from "../pages/Home";
import Login from "../components/login/Login";
import Cart from "../pages/Cart";
import Shop_all_Category from "../pages/Shop_all_Category";
import banner from "../assets/banner.jpg";
import kids_banner from "../assets/kids_banner.jpg";
import women_banner from "../assets/women_banner.avif";
import Register from "../components/regiter/Register";
import Product from "../pages/Product";



const route = createBrowserRouter([
    {
        path: '/',
        Component: Roots,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: '/Men',
                Component: Shop_all_Category,
                loader: () => {
                    return{
                        category: 'Men',
                        banner: banner
                    }
                }
            },
            {
                path: '/kids',
                Component: Shop_all_Category,
                loader: () => {
                    return{
                        category: 'Kid',
                        banner: kids_banner
                    }
                }
            },
            {
                path: '/women',
                Component: Shop_all_Category,
                loader: () => {
                    return{
                        category: 'Women',
                        banner: women_banner
                    }
                }
            },
            {
                path: '/login',
                Component: Login
            },
            {
                path: '/cart',
                Component: Cart
            },
            {
                path: '/register',
                Component: Register
            },
            {
                path: '/product/:productId',
                Component: Product
            }
        ]
    }
])


export default route;

