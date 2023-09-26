import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import style from "./Cart.module.css"
import {decgreaseQuantity, increaseQuantity, deleteItem} from "../../redux/slise/cartSlice.js";
import {Link} from "react-router-dom";

function Cart() {
    const dispatch = useDispatch();

    const handledecgreaseQuantity = (item) => {
        dispatch(decgreaseQuantity(item));
    };

    const handleIncreaseQuantity = (item) => {
        dispatch(increaseQuantity(item));
    };

    const handleDeleteItem = (item) => {
        dispatch(deleteItem(item.id));
    };

    const {cartData} = useSelector((state) => state.cart)
    console.log(cartData);

    const total = cartData.reduce((total, el)=> {
        return total + el.price * el.count;
        return total + el.totalPrice;
    },0)


    return (
        <div>
            <h1 className={style.CartText}>Корзина</h1>
            <div className={style.CartTextRow}>
                <h4 className={style.cartTovar}>Товар</h4>
                <h4 className={style.cartSena}>Цена</h4>
                <h4>Количество</h4>
                <h4 className={style.cartAll}>Всего</h4>
            </div>
            <hr className={style.hr}/>
            <div className={style.CartTextRow}>
               <div className={style.cartTextRow4}>
                   {cartData.map((el) => {
                       return (
                           <>
                               <img src={el.images[0]} height={100}/>
                               <h5 className={style.cartTitle}>{el.title}</h5>
                               <h5 className={style.cartPrice}>{el.price}$</h5>
                               <div className={style.cartIngr}>
                                   <button onClick={() => handleIncreaseQuantity(el)}>+</button>
                                   <p>{el.count}</p>
                                   <button onClick={() => handledecgreaseQuantity(el)}>-</button>
                               </div>
                               <h5 className={style.cartAllPrice}>{el.totalPrice}$</h5>
                               <h5 onClick={() => handleDeleteItem(el)} className={style.ion}> <ion-icon name="trash-outline"></ion-icon></h5>
                           </>
                       )
                   })}
               </div>

            </div>


            <div className={style.CartTextRow2}>
                <h4 className={style.cartTotal}>Total Price: {total} $</h4>
                <button className={style.cartBtn}>Оформить заказ</button>
                <Link to="/shop"><button className={style.cartBtn}>Посмотреть коллекцию</button></Link>
            </div>
        </div>
    );
}

export default Cart;