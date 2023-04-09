import Image from 'next/image';
import React from 'react';
import styles from "./sidenav.module.css";

export default function SideNav(props) {
    const [isActive, setIsActive] = React.useState(false);

    React.useEffect(() => {
        setIsActive(props.isActive);
    }, [props.isActive])

    return (
        isActive
            ?
            <div className={styles.sidenav_body}>
                <div className={styles.sidenav}>
                    <Image src="/images/arrow.ico" height={30} width={40} />
                    <ul>
                        {
                            props.tabs.map((tab) => (
                                <li key={tab.key}>{tab.name}</li>
                            ))
                        }
                    </ul>
                </div>
            </div>
            : <Image src="/images/menu.svg" height={30} width={30} />
    );
}