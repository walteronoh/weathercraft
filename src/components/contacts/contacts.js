import styles from "./contacts.module.css";

export default function Contacts() {
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
                            <li>walterkiprono.work@outlook.com</li>

                        </li>
                        <li>

                            <li>Phone</li>
                            <li>+254 729 795 939</li>

                        </li>
                    </ul>
                    <ul className={styles.contacts_form}>
                        <li>
                            <li><label className={styles.contacts_form_label}>Message.</label></li>
                            <li><textarea className={styles.contacts_form_msg} placeholder="Write your message..."></textarea></li>
                            <li><input type="button" value="Send" onClick={() => alert("Feature under development.")} className={styles.contacts_form_btn}/></li>
                        </li>
                    </ul>
                </div>
            </main>
        </div>
    );
}