import React from 'react';
import {useFormik} from 'formik';
import './Form.scss';

const Form = () => {

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            message: ''
        }
    })



    return(
        <form className="form">
            <label className="form__label" htmlFor="name">Imię i nazwisko:</label>
            <input className="form__input" type="text" id="name"/>
            <label className="form__label" htmlFor="email">E-mail:</label>
            <input className="form__input" type="email" id="email"/>
            <label className="form__label" htmlFor="message">Treść wiadomości:</label>
            <textarea className="form__textarea" name="message" id="message"></textarea>
            <button className="form__button">Wyślij wiadomość</button>
        </form>
    )
}

export default Form;