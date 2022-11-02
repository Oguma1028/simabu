import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Footer } from "../components/Footer";
import { Main } from "../components/Main";
import { Header } from "../components/Header";
import { useCallback, useEffect, useState } from "react";

export default function Index() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  const [isShow, setIsShow] = useState(true);

  const handleClick = useCallback(() => {
    console.log(count);
    if (count < 10) {
      setCount((count) => count + 1);
    }
  }, [count]);

  const handleTextChange = useCallback((e) => {
    if (e.target.value.length > 5) {
      alert("5文字以下にしてください");
      return;
    }
    setText(e.target.value.trim());
  }, []);

  const handleDisplay = useCallback(() => {
    setIsShow((isShow) => !isShow);
  }, [isShow]);

  return (
    <div className={styles.container}>
      <Head>
        <title>Index Page</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <input type="text" value={text} onChange={handleTextChange} />
      <button onClick={handleClick}>増えるよ</button>
      <button onClick={handleDisplay}>{isShow ? "非表示" : "表示"}</button>
      <p>{isShow ? count : null}</p>
      <Main />
      <Footer />
    </div>
  );
}
