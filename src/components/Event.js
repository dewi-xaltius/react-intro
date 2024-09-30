import styles from './Button.module.css';

function Event() {
  const handleClick = () => {
    console.log('Button clicked!');
  };
 
  const handleMouseOver = () => {
    console.log('Mouse over the button!');
  };
 
  return (
    <button 
        className={styles.button}
        onClick={handleClick} 
        onMouseOver={handleMouseOver}>
      Click Me
    </button>
  );
}
 
export default Event;
 
 
