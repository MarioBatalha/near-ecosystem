import NextLink from '../../components/Link/index.js';
import styles from "./rank.module.css";
import Image from 'next/image';

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
        <Image 
        src={Icon}
        alt={ProjectName}
        width={30}
        height={30}
        className={styles.contactAvatar} 
          />
          <span className={styles.contactData}>{ProjectName}</span>
          <span className={styles.contactData}>{Category}</span>
          <span className={styles.contactData}>{ABBV}</span>
          <NextLink  href={`/items/${id}`}>
            details
          </NextLink>
        </section>
      </div>
    </>
  );
};

export default RankingDetails;
