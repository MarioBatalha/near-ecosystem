import styles from "./Menu.module.css";
import NextLink from "../Link";


const baseUrl = 'https://near-api-tau.vercel.app/AllProjects';
export async function getStaticProps (context) {
  const { params } = context;

  const data = await fetch (`${url}/${params.ProjectName}`)

  const project = await data.json();
  return {
    props: { project }
  }
}

export async function getStaticPaths () {
  const response = await fetch(url)

  const data = await response.json();
  const paths = data.map(path => {
    return {
      params: {
        project: `${path.ProjectName}`,
      }
    }
  })
  console.log(paths)
  return {
    paths,
    fallback: false
  }
}

const Menu = ({ data, project }) => {
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
                <NextLink href={`/${item.ProjectName}`}>Details</NextLink>
              </section>
            </div>
         ))}
        </>
    )
}
export default Menu;