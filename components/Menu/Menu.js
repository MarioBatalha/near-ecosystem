import styles from "./Menu.module.css";

const Menu = ({ data }) => {
    return (
        <>
            {data.map((item) => (
            <div className={styles.item} key={item.id}>
              <section className={styles.contacts}>
                <img
                  width={30}
                  height={30}
                  className={styles.contactAvatar}
                  src={item.Icon}
                  alt={item.projectName}
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