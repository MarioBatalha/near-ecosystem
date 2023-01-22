import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./rank.module.css";


const Ranking = () => {
  const [error, setError] = useState(null);
  const [isLoad, setIslLoad] = useState(true);
  const [data, setData] = useState([]);

  const handleFetchData = async () => {
    try {
      await fetch(
        "https://raw.githubusercontent.com/codingshot/near-ecosystem/main/data/combineddata.json"
      )
        .then((res) => {
          if (res.ok) {
            return res.json();
          } else {
            throw new Error("Network response error");
          }
        })
        .then((data) => setData(data));
    } catch (error) {
      console.log(error, "something went wrong");
    }
  };

  useEffect(() => {
    handleFetchData();
  }, [data]);
  console.log(data);
  if (error) {
    return <div className={styles.errorProcess}>Error: {error.message}</div>;
  } else if (!isLoad) {
    return <div className={styles.loadProcess}>Loading...</div>;
  } else {
    return (
      <div>
        <div className={styles.container}>
          <div className={styles.filters}>
            <div className={styles.filtersSearch}>
              <input
                type="text"
                className={styles.filtersSearchInput}
                placeholder="Pesquisar"
              />

              <button
                className={styles.filtersSearchInput}
                type="submit"
              >
              </button>
            </div>
            <button className={styles.filtersItem} type="submit">
              All
            </button>

            <button className={styles.filtersItem} type="submit">
              Project Name 
            </button>

            <button className={styles.filtersItem} type="submit">
              Category 
            </button>

            <button className={styles.filtersItem} type="submit">
              ABBV
            </button>
          </div>
          <section className={styles.contacts}>
            <article className={styles.contact}>
              <span ></span>
              <span className={styles.contactData}>Project Name</span>
              <span className={styles.contactData}>Category</span>
              <span className={styles.contactData}>ABBV</span>
            </article>
          </section>
        </div>

        <div>
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
        </div>
      </div>
    );
  }
};

export default Ranking;
