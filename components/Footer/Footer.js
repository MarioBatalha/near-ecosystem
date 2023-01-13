import React from 'react';
import Link from 'next/link';

import styles from './Footer.module.css';
import footerLinks from "./Footer-script";

const Footer = () => {
    return (
        <footer className={styles.footerContainer}>
            <div className={styles.footerContainerDisclaimer}>
            <p><span>DISCLAIMER</span> The information presented herein has been provided by third parties and is made available solely for general information purposes. AwesomeNEAR does not warrant the accuracy of this information. The information should not be construed as professional or financial advice of any kind.</p>
            </div>
           <div className={styles.footerContainerNearMenu}>
            <ul>
               {
                footerLinks.map(link => {
                    return(
                        <li key={link.id}>
                            <Link href={link.url}>
                                <span>
                                {link.title}
                                &#x2197;
                                </span>
                            </Link>
                        </li>
                    )
                })
               }
            </ul>
           </div>
           <div className={styles.footerContainerMade}>
                <p>Made with ♥ by <Link href="https://nearfans.com/">NEARFANS</Link></p>
           </div>
        </footer>
    )
}

export default Footer;