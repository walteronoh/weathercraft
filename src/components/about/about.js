import ReactTyped from "react-typed";
import styles from "./about.module.css";

export default function About() {
    const words = [
        'React',
        'Vue',
        'Flutter',
        'Node'
    ];

    return (
        <div className={styles.about}>
            <main>
                <div className={styles.about_titles}>
                    <p className={styles.about_intro}>Hi, I&apos;m Walter Kiprono.</p>
                    <p className={styles.about_roles}>Tag me on <ReactTyped strings={words} typeSpeed={100} backSpeed={100} loop/> Projects.</p>
                </div>
            </main>
        </div>
    );
}