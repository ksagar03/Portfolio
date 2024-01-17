import styles from "@/components/styles/Raindrop.module.css"

const Rain = ({ left, animationDelay }) => {
    const rainstyle = {
      left: `${left}px`,
      animationDelay: `${animationDelay}s`,
    };
  
    return <div className={styles.drop} rainstyle={rainstyle}></div>;
  };

export default Rain



