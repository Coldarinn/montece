import React, {useEffect, useState} from 'react';
import {NavLink, useHistory} from "react-router-dom";
import {ABOUT_ROUTE, CONNECT_ROUTE, GAMES_ROUTE, NEWS_ROUTE, ORDER_ROUTE, PROJECTS_ROUTE} from "../router/routes";

const Header = () => {
    const [burger, setBurger] = useState(false)
    const history = useHistory()
    useEffect(() => {
        if (history.location.pathname.includes('/news/')) {
            document.querySelector('.nav-header__link').classList.add('active')
        }
        if (history.location.pathname.includes('/games/')) {
            document.querySelector('.nav-header__link--games').classList.add('active')
        }
        if (history.location.pathname.includes('/projects/')) {
            document.querySelector('.nav-header__link--projects').classList.add('active')
        }
    }, [])
    return (
        <header className="header">
            <div className="header__top">
                <span className="header__logo">
                    montece
                </span>
                <span className="header__icon icon-logo"></span>
                <span className="header__logo">
                    gaming
                </span>
                <div
                    className={burger ? "header__burger active" : "header__burger"}
                    onClick={() => setBurger(!burger)}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <div
                className={burger ? "header__bottom active" : "header__bottom"}
            >
                <nav className="header__nav nav-header">
                    <div className="nav-header__item">
                        <NavLink className="nav-header__link" to={NEWS_ROUTE} exact={true}
                                 onClick={() => setBurger(false)}>
                            Новости
                        </NavLink>
                    </div>
                    <div className="nav-header__item">
                        <NavLink className="nav-header__link" to={ABOUT_ROUTE} onClick={() => setBurger(false)}>
                            О команде
                        </NavLink>
                    </div>
                    <div className="nav-header__item">
                        <NavLink className="nav-header__link nav-header__link--games" to={GAMES_ROUTE}
                                 onClick={() => setBurger(false)}>
                            Наши игры
                        </NavLink>
                    </div>
                    <div className="nav-header__item">
                        <NavLink className="nav-header__link nav-header__link--projects" to={PROJECTS_ROUTE}
                                 onClick={() => setBurger(false)}>
                            Наши проекты
                        </NavLink>
                    </div>
                    <div className="nav-header__item">
                        <NavLink className="nav-header__link" to={ORDER_ROUTE} onClick={() => setBurger(false)}>
                            Заказать проект
                        </NavLink>
                    </div>
                    <div className="nav-header__item">
                        <NavLink className="nav-header__link" to={CONNECT_ROUTE} onClick={() => setBurger(false)}>
                            Обратная связь
                        </NavLink>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;