import React from "react";
import { sendMailService } from "../../services/services";
import styles from "./contacts.module.css";

export default function Contacts() {
    const [message, setMessage] = React.useState("");
    const [responseMessage, setResponseMessage] = React.useState({ isError: false, message: ""});

    React.useEffect(() => {
        if(message.trim().length > 5) setResponseMessage({isError: false, message: ""});
    }, [message]);

    const sendMail = () => {
        if(message.trim().length > 5) {
            sendMailService({ text: message}).then((response) => {
                if(response.status == 200) {
                    setResponseMessage({ isError: false, message: "Your message was successfully sent. Walter will contact you soon."});
                    return;
                }
                setResponseMessage({ isError: true, message: "Your message was not sent. Please try again later."});
                return;
            }).catch((error) => {
                setResponseMessage({ isError: true, message: "There was an error sending your message. Please try again later."});
                return;
            })
            return;
        }
        setResponseMessage({ isError: true, message: "Your message is too short."});
        return false;
    }

    return (
        <div className={styles.contacts}>
            <header>
                <h1>Get In Touch.</h1>
            </header>
            <main>
                <div className={styles.contacts_grid}>
                    <ul className={styles.contacts_info}>
                        <li>

                            <li>Email</li>
                            <li>hello@walterkiprono.com</li>

                        </li>
                        <li>

                            <li>Phone</li>
                            <li>+254 729 795 939</li>

                        </li>
                    </ul>
                    <ul className={styles.contacts_form}>
                        <li>
                            <li><label className={styles.contacts_form_label}>Message.</label></li>
                            <li><label className={`${styles.contacts_form_label} ${responseMessage.isError ? styles.contacts_form_error_label : styles.contacts_form_success_label}`}>{responseMessage.message}</label></li>
                            <li><textarea className={styles.contacts_form_msg} onChange = {(e) => setMessage(e.target.value)} placeholder="Write your message..."></textarea></li>
                            <li><input type="button" value="Send" onClick={() => sendMail()} className={styles.contacts_form_btn}/></li>
                        </li>
                    </ul>
                </div>
            </main>
        </div>
    );
}