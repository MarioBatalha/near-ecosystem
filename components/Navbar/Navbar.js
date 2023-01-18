import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { HiMenuAlt2 } from "react-icons/hi";
import { FaSearch } from "react-icons/fa";

import styles from "./Navbar.module.css";
import links from "./Navbar-script";

import Logo from "../../public/assets/awesomenear-logo.svg";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  const handleToggleLinks = () => {
    setShowLinks(!showLinks);
  };

  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = "0px";
    }
  }, [showLinks]);
  return (
    <nav className={styles.navContainer}>
      <div className={styles.navCenter}>
        <div className={styles.navHeader}>
          <Link href="/">
            <Image width={200} height={50} src={Logo} alt="Awesome Near logo" />
          </Link>
          <button className={styles.navToggle} onClick={handleToggleLinks}>
            <HiMenuAlt2 size={30} />
          </button>
        </div>

        <div className={styles.linksContainer} ref={linksContainerRef}>
          <ul className={styles.links} ref={linksRef}>
            {links.map((link) => {
              const { id, icon, url, text } = link;
              return (
                <li key={id}>
                  <Link href={url}>
                    <div className={styles.navLinks}>
                      {icon}
                      {text}
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className={styles.searchContainer}>
            <div className={styles.searchInput}>
              <FaSearch
                size={18}
                style={{ margin: "0 5px 0 0" }}
                color="#2f2f2f"
              />
              <input type="search" placeholder="Search projects or tokens" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
