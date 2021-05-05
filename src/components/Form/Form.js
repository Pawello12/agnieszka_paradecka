import React, {useState} from 'react';
import './Form.scss';
import emailjs from 'emailjs-com';

const serviceData = {
    serviceID: 'service_dda1vhb',
    templateID: 'template_esaxsui',
    userID: 'user_gB3GFH3HLsV0Ah1F7AoIQ'
}



const Form = () => {

    const [name, changeName] = useState('');
    const [email, changeEmail] = useState('');
    const [message, changeMessage] = useState('');



    const submitHandler = (e) => {
        e.preventDefault();

        const messages = document.querySelectorAll('.form__info-message');
        const positiveMessage = document.querySelector('.form__info-positive');
        const negativeMessage = document.querySelector('.form__info-negative');

        messages.forEach(message => message.classList.remove('form__info-active'));

        console.log(name, email, message);
        emailjs.sendForm(serviceData.serviceID, serviceData.templateID, e.target, serviceData.userID)
        .then((result) => {
            console.log(result.text);

            positiveMessage.classList.add('form__info-active');
        }, (error) => {
            console.log(error.text);

            negativeMessage.classList.add('form__info-active');
        });
    }

    return(
        <form className="form" onSubmit={submitHandler}>
            <input type="hidden" name="contact_number"></input>
            <label className="form__label" htmlFor="name">Imię i nazwisko:</label>
            <input className="form__input" type="text" id="name" name="user_name" value={name} onChange={(e) => changeName(e.target.value)} required />
            <label className="form__label" htmlFor="email">E-mail:</label>
            <input className="form__input" type="email" id="email" name="user_email" value={email} onChange={(e) => changeEmail(e.target.value)} required/>
            <label className="form__label" htmlFor="message">Treść wiadomości:</label>
            <textarea className="form__textarea" name="message" id="message" value={message} onChange={(e) => changeMessage(e.target.value)} required></textarea>
            <button className="form__button" type="submit">Wyślij wiadomość</button>
            <div className="form__info">
                <p className="form__info-message form__info-positive">Twoja wiadomość została wysłana!</p>
                <p className="form__info-message form__info-negative">Coś poszło nie tak :(</p>
            </div>
        </form>
    )
}

export default Form;