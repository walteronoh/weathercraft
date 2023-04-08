import Image from 'next/image';
import styles from "./footer.module.css";

export default function Footer(props) {
    return (
        <footer className={styles.footer}>
            <ul>
                <li><a target="_blank" rel="noreferrer" href='https://twitter.com/_wkiprono'><Image src="/images/twitter.png" height={20} width={20} alt="Twitter icon" /></a></li>
                <li><a target="_blank" rel="noreferrer" href='https://www.linkedin.com/in/walter-kiprono-4212381a0/'><Image src="/images/linkedin.png" height={20} width={20} alt="LinkedIn icon" /></a></li>
                <li><a target="_blank" rel="noreferrer" href='https://github.com/walteronoh'><Image src="/images/github-light.png" height={20} width={20} alt="Github icon" /></a></li>
            </ul>
            <p>{props.accredit}</p>
        </footer>
    )
}