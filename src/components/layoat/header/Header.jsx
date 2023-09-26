import React, {useEffect} from 'react';
import styles from "./Header.module.css"
import {Link} from "react-router-dom";
import Logo from "../../../assets/Logo.png"
import {useDispatch, useSelector} from "react-redux";
import {getFromLS, signOut} from "../../../redux/slise/userSlice.js";

function Header({changeVisible}) {
    const {cartData} = useSelector((state) => state.cart);
    const {likeProductsData} = useSelector((state) => state.likeProduct);

    const dispatch = useDispatch()

    const {userData} = useSelector((state) => state.user);

    useEffect(() => {
        dispatch(getFromLS())
    },[])

    return (
        <div className={styles.mainHeader}>
            <nav className="nav">
                <div className={styles.navLogo}>
                    <Link to='/'><img src={Logo} alt="logo"/></Link>
                </div>

                <ul className={styles.navList}>
                    <li>
                        <Link style={{textDecoration: 'none', color: 'rgba(0, 0, 0, 0.90)', fontWeight:'600' }} to="/">Главная</Link>
                    </li>

                    <li>
                        <Link style={{textDecoration: 'none', color: 'rgba(0, 0, 0, 0.90)', fontWeight:'600'}} to="/shop">Магазин</Link>
                    </li>

                    <li>
                        <Link style={{textDecoration: 'none', color: 'rgba(0, 0, 0, 0.90)', fontWeight:'600'}} to="/brent">О бренде</Link>
                    </li>

                    <li>
                        <Link style={{textDecoration: 'none', color: 'rgba(0, 0, 0, 0.90)', fontWeight:'600'}} to="/contacts">Контакты</Link>
                    </li>
                </ul>

                <div className={styles.navIcons}>
                    <div className={styles.headerSignIn}>
                        {Object.keys(userData) ?.length > 0 ? (
                            <div>
                                <h5>{userData.name}</h5>
                                <img src={userData.avatar} width={50} style={{borderRadius: '40%'}} />
                                <button onClick={() => {
                                    const isConfirm = confirm("Вы уверены что хотите выйди?");
                                    if (isConfirm){
                                        dispatch(signOut())
                                    }

                                }
                                }>Sign Out</button>
                            </div>
                        ): (<button onClick={changeVisible}>Sign Up</button>)}
                    </div>
                    

                    <div className={styles.headerIcon}>
                        <Link to="/like"><ion-icon name="heart-outline"></ion-icon>
                            <span>{likeProductsData.length}</span>
                        </Link>
                        <Link to="/cart"> <ion-icon name="bag-handle-outline"></ion-icon>
                            <span>{cartData.length}</span>
                        </Link>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Header;