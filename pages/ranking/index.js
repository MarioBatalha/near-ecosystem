import React, { useState, useEffect } from 'react';
import styles from'./rank.module.css'

const Ranking = () => {
  const [ error, setError ] = useState(null)
  const [isLoad, setIslLoad] = useState(false)
  const [data, setData] = useState([])

  const handleFetchData = async () => {
    try {
        await fetch("https://raw.githubusercontent.com/codingshot/near-ecosystem/main/data/combineddata.json")
        .then((res) => {
          if (res.ok) {
            return res.json();
          } else {
            throw new Error("Network response error");
          }
        })
        .then((data) => setData(data));
    } catch (error) {
      console.log(error, "Erro ao carregar dados ");
    }
  }
  
 useEffect(() => {
    handleFetchData();
 },[data])
    console.log(data)
      if(error){
        return <div className={styles.errorProcess}>Error: {error.message}</div>
      }else if(isLoad){
        return <div className={styles.loadProcess}>Loading...</div>
      }else{
      return (
        <div>
        <div className={styles.container}>
          <section className={styles.contacts}>
            <article className={styles.contact}>
              <span className={styles.contact__avatar}></span>
              <span className={styles.contact__data}>Project Name</span>
              <span className={styles.contact__data}>Category</span>
              <span className={styles.contact__data}>Subtitle</span>             
            </article>
          </section>
        </div>

      <div>
		  {data.map((item) => (	
		  <div className={styles.item} key={item.id}>
          <section className={styles.contacts}>
			  <img className={styles.contact__avatar} src={item.Icon} alt=""></img>
              <span className={styles.contact__data}>{item.ProjectName}</span>
              <span className={styles.contact__data}>{item.Category}</span>
              <span className={styles.contact__data}>{item.ABBV}</span>
		  </section>
		</div>
		))}
		</div>
    </div>);	
    }
}

export default Ranking;