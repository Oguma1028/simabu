import styles from "../styles/Home.module.css";
import { Links } from "../components/Links";
import { Headline } from "../components/Headline";

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
