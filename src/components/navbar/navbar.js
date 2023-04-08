import Image from 'next/image';
import React from 'react';
import styles from "./navbar.module.css";
import { getUserLocation } from '../../services/services';

export default function NavBar(props) {
    const [activeTab, setActiveTab] = React.useState(1);
    const [locationInfo, setLocationInfo] = React.useState({ city: "", country: "", countryCode: ""});

    const activateTab = (key) => {
        props.scrollToContent(key);
        setActiveTab(key);
    }

    React.useEffect(() => setActiveTab(props.activeTabKey), [props.activeTabKey]);

    React.useEffect(() => {
        getUserLocation().then((response) => {
            setLocationInfo({ city: response.city, country: response.country, countryCode: response.countryCode });
        });
    }, []);

    return (
        <div className={styles.navbar}>
            {/* <Image src="/vercel.svg" height={72} width={72} alt="wk icon" className={styles.navbar_icon} /> */}
            <h1>[WK]</h1>
            <h4>{locationInfo.city}, {locationInfo.countryCode}</h4>
            <div className={styles.navbar_titles}>
                <ul>
                    {
                        props.tabs.map((v) => (<li key={v.key} onClick={() => activateTab(v.key)}>{v.name}{activeTab == v.key ? <hr width="50%" /> : ''}</li>))
                    }
                </ul>
            </div>
        </div>
    )
}