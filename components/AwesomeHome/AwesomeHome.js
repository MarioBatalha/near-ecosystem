import Image from "next/image";
import { BsArrowRightShort } from "react-icons/bs";
import { awesomeLinks } from "./AwesomeHome-script";
import styles from './AwesomeHome.module.css';
import NextLink from '../Link/index.js';

const AwesomeHome = () => {
    return (
        <div className={styles.awesomeHome}>
          <h1>
            Explore <NextLink href="/">998</NextLink> curated projects building on Near, Aurora
            and Octopus ecosystem.
          </h1>
          <div className={styles.awesomeLinks}>
            <div className={styles.heroActions}>
              <NextLink  href="/">
                Explore projects
                <BsArrowRightShort size={25} />
              </NextLink>
              <NextLink href="/">
                Newly added <BsArrowRightShort size={25} />
              </NextLink>
            </div>
            <div className={styles.heroActions}>
              {awesomeLinks.map((link) => {
                const { id, text, url, img } = link;
                return (
                  <NextLink href={url} key={id} target="_blank" rel='noreferrer'>
                    <Image
                      src={img}
                      alt={text}
                      className={styles.linkImg}
                      width={30}
                      height={30}
                    />
                    {text}
                    <BsArrowRightShort size={25} />
                  </NextLink>
                );
              })}
            </div>
          </div>
        </div>
    )
}

export default AwesomeHome