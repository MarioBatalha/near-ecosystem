import styles from './Categories.module.css';

const Categories = ({ categories, filterItems }) => {
  return (
    <>
      {categories.map((category, index) => {
        return (
          <button
            key={index}
            className={styles.filtersItem}
            type="submit"
            onClick={() => filterItems(category)}
          >
            {category}
          </button>
        );
      })}
    </>
  );
};
export default Categories;