import React from "react";

import styles from "./Footer.module.css";
import footerLinks from "./Footer-script";
import NextLink from '../Link';

const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footerContainerDisclaimer}>
        <p>
          <span>DISCLAIMER</span> The information presented herein has been
          provided by third parties and is made available solely for general
          information purposes. AwesomeNEAR does not warrant the accuracy of
          this information. The information should not be construed as
          professional or financial advice of any kind.
        </p>
      </div>
      <div className={styles.footerContainerNearMenu}>
        <ul>
          {footerLinks.map((link) => {
            return (
              <li key={link.id}>
                <NextLink href={link.url} target="_blank" rel="noreferrer">
                  <span>
                    {link.title}
                    &#x2197;
                  </span>
                </NextLink>
              </li>
            );
          })}
        </ul>
      </div>
      <div className={styles.footerContainerMade}>
        <p>
          Made with ♥ by{" "}
          <NextLink href="https://nearfans.com/" target="_blank" rel="noreferrer">
            NEARFANS
          </NextLink>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
