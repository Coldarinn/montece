import React from 'react';
import {NavLink} from "react-router-dom";
import {GAMES_ROUTE} from "../router/routes";

const Games = () => {
    return (
        <div className="games">
            <div className="games__container container">
                <div className="games__body">
                    <div className="games__item item-games">
                        <div className="item-games__image">
                            <NavLink to={GAMES_ROUTE + "/1"} className="item-games__link"
                                     target="_blank">Больше
                                информации</NavLink>
                            <img src="images/games/zombie_dash_kill.jpg" alt=""></img>
                        </div>
                        <div className="item-games__label">
                            Zombie Dash Kill
                        </div>
                        <div className="item-games__desc">
                            Легендарная первая игра нашей компании. Увлекательный платформер с элементами хардкора в
                            постапокалиптическом мире, заполоненном двумерными зомби!
                        </div>
                    </div>
                    <div className="games__item item-games">
                        <div className="item-games__image">
                            <NavLink to={GAMES_ROUTE + "/2"} className="item-games__link" target="_blank">Больше
                                информации</NavLink>
                            <img src="images/games/computer_open_case.jpg" alt=""></img>
                        </div>
                        <div className="item-games__label">
                            Computer Open Case
                        </div>
                        <div className="item-games__desc">
                            Первая наша игра, получившая зеленый свет в Steam Greenlight. Симулятор открытия кейсов с
                            компьютерными
                            запчастями. Ты сможешь собрать
                            ПК своей мечты и протеститьровать его в различных виртуальных программах!
                        </div>
                    </div>
                    <div className="games__item item-games">
                        <div className="item-games__image">
                            <NavLink to={GAMES_ROUTE + "/3"} className="item-games__link" target="_blank">Больше
                                информации</NavLink>
                            <img src="images/games/hope_of_people.jpg" alt=""></img>
                        </div>
                        <div className="item-games__label">
                            Hope of people
                        </div>
                        <div className="item-games__desc">
                            Первая наша игра, получившая зеленый свет в Steam Greenlight. Симулятор открытия кейсов с
                            компьютерными
                            запчастями. Ты сможешь собрать
                            ПК своей мечты и протеститьровать его в различных виртуальных программах!
                        </div>
                    </div>
                    <div className="games__item item-games">
                        <div className="item-games__image">
                            <a href="http://www.montecegaming.com/games/missiondestroy/index.html"
                               className="item-games__link"
                               target="_blank"
                               rel="noopener noreferrer"
                            >
                                Больше информации
                            </a>
                            <img src="images/games/mission_destroy.jpg" alt=""></img>
                        </div>
                        <div className="item-games__label">
                            Mission "D.E.S.T.R.O.Y."
                        </div>
                        <div className="item-games__desc">
                            Секретный проект про танковые сражения. 'start mission N'; 'missions'
                        </div>
                    </div>
                    <div className="games__item item-games">
                        <div className="item-games__image">
                            <NavLink to={GAMES_ROUTE + "/5"} className="item-games__link" target="_blank"
                            >Больше
                                информации</NavLink>
                            <img src="images/games/cellular_level.jpg" alt=""></img>
                        </div>
                        <div className="item-games__label">
                            Cellular Level
                        </div>
                        <div className="item-games__desc">
                            Первая наша игра, получившая зеленый свет в Steam Greenlight. Симулятор открытия кейсов с
                            компьютерными
                            запчастями. Ты сможешь собрать
                            ПК своей мечты и протеститьровать его в различных виртуальных программах!
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Games;