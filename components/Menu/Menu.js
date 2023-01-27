import styles from "./Menu.module.css";

const Menu = ({ data }) => {
    return (
        <>
            {data.map((item, index) => (
            <div className={styles.item} key={index}>
              <section className={styles.contacts}>
                <img
                  src={item.Icon}
                  alt={item.ProjectName}
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