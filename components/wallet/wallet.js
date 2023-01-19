import Image from 'next/image'
import styles from "./wallet.module.css";

import { defiLinks } from "./wallet-script";

const Wallet = () => {
  return (
    <div className={styles.cardContainer}>
      {defiLinks.map((link) => {
        const { id, description, img } = link;
        return (
          <div className={styles.heroCard} key={id}>
            <Image src={img} width={60} height={40} alt="near ecosystem" />
            <h2 className={styles.cardTitle}>
              {description}
            </h2>
          </div>
        );
      })}
    </div>
  );
};

export default Wallet;
