import React, { useState } from "react";
import { MdOutlineEmail } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";
import { useRef } from "react";
// import { SMTPClient } from 'emailjs';
import { toast } from 'react-toastify';


const Contact = () => {
    const [message, setMessage] = useState({ name: '', email: '', tel: '', message: '' })

    const sendEmail = (e) => {
        e.preventDefault();

        const formData = Object.fromEntries(new FormData(e.currentTarget))
        setMessage({
            name: `${formData.name} `,
            email: `${formData.email}`,
            tel: `${formData.email}`,
            message: `${formData.message}`,
        })

        console.log(message);

        const serviceID = 'service_jmgyh2i';
        const templateID = 'template_1oc7asz';
        if (!message) return;

        // emailjs.send(serviceID, templateID, message, "y1q6AEfobRR4ZVzYc").then((response) => {
        //     toast.success('Email sent successfully!');
        // }, (err) => {
        //     toast.error('Failed to send email. Please try again.');
        // });

        e.currentTarget.reset()
    };

    return (
        <section id="contact">
            <h5>Get In Touch</h5>
            <h2>Contact me</h2>

            <div className="container contact__container">
                <div className="contact__container__leftSide">
                    <article className="contact__container__leftSide__option">
                        <MdOutlineEmail className="contact__container__leftSide__option__icon" />
                        <h4>Email</h4>
                        <h5>wilems12@gmail.com</h5>
                        <a
                            href="mailto:wilems12@gmail.com"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Send a message
                        </a>
                    </article>
                    <article className="contact__container__leftSide__option">
                        <BsWhatsapp className="contact__container__leftSide__option__icon" />
                        <h4>Whatsapp</h4>
                        <h5>+509 42521970</h5>
                        <a
                            href="https://api.WhatsApp.com/send?phone=50942521970"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Send a message
                        </a>
                    </article>
                </div>
                <form
                    onSubmit={sendEmail}
                    className="contact__container__rightSide"
                >
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Full Name"
                        required
                    />
                    <input type="text" name="email" placeholder="Your Email" required />
                    <textarea
                        name="message"
                        placeholder="Your Message"
                        rows="10"
                        required
                    ></textarea>

                    <button type="submit" className="btn btn--primary">
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    );
}

export default Contact;

