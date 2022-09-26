import React from "react";
import styles from "../styles/Home.module.css";

export const Links = () => {
  const ITEMS = [
    {
      url: "https://nextjs.org/docs",
      title: "Documentation →",
      text: "Find in-depth information about Next.js features and API.",
    },
    {
      url: "https://nextjs.org/learn",
      title: "Learn →",
      text: "Learn about Next.js in an interactive course with quizzes!",
    },
    {
      url: "https://github.com/vercel/next.js/tree/canary/examples",
      title: "Examples →",
      text: "Discover and deploy boilerplate example Next.js projects.",
    },
    {
      url: "https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
      title: "Deploy →",
      text: "Instantly deploy your Next.js site to a public URL with Vercel.",
    },
  ];
  return (
    <div className={styles.grid}>
      {ITEMS.map((item) => {
        return (
          <a key={item.url} href={item.url} className={styles.card}>
            <h2>{item.title}</h2>
            <p>{item.text}</p>
          </a>
        );
      })}
    </div>
  );
};
