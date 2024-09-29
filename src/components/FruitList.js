import styles from './Button.module.css';

const FruitsList = () => {
    const fruits = ['Apple', 'Banana', 'Orange'];
    return (
      <ul>
        {fruits.map((fruit, index) => (
          <button 
            className={styles.button} 
            key={index}>
            {fruit}
          </button>  
          
        ))}
      </ul>
    );
  };

export default FruitsList;