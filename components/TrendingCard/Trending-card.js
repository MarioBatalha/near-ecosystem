import Image from "next/image";
import { BsArrowRightShort } from "react-icons/bs";

import styles from "./Trending-card.module.css";

const img = "/img.png";

const TrendingCard = () => {
  return (
    <div className={styles.trendingContainer}>
      <div className={styles.trendingCard}>
        <div className={styles.cardHeader}>
          <Image src={img} alt="" layout="fill" />
          <h2>NFT</h2>
          <a href='#' className={styles.explore} >
            Explore
            <BsArrowRightShort size={25} />
          </a>
        </div>
        <div className={styles.cardBody}>
          <div>
            <Image src={img} alt="" layout="fill" />
            <h3>Project name</h3>
            <p className={styles.cardBodySubtitle}>Project category</p>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default TrendingCard;
