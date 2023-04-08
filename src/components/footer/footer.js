import Image from 'next/image';
import styles from "./footer.module.css";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <ul>
                <li><a target="_blank" rel="noreferrer" href='https://twitter.com/_wkiprono'><Image src="/images/twitter.png" height={20} width={20} alt="Twitter icon" /></a></li>
                <li><a target="_blank" rel="noreferrer" href='https://www.linkedin.com/in/walter-kiprono-4212381a0/'><Image src="/images/linkedin.png" height={20} width={20} alt="LinkedIn icon" /></a></li>
                <li><a target="_blank" rel="noreferrer" href='https://github.com/walteronoh'><Image src="/images/github-light.png" height={20} width={20} alt="Github icon" /></a></li>
            </ul>
            <p>Photo by <a href="https://unsplash.com/@mike?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"> Mike Kotsch </a> on <a href="https://unsplash.com/photos/HNx4QLRgy2k?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></p>
        </footer>
    )
}