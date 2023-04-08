import styles from "./work.module.css";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export default function Work() {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <div className={styles.work}>
            <header>
                <h1>My Work.</h1>
            </header>
            <main>
                <Carousel showDots={true} responsive={responsive} autoPlay={true} autoPlaySpeed={3000} infinite={true}>
                    <div> <img src="/images/twitter.png" alt="Twitter icon" width="300" /> <p><a>OneTill Web</a></p></div>
                    <div><img src="/images/twitter.png" alt="Twitter icon" width="300" /> <p><a>OPRS</a></p></div>
                    <div> <img src="/images/twitter.png" alt="Twitter icon" width="300" /> <p><a>OneTill Mobile</a></p></div>
                    <div> <img src="/images/php.png" alt="Twitter icon" width="300" /> <p> <a>NCA Ujenzi Mobile</a></p></div>
                    <div><img src="/images/twitter.png" alt="Twitter icon" width="300" /> <p><a>NCA</a></p></div>
                    <div><img src="/images/twitter.png" alt="Twitter icon" width="300" /> <p><a>Freebeings</a></p></div>
                    {/* <div>
                        <img src="/images/twitter.png" alt="Twitter icon" width="300" />
                        <p className="legend">Legend 1</p></div>
                    <div>
                        <img src="/images/twitter.png" alt="Twitter icon" width="300" />
                        <p className="legend">Legend 2</p></div> */}
                </Carousel>
            </main>
        </div>
    );
}