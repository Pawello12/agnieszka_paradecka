import React, {useState} from 'react';
import './Form.scss';

const Form = () => {

    const [name, changeName] = useState('');
    const [email, changeEmail] = useState('');
    const [message, changeMessage] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();
        console.log(name, email, message);
    }

    return(
        <form className="form" onSubmit={submitHandler}>
            <label className="form__label" htmlFor="name">Imię i nazwisko:</label>
            <input className="form__input" type="text" id="name" value={name} onChange={(e) => changeName(e.target.value)} required />
            <label className="form__label" htmlFor="email">E-mail:</label>
            <input className="form__input" type="email" id="email" value={email} onChange={(e) => changeEmail(e.target.value)} required/>
            <label className="form__label" htmlFor="message">Treść wiadomości:</label>
            <textarea className="form__textarea" name="message" id="message" value={message} onChange={(e) => changeMessage(e.target.value)} required></textarea>
            <button className="form__button" type="submit">Wyślij wiadomość</button>
        </form>
    )
}

export default Form;