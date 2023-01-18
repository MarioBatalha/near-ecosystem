import styles from './Loading.module.css';

const Loading = () => {
    return (
        <div className={styles.loadContainer}>
            <div className={styles.load}>
            <div></div><div></div><div></div><div></div>
            </div>
        </div>
    )
}

export default Loading;