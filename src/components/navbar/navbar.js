import Image from 'next/image';
import styles from "./navbar.module.css";

export default function NavBar() {
    return (
        <div className={styles.navbar}>
            <Image src="/vercel.svg" height={72} width={72} alt="wk icon" className={styles.navbar_icon} />
            <div className={styles.navbar_titles}>
                <ul>
                    <li>About <hr width="50%"/></li>
                    <li>Skills <hr width="50%"/></li>
                    <li>Blog <hr width="50%"/></li>
                    <li>Portfolio <hr width="50%"/></li>
                    <li>Contacts </li>
                </ul>
            </div>
        </div>
    )
}