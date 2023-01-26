import Link from '../../components/Link';
import styles from "./rank.module.css";
import NextImage from '../../components/Image';

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
          <NextImage
            src={Icon}
            alt={ProjectName}
            className={styles.contactAvatar}
          />
          <span className={styles.contactData}>{ProjectName}</span>
          <span className={styles.contactData}>{Category}</span>
          <span className={styles.contactData}>{ABBV}</span>
          <Link className="btn btn-primary btn-details" href={`/items/${id}`}>
            details
          </Link>
        </section>
      </div>
    </>
  );
};

export default RankingDetails;
