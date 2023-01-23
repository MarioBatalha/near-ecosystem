import Image from "next/image";
import styles from "./Menu.module.css";

const Menu = ({ data }) => {
    return (
        <>
            {data.map((item) => (
            <div className={styles.item} key={item.id}>
              <section className={styles.contacts}>
                <Image
                  src={item.Icon}
                  alt={item.projectName}
                  width={30}
                  height={30}
                  className={styles.contactAvatar}
                />
                <span className={styles.contactData}>{item.ProjectName}</span>
                <span className={styles.contactData}>{item.Category}</span>
                <span className={styles.contactData}>{item.ABBV}</span>
              </section>
            </div>
          ))}
        </>
    )
}
export default Menu;