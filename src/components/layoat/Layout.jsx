import React, {useState} from 'react';
import Header from "./header/Header.jsx";
import {Route, Routes} from "react-router-dom";
import Footer from "./footer/Footer.jsx";
import Hero from "../hero/Hero.jsx";
import Qualities from "../qualities/Qualities.jsx";
import Staff from "../staff/Staff.jsx";
import Shop from "../../pages/shop/Shop.jsx";
import ProductDetail from "../../pages/productDeteil/productDetail.jsx";
import Cart from "../../pages/cart/Cart.jsx";
import Brent from "../../pages/brend/Brent.jsx";
import Contacts from "../../pages/cotacts/Contacts.jsx";
import Like from "../../pages/like/Like.jsx";
import Auth from "../../pages/auth/Auth.jsx";


const Root = () => {
    return(
        <div>
            <Hero/>
            <Qualities/>
            <Staff/>
        </div>
    )
}
function Layout() {
        const [isVisible, setIsVisible] = useState(false);

        const changeVisible = () => {
            setIsVisible(true)
        }

    return (
        <div>
            <Header changeVisible={changeVisible}/>
            {isVisible && <Auth setIsVisible={setIsVisible}/>}

            <Routes>
                <Route path='/' element={<Root/>}/>
                <Route path='/shop' element={<Shop/>}/>
                <Route path='/product/:id' element={<ProductDetail/>}/>
                <Route path='/cart' element={<Cart/>}/>
                <Route path='/like' element={<Like/>}/>
                <Route path='/brent' element={<Brent/>}/>
                <Route path='/contacts' element={<Contacts/>}/>
            </Routes>
            <Footer/>
        </div>
    );
}

export default Layout;