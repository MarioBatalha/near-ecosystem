import React, { useState, useEffect } from "react";

import styles from "./Main-section.module.css";
import Loading from '../Loading/Loading.js';

import AwesomeHome from "../AwesomeHome/AwesomeHome";
//temporary image
import NearProtocol from "../NearProtocol/NearProtocol";
import Trending from "../Trending/Trending";
import Wallet from "../wallet/wallet";

const MainSection = () => {
  const [ data, setData ] = useState(null);
  const [ isLoading, setLoading ] = useState(false);

  useEffect(() => {
    setLoading(true)
    fetch('https://raw.githubusercontent.com/codingshot/near-ecosystem/main/data/combineddata.json')
      .then(res => res.json())
      .then(data => {
        setData(data)
        setLoading(false)
      })
  }, [])

  if (isLoading) return <><Loading /></>
  if (!data) return <p>No data found</p>

  return (
    <section className={styles.mainSection}>
      <div className={styles.mainDescription}>
        <AwesomeHome />
        <Wallet />
        <NearProtocol />
        <Trending />
    
      </div>
    </section>
  );
};

export default MainSection;
