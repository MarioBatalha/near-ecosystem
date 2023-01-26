import Image from "next/image"
import styles from "../Menu/Menu.module.css";

const NextImage = ({ src, alt}) => {
    return (
        <Image src={item.Icon}
        alt={item.projectName}
        width={30}
        height={30}
        className={styles.contactAvatar}></Image>
    )
}

export default NextImage;