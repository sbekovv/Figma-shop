import React, {useState} from 'react';
import style from "./Auth.module.css"
import {useDispatch} from "react-redux";
import {createUser} from "../../redux/slise/userSlice.js";

function Auth({setIsVisible}) {
    const [userData, setUserData] = useState({
        email: '',
        password: '',
        name: '',
        avatar: ''
    });

    const dispatch = useDispatch()

    const handleChange = (e) => {
        const {name, value} = e.target
        setUserData({...userData, [name] : value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(userData);
        dispatch(createUser(userData))
    }

    return (
        <div className={style.overlay} onClick={(e)=>{
        let authDiv = e.target.closest('#test')
            if (!authDiv) setIsVisible(false)
            if (authDiv.classList.value === style.auth){
                return
            }
        }}>
            <div className={style.auth} id='test'>
                <h1 className={style.h3}>Регистрация</h1>
                <form onSubmit={handleSubmit}>
                    <p>
                        <input onChange={handleChange} type="email" placeholder="email" name="email" />
                    </p>
                    <p>
                        <input onChange={handleChange}  type="password" placeholder="password" name="password" />
                    </p>
                    <p>
                        <input onChange={handleChange}  type="text" placeholder="name" name="name" />
                    </p>
                    <p>
                        <input onChange={handleChange}  type="text" placeholder="Images-url" name="avatar" />
                    </p>
                    <p>
                        <input type="submit" value={"submit"} />
                    </p>
                </form>
            </div>
        </div>
    );
}

export default Auth;