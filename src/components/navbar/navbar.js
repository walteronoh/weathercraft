import Image from 'next/image';
import React from 'react';
import styles from "./navbar.module.css";
import { getUserLocationGeoAPIfy } from '../../services/services';
import SideNav from '../sidenav/sidenav';

export default function NavBar(props) {
    const [activeTab, setActiveTab] = React.useState(1);
    const [activeSideNav, setActiveSideNav] = React.useState(false);
    const [locationInfo, setLocationInfo] = React.useState({ city: "", country: "", countryCode: "" });
    const [width, setWidth] = React.useState();
    const [isMobile, setIsMobile] = React.useState(false);

    const activateTab = (key) => {
        props.scrollToContent(key);
        setActiveTab(key);
    }

    React.useEffect(() => setActiveTab(props.activeTabKey), [props.activeTabKey]);

    React.useEffect(() => {
        getUserLocationGeoAPIfy().then((response) => {
            setLocationInfo({ city: response.city, country: response.country, countryCode: response.country.iso_code });
        });
    }, []);

    const handleResize = () => {
        setWidth(window.innerWidth);
    };

    React.useEffect(() => {
        if (width >= 320 && width <= 605) {
            setIsMobile(true);
        } else {
            setIsMobile(false);
        }
    }, [width])

    React.useEffect(() => {
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, []);

    return (
        <div className={styles.navbar}>
            {/* <Image src="/vercel.svg" height={72} width={72} alt="wk icon" className={styles.navbar_icon} /> */}
            <h1>[WK]</h1>
            <h4>{locationInfo.city}, {locationInfo.countryCode}</h4>
            <div className={styles.navbar_titles}>
                <ul>
                    {
                        isMobile
                            ? <li><SideNav tabs={props.tabs} isActive={activeSideNav} /></li>
                            : props.tabs.map((v) => (<li key={v.key} onClick={() => activateTab(v.key)}>{v.name}{activeTab == v.key ? <hr width="50%" /> : ''}</li>))
                    }
                </ul>
            </div>
        </div>
    )
}