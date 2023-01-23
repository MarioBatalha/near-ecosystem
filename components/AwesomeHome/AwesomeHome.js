import Image from "next/image";
import { BsArrowRightShort } from "react-icons/bs";
import { awesomeLinks } from "./AwesomeHome-script";
import styles from './AwesomeHome.module.css';
const AwesomeHome = () => {
    return (
        <div className={styles.awesomeHome}>
          <h1>
            Explore <a href="">998</a> curated projects building on Near, Aurora
            and Octopus ecosystem.
          </h1>
          <div className={styles.awesomeLinks}>
            <div className={styles.heroActions}>
              <a>
                Explore projects
                <BsArrowRightShort size={25} />
              </a>
              <a>
                Newly added <BsArrowRightShort size={25} />
              </a>
            </div>
            <div className={styles.heroActions}>
              {awesomeLinks.map((link) => {
                const { id, text, url, img } = link;
                return (
                  <a href={url} key={id} target="_blank" rel='noreferrer'>
                    <Image
                      src={img}
                      alt={text}
                      className={styles.linkImg}
                      width={30}
                      height={30}
                    />
                    {text}
                    <BsArrowRightShort size={25} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
    )
}

export default AwesomeHome