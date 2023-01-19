import styles from "./NearProtocol.module.css";
import { statsNumber } from "./NearProtol-script";
const NearProtocol = () => {
  return (
    <div className={styles.nearProtocol}>
      {statsNumber.map((stats) => {
        const { id, value, description, subtitle } = stats;
        return (
          <div className={styles.nearCard} key={id}>
            <h1>{value}</h1>
            <div className={styles.heroCardDetails}>
              <strong className={styles.heroCardDetailsTitle}>
                {description}
              </strong>
              <p className={styles.heroCardDetailsSubtitle}>{subtitle}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default NearProtocol;
