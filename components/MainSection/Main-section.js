import React, { useState, useEffect } from "react";
import Image from "next/image";
import { BsArrowRightShort } from "react-icons/bs";
import styles from "./Main-section.module.css";
import  { awesomeLinks } from "./MainSection-script";
import TrendingCard from '../TrendingCard/Trending-card';
import Loading from '../Loading/Loading.js';

import AwesomeHome from "../AwesomeHome/AwesomeHome";
import Wallet from '../Wallet/Wallet';
//temporary image
import heroImg from "../../public/assets/paras-nft.jpeg";
import NearProtocol from "../NearProtocol/NearProtocol";
import Trending from "../Trending/Trending";

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
