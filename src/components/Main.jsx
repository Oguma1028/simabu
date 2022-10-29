import styles from "../styles/Home.module.css";
import { Links } from "./Links";
import { Headline } from "./Headline";

export const Main = () => {
  return (
    <div>
      <main className={styles.main}>
        <Headline title="Index Page" page="index" />
        <Links />
      </main>
    </div>
  );
};
