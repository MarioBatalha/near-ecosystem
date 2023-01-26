import Link from "next/link";
import styles from "./rank.module.css";

const RankingDetails = ({
  ProjectName,
  Category,
  ABBV,
  Icon,
  Subtitle,
  Description,
}) => {
  return (
    <>
      <div className={styles.item} key={index}>
        <section className={styles.contacts}>
          <img
            src={Icon}
            alt={ProjectName}
            width={30}
            height={30}
            className={styles.contactAvatar}
          />
          <span className={styles.contactData}>{ProjectName}</span>
          <span className={styles.contactData}>{Category}</span>
          <span className={styles.contactData}>{ABBV}</span>
          <Link className="btn btn-primary btn-details">
            <a href={`/items/${id}`}>details</a>
          </Link>
        </section>
      </div>
    </>
  );
};

export default RankingDetails;
