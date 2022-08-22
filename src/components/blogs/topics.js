import styles from "./blogs.module.css";
import React from "react";

export default function Topics() {
    const [articles, setArticles] = React.useState([
        {
            id: 1,
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            title: 'How To..'
        },
        {
            id: 2,
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            title: 'How To..'
        },
        {
            id: 3,
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            title: 'How To..'
        }
    ]);

    const openTopic = (e) => {
        alert('Coming soon!')
    }

    const trimContent = (content) => {
        let chars = content.substring(0, 100);
        return chars;
    }

    return (
        <div className={styles.topics}>
            <header>
                <h1>Topics.</h1>
            </header>
            <main>
                {
                    articles.map((value) => (
                        <article key={value.id} className={styles.article}>
                            <h3>{value.title}</h3>
                            <p className={styles.content}>{trimContent(value.content)}...</p>
                            <p className={styles.readmore_btn} onClick={(e) => openTopic(e)}>Read More...</p>
                        </article>
                    ))
                }
            </main>
        </div>
    );
}