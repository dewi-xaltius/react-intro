import styles from './Button.module.css';

const ConditionalComponent = ({ isAdmin }) => {
    return (
      <div>
        <h1>User Panel</h1>
        {isAdmin && <button className={styles.button}>Admin Settings</button>}
      </div>
    );
  };

  export default ConditionalComponent;