import React, {useEffect} from 'react';
import style from "./Like.module.css"
import {useDispatch, useSelector} from "react-redux";
import {addItemToCart} from "../../redux/slise/cartSlice.js";
import {Link, useParams} from "react-router-dom";
import {getSingleProducts} from "../../redux/slise/singleProductSlice.js";


function Like() {
    const {singleProductsData} = useSelector(
        (state) => state.singleProduct
    );

    const params = useParams();
    const dispatch = useDispatch();

    useEffect(()=> {
        dispatch(getSingleProducts(params.id));
    },[params.id])
    console.log(singleProductsData);

    const { likeProductsData } = useSelector((state) => state.likeProduct);
    return (
        <div>
            <h1 className={style.likeText}>Избранные товары</h1>
            <div className={style.likeBox}>
                {likeProductsData.map((product) => (
                  <div onClick={() => dispatch(addItemToCart(singleProductsData))} className={style.likeImg}>
                      <img src={product.images[0]} width={250} />
                      <h3>{product.title}</h3>
                      <h4> Цена:   {product.price}$ <span>{product.price+100}$</span></h4>
                  </div>
                ))}
            </div>

            <center><Link to="/shop"><button className={style.likeBtn}>Посмотреть коллекцию</button></Link></center>
        </div>
    );
}

export default Like;