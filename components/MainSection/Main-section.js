import React, { useState, useEffect } from "react";
import Image from "next/image";
import { BsArrowRightShort } from "react-icons/bs";
import styles from "./Main-section.module.css";
import  { awesomeLinks } from "./MainSection-script";
import TrendingCard from '../TrendingCard/Trending-card';
import Loading from '../Loading/Loading.js';

//temporary image
import heroImg from "../../public/assets/paras-nft.jpeg";

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
        <div className={styles.awesomeHome}>
          <h1>
            Explore <a href="">998</a> curated projects building on Near, Aurora
            and Octopus ecosystem.
          </h1>
          <div className={styles.awesomeLinks}>
            <div className={styles.heroActions}>
              <a>
                Explore projects
                <BsArrowRightShort size={25} />
              </a>
              <a>
                Newly added <BsArrowRightShort size={25} />
              </a>
            </div>
            <div className={styles.heroActions}>
              {awesomeLinks.map((link) => {
                const { id, text, url, img } = link;
                return (
                  <a href={url} key={id} target="_blank" rel='noreferrer'>
                    <Image
                      src={img}
                      alt={text}
                      className={styles.linkImg}
                      width={30}
                      height={30}
                    />
                    {text}
                    <BsArrowRightShort size={25} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
        <div className={styles.cardContainer}>
          <div className={styles.heroCard}>
            <Image src={heroImg} width={60} height={40} alt='near ecosystem' />
            <h2 className={styles.cardTitle}>
              Near weak ecosystem provide high security
            </h2>
          </div>
          <div className={styles.heroCard}>
            <Image src={heroImg} width={60} height={40} alt='near ecosystem'/>
            <h2 className={styles.cardTitle}>
              Near weak ecosystem provide high security
            </h2>
          </div>
          <div className={styles.heroCard}>
            <Image src={heroImg} width={60} height={40} alt='near ecosystem'/>
            <h2 className={styles.cardTitle}>
              Near weak ecosystem provide high security
            </h2>
          </div>
          <div className={styles.heroCard}>
            <Image src={heroImg} width={60} height={40} alt='near ecosystem'/>
            <h2 className={styles.cardTitle}>
              Near weak ecosystem provide high security
            </h2>
          </div>
        </div>
        <div className={styles.nearProtocol}>
          <div className={styles.nearCard}>
          <h1>2345,67</h1>
          <div className={styles.heroCardDetails}>
            <strong className={styles.heroCardDetailsTitle}>Near price</strong>
            <p className={styles.heroCardDetailsSubtitle}>24H: -234</p>
          </div>
          </div>
          <div className={styles.nearCard}>
          <h1>2345,67</h1>
          <div className={styles.heroCardDetails}>
            <strong className={styles.heroCardDetailsTitle}>Near MarketCap</strong>
            <p className={styles.heroCardDetailsSubtitle}>24H: -234</p>
          </div>
          </div>
          <div className={styles.nearCard}>
          <h1>2345,67</h1>
          <div className={styles.heroCardDetails}>
            <strong className={styles.heroCardDetailsTitle}>Account on NEAR</strong>
            <p className={styles.heroCardDetailsSubtitle}>24H: -234</p>
          </div>
          </div>
          <div className={styles.nearCard}>
          <h1>2345,67</h1>
          <div className={styles.heroCardDetails}>
            <strong className={styles.heroCardDetailsTitle}>Transaction on NEAR</strong>
            <p className={styles.heroCardDetailsSubtitle}>24H: -234</p>
          </div>
          </div>
        </div>
        <div className={styles.trendingContainer}>
          <h2>Trending projects</h2>
          <div className={styles.project}>
          <div className={styles.trendingItem}>
            <Image src={heroImg} className={styles.img} width={60} height={60} alt='near ecosystem' />
            <p>Title</p>
          </div>
          <div className={styles.trendingItem}>
            <Image src={heroImg} className={styles.img} width={60} height={60} alt='near ecosystem' />
            <p>Title</p>
          </div>
          <div className={styles.trendingItem}>
            <Image src={heroImg} className={styles.img} width={60} height={60} alt='near ecosystem' />
            <p>Title</p>
          </div>
          <div className={styles.trendingItem}>
            <Image src={heroImg} className={styles.img} width={60} height={60} alt='near ecosystem' />
            <p>Title</p>
          </div>
          <div className={styles.trendingItem}>
            <Image src={heroImg} className={styles.img} width={60} height={60} alt='near ecosystem'/>
            <p>Title</p>
          </div>
          <div className={styles.trendingItem}>
            <Image src={heroImg} className={styles.img} width={60} height={60} alt='near ecosystem' />
            <p>Title</p>
          </div>
          <div className={styles.trendingItem}>
            <Image src={heroImg} className={styles.img} width={60} height={60} alt='near ecosystem' />
            <p>Title</p>
          </div>
          <div className={styles.trendingItem}>
            <Image src={heroImg} className={styles.img} width={60} height={60} alt='near ecosystem' />
            <p>Title</p>
          </div>
          <div className={styles.trendingItem}>
            <Image src={heroImg} className={styles.img} width={60} height={60} alt='near ecosystem' />
            <p>Title</p>
          </div>
          <div className={styles.trendingItem}>
            <Image src={heroImg} className={styles.img} width={60} height={60} alt='near ecosystem' />
            <p>Title</p>
          </div>
          </div>
        </div>
        <div className={styles.trendingContainer}>
      <div className={styles.trendingCard}>
        <div className={styles.cardHeader}>
          <Image src={heroImg} width={70} height={70} alt='near ecosystem' />
          <h2>NFT</h2>
          <a href='#' className={styles.explore} >
            Explore
            <BsArrowRightShort size={25} />
          </a>
        </div>
        <div className={styles.cardBody}>
          <Image src={heroImg} alt='near ecosystem' width={50} height={50} className={styles.img} />
          <div>
            <h3>Project name</h3>
            <p className={styles.cardBodySubtitle}>Project category</p>
          </div>
        </div>
      </div>
    </div>
      </div>
    </section>
  );
};

export default MainSection;
