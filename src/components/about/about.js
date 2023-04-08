import React from "react";
import ReactTyped from "react-typed";
import styles from "./about.module.css";
import Utils from "../../utils/util";

export default function About(props) {
    const utils = new Utils();
    const [tagText, setTagText] = React.useState("");
    const words = [
        'React',
        'Vue',
        'Flutter',
        'Node'
    ];

    React.useEffect(() => {
        setTagText(utils.getWeatherText(props.current_weather));
    }, []);

    return (
        <div className={styles.about}>
            <main>
                <div className={styles.about_tag}><p><ReactTyped strings={[tagText]} typeSpeed={40} /></p></div>
                <div className={styles.about_titles}>
                    <p className={styles.about_intro}>Hi, I&apos;m Walter Kiprono.</p>
                    <p className={styles.about_roles}>Tag me on <ReactTyped strings={words} typeSpeed={100} backSpeed={100} loop /> Projects.</p>
                </div>
            </main>
        </div>
    );
}