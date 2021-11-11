import React, {useEffect, useState} from 'react';
import {observer} from "mobx-react-lite";
import {NavLink} from "react-router-dom";

const NewsList = observer(() => {
    let posts = [
        {
            imageUrl: 'images/news/site_open_2.jpg',
            date: '1 октября 2021',
            title: 'Открытие сайта Montece Gaming 2021!',
            text: 'Добро пожаловать на сайт команды Montece Gaming! Спустя долгое время мы закончили его написание и дизайн. Теперь, все новости, информация о проектах и играх будет находиться тут. Также, каждый можешь оставить заявку на создание проекта или заказа - подробнее в полной новости.',
            readMoreId: '1'
        },
    ] // все посты
    const [currentPosts, setCurrentPosts] = useState([]) // посты, которые надо выводить сейчас
    const [paginationItems, setPaginationItems] = useState([]) // все кнопки
    const [currentPaginationItems, setCurrentPaginationItems] = useState([]) // кнопки, которые надо выводить сейчас
    const [currentPage, setCurrentPage] = useState(1) // текущая страница
    let postsOnPage = 5 // колво постов на странице

    useEffect(() => {
        let arr = []
        for (let i = 1; i <= Math.ceil(posts.length / postsOnPage); i++) {
            arr.push(i)
        }
        setPaginationItems(arr)
        setCurrentPaginationItems([1, 2, 3, 4, 5])
    }, [])

    useEffect(() => {
        setCurrentPosts(posts.slice((currentPage - 1) * postsOnPage, currentPage * postsOnPage))
        if (currentPage >= 5) {
            if (currentPage === paginationItems.length) {
                setCurrentPaginationItems(paginationItems.slice(currentPage - 5, currentPage))
            } else {
                setCurrentPaginationItems(paginationItems.slice(currentPage - 4, currentPage + 1))
            }
        } else {
            setCurrentPaginationItems([1, 2, 3, 4, 5])
        }
    }, [currentPage])

    return (
        <div className="news__list">
            {currentPosts.map((item, i) => {
                return (
                    <div className="news__item item-news" key={i}>
                        <div className="item-news__image">
                            <img src={item.imageUrl} alt=""></img>
                        </div>
                        <div className="item-news__date">
                            {item.date}
                        </div>
                        <div className="item-news__title">
                            {item.title}
                        </div>
                        <div className="item-news__desc">
                            {item.text}
                        </div>
                        <NavLink
                            to={"/news/" + item.readMoreId}
                            className="item-news__btn btn"
                            target="_blank"
                            end="true"
                        >
                            Read More
                        </NavLink>
                    </div>
                )
            })}
            <div className="news__pagination pagination-news">
                {paginationItems.length > postsOnPage && currentPaginationItems.map(item => {
                    return (
                        <div
                            key={item}
                            className={currentPage === item ? "pagination-news__item active" : "pagination-news__item"}
                            onClick={() => setCurrentPage(item)}
                        >
                            {item}
                        </div>
                    )
                })}
            </div>
        </div>

    );
});

export default NewsList;