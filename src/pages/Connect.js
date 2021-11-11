import React, {useState} from 'react';
import {useInput} from "../ustils/form";

const Connect = () => {
    const email = useInput('', {isEmpty: true, email: true})
    const message = useInput('', {isEmpty: true})
    const name = useInput('', {isEmpty: true})

    const submitHandler = async (e) => {
        e.preventDefault()
        let form = e.target
        let formData = new FormData(form)
        formData.append('formName', 'connect')

        let response = await fetch('sendmail.php', {
            method: 'POST',
            body: formData
        })
        if (response.ok) {
            alert('Спасибо за заявку!')
        } else {
            alert("Ошибка")
        }
        name.setValue("")
        name.setIsDirty(false)
        email.setValue("")
        email.setIsDirty(false)
        message.setValue("")
        message.setIsDirty(false)
    }
    return (
        <div className="connect">
            <div className="connect__container container">
                <div className="form">
                    <form
                        className="form__body form__body--connect"
                        id="form"
                        action="#"
                        onSubmit={e => submitHandler(e)}
                    >
                        <div className="form__title">
                            Связаться с нами
                        </div>
                        <div className="form__subtitle">
                            Хочется предложить свою идею, узнать подробности о какой-либо новости, заказать проект,
                            оставить заявку
                            на вступление в команду, раскритиковать нас или кого-то другого, поделиться личными
                            проблемами - нижняя
                            форма именно для вас!
                            <br></br>
                            Заполнив форму ниже и указав ваше имя, почту и сообщение, вы сможете связаться с нами
                            почти по любому
                            вопросу.
                        </div>
                        <div className="form__row">
                            <div className="form__item">
                                {(name.isDirty && name.isEmpty) &&
                                <div className="form__message">Заполните поле!</div>}
                                <input
                                    type="text"
                                    value={name.value}
                                    onChange={e => name.onChange(e)}
                                    onBlur={e => name.onBlur(e)}
                                    className="form__input"
                                    id="formName"
                                    name="name"
                                    placeholder="Имя"
                                    autoComplete="off"
                                ></input>
                            </div>
                            <div className="form__item">
                                {(email.isDirty && email.isEmpty) &&
                                <div className="form__message">Заполните поле!</div>
                                }
                                {(email.isDirty && !email.isEmpty && email.emailError) &&
                                <div className="form__message">Введите корректный email!</div>
                                }
                                <input
                                    type="text"
                                    value={email.value}
                                    onChange={e => email.onChange(e)}
                                    onBlur={e => email.onBlur(e)}
                                    className="form__input"
                                    id="formEmail"
                                    name="email"
                                    placeholder="Email"
                                    autoComplete="off"
                                ></input>
                            </div>
                        </div>
                        <div className="form__item">
                            {(message.isDirty && message.isEmpty) &&
                            <div className="form__message">Заполните поле!</div>}
                            <textarea
                                className="form__input"
                                value={message.value}
                                onChange={e => message.onChange(e)}
                                onBlur={e => message.onBlur(e)}
                                id="formMessage"
                                name="message"
                                placeholder="Сообщение"
                                autoComplete="off"
                            ></textarea>
                        </div>
                        <button
                            className={(!email.valid || !message.valid || !name.valid)
                                ? "form__button btn disabled" : "form__button btn"}
                            type="submit"
                        >
                            Отправить сообщение
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Connect;