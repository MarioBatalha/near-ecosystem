import React from "react";
import Link from "next/link";
import Image from "next/image";
import { BsArrowRightShort } from "react-icons/bs";
import styles from "./Main-section.module.css";
import awesomeLinks from "./MainSection-script";

import Navbar from "../Navbar/Navbar";

const MainSection = () => {
  return (
    <section className={styles.mainSection}>
      <Navbar />
      <div className={styles.mainDescription}>
        <div className={styles.awesomeHome}>
          <h1>
            Explore <a href="">998</a> curated projects building on Near, Aurora
            and Octopus ecosystem.
          </h1>
          <div className={styles.awesomeLinks}>
            <div className={styles.heroActions}>
                <a>Explore projects<BsArrowRightShort size={25} /></a>
                <a>Newly added <BsArrowRightShort size={25} /></a>
            </div>
            <div className={styles.heroActions}>
            {awesomeLinks.map((link) => {
              const { id, text, url, img } = link;
              return (
                <a href={url} key={id} target='_blank'>
                  <Image src={img} alt={text} className={styles.linkImg} width={30} height={30} />
                  {text}
                  <BsArrowRightShort size={25} />
                </a>
              );
            })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainSection;
