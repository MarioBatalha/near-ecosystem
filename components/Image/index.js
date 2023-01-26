import Image from "next/image"
import styles from "../Menu/Menu.module.css";

const NextImage = ({ Icon, projectName}) => {
    return (
        <Image 
        src={Icon}
        alt={projectName}
        width={30}
        height={30}
        className={styles.contactAvatar} />
    )
}

export default NextImage;