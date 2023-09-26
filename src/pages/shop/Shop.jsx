import React, {useEffect} from 'react';
import style from "./Shop.module.css"
import {useDispatch, useSelector} from "react-redux";
import {getProducts} from "../../redux/slise/ProductSlice.js";
import {useNavigate} from "react-router-dom";

function Shop() {
    const {productsData} = useSelector(
        (state) => state.products
    );

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getProducts())
    },[])

    const navigate = useNavigate();

    return (
        <div>
            <h1 className={style.shopH1}>Магазин</h1>
            <div className={style.shopBox}>
            {productsData.slice(0,9).map((el) => {
                return(
                       <div>
                           <div  onClick={() => navigate(`/product/${el.id}`)}  className={style.shopBlock}>
                               <img style={{width:'298px', height:'458px', borderRadius: '6px'}} src={el.images[0]} />
                               <h1>{el.title}</h1>
                               <h4>{el.price}$ </h4>
                           </div>
                       </div>
                )
            })}
        </div>
        </div>
    );
}

export default Shop;
