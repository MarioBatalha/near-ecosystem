import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { HiMenuAlt2 } from "react-icons/hi";
import { FaSearch } from "react-icons/fa";

import styles from "./Navbar.module.css";
import links from "./Navbar-script";

import Logo from "../../public/assets/awesomenear-logo.svg";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);
  const router = useRouter();

  const handleToggleLinks = () => {
    setShowLinks(!showLinks);
  };

  const handleMoveTo = e => {
    e.preventDefault();
    router.push(hrel)
  }
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
        <div className={styles.navHeader} ref={linksContainerRef}>
          <Image
            width={200}
            height={50}
            src={Logo}
            className={styles.logo}
            alt="Awesome Near logo"
          />
          <button className={styles.navToggle} onClick={handleToggleLinks}>
            <HiMenuAlt2 />
          </button>
          <ul className={styles.links} ref={linksRef}>
            {links.map((link) => {
              const { id, icon, url, text } = link;
              return (
                <li key={id} className={styles.linksItem}>
                  <Link href={url} onClick={handleMoveTo}>
                    <span>
                      {icon}
                      {text}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className={styles.linksContainer}>
          <Link href="" className={styles.submit}>
          +Submit
          </Link>
          <div className={styles.searchInput}>
            <FaSearch size={18} style={{ margin: "0 5px 0 0",}} color='#2f2f2f' />
            <input type="search" placeholder="Search projects or tokens" />
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
