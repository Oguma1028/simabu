import styles from "../styles/Home.module.css";

export const Headline = (props) => {
  console.log(props);
  return (
    <div>
      <h1 className={styles.title}>{props.title}</h1>

      <p className={styles.description}>
        Get started by editing{" "}
        <code className={styles.code}>pages/{props.page}</code>
      </p>

      <button onClick={props.onClick}>これ</button>
    </div>
  );
};
