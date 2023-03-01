import EmailJSResponseStatus from '@emailjs/browser';
import React, { useRef } from 'react';
import { toast } from 'react-hot-toast';
import operator from '../../assets/logo/operator.png'
const ContactUs = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        // const form = e.target;

        EmailJSResponseStatus.sendForm(process.env.REACT_APP_serviceId, process.env.REACT_APP_templateId, form.current, process.env.REACT_APP_publicKey)
            .then((result) => {
                console.log(result.text);
                toast.success("Your message sent")
                e.target.name.value = "";
                e.target.email.value = "";
                e.target.message.value = "";
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div className="grid max-w-6xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 bg-gray-200 text-blue-900 dark:bg-gray-800 dark:text-gray-100 mb-20">
            <div className="flex flex-col justify-between">
                <div className="space-y-2">
                    <h2 className="text-4xl font-bold leading-tight lg:text-5xl">Let's talk!</h2>
                </div>
                <img src={operator} alt="" className="p-6 h-48 md:h-64" />
            </div>
            <form ref={form} onSubmit={sendEmail} novalidate="" className="space-y-6 ng-untouched ng-pristine ng-valid" data-form-type="contact">
                <div>
                    <label for="name" className="text-sm">Full name</label>
                    <input id="name" name='name' type="text" placeholder="" className="w-full p-3 rounded dark:bg-gray-800" required />
                </div>
                <div>
                    <label for="email" className="text-sm">Email</label>
                    <input id="email" name='email' type="email" className="w-full p-3 rounded dark:bg-gray-800" required />
                </div>
                <div>
                    <label for="message" className="text-sm">Message</label>
                    <textarea id="message" name='message' rows="3" className="w-full p-3 rounded dark:bg-gray-800" spellcheck="false" data-form-type="other" required></textarea>
                </div>
                <button type="submit" className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded text-white hover:bg-green-500 dark:bg-green-500 dark:text-white bg-blue-900">Send Message</button>
            </form>
        </div>
    );
};

export default ContactUs;