import Image from 'next/image';
import styles from "./skills.module.css";

export default function Skills() {
    return (
        <div className={styles.skills}>
            <header>
                <h1>Skills.</h1>
            </header>
            <main >
                <p>I like to code things from scratch using the following languages.</p>
                <div className={styles.icon} id="languages-el">
                    <ul>
                        <li><a target="_blank" rel="noreferrer" href='https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics'><Image src="/images/html.png" height={20} width={20} alt="HTML icon" /></a><p>HTML</p></li>
                        <li><a target="_blank" rel="noreferrer" href='https://developer.mozilla.org/en-US/docs/Web/CSS'><Image src="/images/css.png" height={20} width={20} alt="CSS icon" /></a><p>CSS</p></li>
                        <li><a target="_blank" rel="noreferrer" href='https://developer.mozilla.org/en-US/docs/Web/JavaScript'><Image src="/images/javascript.png" height={20} width={20} alt="Javascript icon" /></a><p>Javascript</p></li>
                        <li><a target="_blank" rel="noreferrer" href='https://www.php.net/docs.php'><Image src="/images/php.png" height={20} width={20} alt="NodeJs icon" /></a><p>PHP</p></li>
                    </ul>
                </div>
                <p>UI design has been of interest recently. <br/> Figma is my get to go design tool. <br/> Iconscout for icons</p>
                <div className={styles.icon}>
                <ul>
                        <li><a target="_blank" rel="noreferrer" href='https://figma.com'><Image src="/images/figma.png" height={20} width={20} alt="Figma icon" /></a><p>Figma</p></li>
                        <li><a target="_blank" rel="noreferrer" href='https://iconscout.com'><Image src="/images/iconscout-logo.png" height={20} width={20} alt="Iconscout icon" /></a><p>IconScout</p></li>
                    </ul>
                </div>
                <p>In the meantime, problem solving challenges sets the pace.</p>
                <div className={styles.icon}>
                    <ul>
                        <li><a target="_blank" rel="noreferrer" href='https://codesignal.com'><Image src="/images/codesignal.webp" height={20} width={20} alt="Twitter icon" /></a><p>Codesignal</p></li>
                    </ul>
                </div>
            </main>
        </div>
    );
}