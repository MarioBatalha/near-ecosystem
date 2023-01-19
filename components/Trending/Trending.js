import Image from "next/image";
import styles from "./Trending.module.css";
import { trendingBlock } from "./Trending-script.js";

const Trending = () => {
  return (
    <div className={styles.trendingContainer}>
      <h2>Trending projects</h2>
      <div className={styles.project}>
        {trendingBlock.map((trend) => {
          const { id, title, img } = trend;
          return (
            <div className={styles.trendingItem} key={id}>
              <Image
                src={img}
                className={styles.img}
                width={60}
                height={60}
                alt="near ecosystem"
              />
              <p>{title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Trending;
