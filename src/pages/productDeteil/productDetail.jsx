import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getSingleProducts} from "../../redux/slise/singleProductSlice.js";
import {useParams} from "react-router-dom";
import style from "./ProductDeteil.module.css"
import {addItemToCart} from "../../redux/slise/cartSlice.js";
import {addToLike} from "../../redux/slise/likeProductsSlice.js";

function ProductDetail() {
    const {singleProductsData} = useSelector(
        (state) => state.singleProduct
    );

    const params = useParams();
    const dispatch = useDispatch();

    useEffect(()=> {
        dispatch(getSingleProducts(params.id));
    },[params.id])
    console.log(singleProductsData);

    return (
        <div className={style.detailBox}>
           <div>
               <img style={{width:'400px'}} src={singleProductsData.images?.[0]} />
           </div>

            <div className={style.detailText}>
                <h3>{singleProductsData.title}</h3>
                <p>{singleProductsData.description}</p>
                <h4>{singleProductsData.price}$ <span>{singleProductsData.price+100}$</span></h4>
                <button style={{textDecoration: 'transparent'}} onClick={() => {dispatch(addToLike(singleProductsData));}} className={style.detailBtn}> <ion-icon name="heart-outline"></ion-icon></button>
                <button style={{textDecoration: 'transparent'}} onClick={() => dispatch(addItemToCart(singleProductsData))} className={style.detailBtn}>Добавить в корзину</button>
            </div>
        </div>
    );
}

export default ProductDetail;