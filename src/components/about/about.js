import styles from "./about.module.css";

export default function About() {
    return (
        <div className={styles.about}>
            <main>
                <div className={styles.about_titles}>
                    <p className={styles.about_intro}>Hi, I'm Walter Kiprono.</p>
                    <p className={styles.about_roles}>I'm a product designer</p>
                </div>
            </main>
        </div>
    );
}