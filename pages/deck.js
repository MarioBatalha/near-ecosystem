import styles from "../styles/Deck.module.css";
import Layout from "../components/Layout";

const deck = () => {
  return (
    <div className={styles.container}>
      <Layout pageTitle="Embed A Deck" />
      <iframe src="" width="1440" height="839" allowFullScreen />
    </div>
  );
};

export default deck;
