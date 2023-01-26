import React, { useState, useEffect } from "react";
import Image from "next/image";
import Categories from "./../../components/Categories/Categories";
import styles from "./rank.module.css";
import Menu from "../../components/Menu/Menu";


const Ranking = () => {
  const [isLoad, setIslLoad] = useState(true);
  const [data, setData] = useState([]);
  const allCategories = ['ALL','NEAR','AURORA','OCTOPUS', ...new Set(data.map((item) => item.Category))];
  const [categories, setCategories] = useState(allCategories);
  const [menu, setMenu] = useState(data);

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
        .then((data) => {
          setData(data)
        });
  
    } catch (error) {
      console.log(error, "something went wrong");
    }
  };

  const filterItems = (category) => {
    if (category === 'ALL') {
      setMenu(data);
      return;
    }
    const newItems = data.filter(item => item.Series === category);
    setMenu(newItems);
  };

  useEffect(() => {
    handleFetchData();
  }, [data]);

  if (data.length === 0) {
    return <div className={styles.errorProcess}>Error loading data</div>;
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
                placeholder="Search"
              />

              <button
                className={styles.filtersSearchInput}
                type="submit"
              >
              </button>
            </div>
            <Categories categories={categories} filterItems={filterItems} />
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
          <Menu data={menu} />
        </div>
      </div>
    );
  }
};

export default Ranking;
