import React, { useState, useContext, useEffect } from 'react'
import { useCallback } from 'react';

const url = 'https://near-api-tau.vercel.app/AllProjects';
const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('a')
  const [items, setItems] = useState([]);
  const [data, setData] = useState([]);

  const handleFetchData = async () => {
    try {
      await fetch(`${url}`)
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

  const fetchItems = useCallback( async () => {
    setLoading(true)
    try {
      const response = await fetch(`${url}`)

      const data = await response.json()
    
      if (data) {
        const newProject = data.map((item) => {
          const {
            ProjectName,
            Category,
            Subtitle,
            icon,
            description
          } = item

          return {
            ProjectName,
            Category,
            Subtitle,
            icon,
            description
          }
        })
        setItems(newProject)
      } else {
        setItems([])
      }
      setLoading(false)
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  },[searchTerm]);

  const filterItems = (category) => {
    if (category === 'ALL') {
      setMenu(data);
      return;
    }
    const newItems = data.filter(item => item.Series === category);
    setMenu(newItems);
  };

  useEffect(() => {
    handleFetchData()
    fetchItems()
  }, [searchTerm,fetchItems])

  console.log(data)
  return (
    <AppContext.Provider
      value={{ loading, items, data, handleFetchData, searchTerm, setSearchTerm, filterItems }}
    >
      {children}
    </AppContext.Provider>
  )
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
