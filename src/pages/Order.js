import React, {useState} from 'react';
import Flatpickr from "react-flatpickr";
import {useInput} from "../ustils/form";

const Order = () => {
    const PLACEHOLDER = "Выберите категорию"
    const [active, setActive] = useState(false)
    const [selectCurrent, setSelectCurrent] = useState(PLACEHOLDER)
    const [activeOption, setActiveOption] = useState("")
    const [date, setDate] = useState(new Date())
    const options = ['Игра', 'Программа', 'Сайт', 'Другое']

    const email = useInput('', {isEmpty: true, email: true})
    const message = useInput('', {isEmpty: true})
    const budget = useInput('', {isEmpty: true})

    const clickHandler = (option) => {
        setActive(!active)
        setSelectCurrent(option)
        setActiveOption(options.indexOf(option))
    }
    const submitHandler = async (e) => {
        e.preventDefault()
        let form = e.target
        let formData = new FormData(form)
        formData.append('category', selectCurrent)
        let response = await fetch('sendmail.php', {
            method: 'POST',
            body: formData
        })
        if (response.ok) {
            alert('Спасибо за заявку!')
        } else {
            alert("Ошибка")
        }
        email.setValue("")
        email.setIsDirty(false)
        budget.setValue("")
        budget.setIsDirty(false)
        message.setValue("")
        message.setIsDirty(false)
    }
    return (
        <div className="order" onClick={() => setActive(false)}>
            <div className="order__container container">
                <div className="form">
                    <form
                        className="form__body"
                        id="form"
                        action="#"
                        onSubmit={e => submitHandler(e)}
                    >
                        <div className="form__title">
                            Заявка на создание проекта
                        </div>
                        <div className="form__subtitle">
                            Всегда мечтали о своем собственном продукте, будь то игра или простой проект? Наша команда
                            готова вам
                            помочь почти в любом вопросе!
                            Опытные программисты-самоучки, у которых многолетняя практика за спиной, математики, а также
                            дизайнеры из
                            Montece Gaming будут работать над идеей вашей мечты.
                            <br></br>
                            Если ваши пожелания весьма невелики - домашнее задание в школе или вузе, картинка, звук
                            или лаунчер для
                            майнкрафт - мы тоже готовы с этим помочь! Оставляйте заявки в форме ниже.
                            <br></br>
                            У нас существует прайс-лист для понимания средних цен, ссылочка:
                            <a
                                href="https://docs.google.com/document/d/1DkS-XwLiWCSd7uMuBbWDxsIhU0_l4UvyeNexJsVuaOk/edit?usp=sharing"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                ПРАЙС-ЛИСТ
                            </a>
                            <br></br>
                            Также, у нас бывают скидки, как по особым случаям, так и, например, для
                            школьников!
                        </div>
                        <div
                            className={active ? "select active" : "select"}
                            onClick={e => e.stopPropagation()}
                        >
                            {(selectCurrent === PLACEHOLDER) &&
                            <div className="form__message">Выберите категорию!</div>
                            }
                            <div
                                className={active ? "select__current active" : "select__current"}
                                onClick={() => setActive(!active)}
                            >
                                {selectCurrent}
                            </div>
                            <div
                                className={active ? "select__body active" : "select__body"}
                            >
                                {options.map((option, index) => {
                                    return (
                                        <div
                                            key={option}
                                            className={activeOption === index ? "select__option active" : "select__option"}
                                            onClick={(e) => clickHandler(option)}
                                        >
                                            {option}
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                        <div className="form__row">
                            <div className="form__item">
                                {(budget.isDirty && budget.isEmpty) &&
                                <div className="form__message">Заполните поле!</div>}
                                <input
                                    type="text"
                                    value={budget.value}
                                    onChange={e => budget.onChange(e)}
                                    onBlur={e => budget.onBlur(e)}
                                    className="form__input" id="formBudget" name="budget"
                                    placeholder="Бюджет (RUB/US/EURO)"
                                    autoComplete="off"
                                ></input>
                            </div>
                            <div className="form__item">
                                <Flatpickr
                                    placeholder="Укажите срок"
                                    value={date}
                                    options={{
                                        minDate: "today",
                                        allowInput: true,
                                        dateFormat: "d-m-Y"

                                    }}
                                    onBlur={e => budget.onBlur(e)}
                                    onChange={e => setDate(e)}
                                />
                            </div>
                            <div className="form__item">
                                {(email.isDirty && email.isEmpty) &&
                                <div className="form__message">Заполните поле!</div>
                                }
                                {(email.isDirty && !email.isEmpty && email.emailError) &&
                                <div className="form__message">Введите корректный email!</div>
                                }
                                <input
                                    type="email"
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
                            <textarea className="form__input"
                                      id="formMessage"
                                      value={message.value}
                                      onChange={e => message.onChange(e)}
                                      onBlur={e => message.onBlur(e)}
                                      name="message"
                                      placeholder="Сообщение"
                                      minLength="10"
                                      autoComplete="off"
                            ></textarea>
                        </div>
                        <button
                            className={(!email.valid || !message.valid || !budget.valid || selectCurrent === PLACEHOLDER)
                                ? "form__button btn disabled" : "form__button btn"}
                            type="submit"
                        >
                            Отправить заказ
                        </button>
                    </form>
                </div>

            </div>
        </div>
    )
        ;
};

export default Order;