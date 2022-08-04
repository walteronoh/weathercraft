import ReactTyped from "react-typed";
import styles from "./about.module.css";

export default function About() {
    const words = [
        'React Developer',
        'Vue Developer',
        'Flutter Developer',
        'Node Developer'
    ];

    return (
        <div className={styles.about}>
            <main>
                <div className={styles.about_titles}>
                    <p className={styles.about_intro}>Hi, I&apos;m Walter Kiprono.</p>
                    <p className={styles.about_roles}><ReactTyped strings={words} typeSpeed={100} backSpeed={100} loop/></p>
                </div>
            </main>
        </div>
    );
}