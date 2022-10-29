import Link from "next/link";
import React from "react";

export const Header = () => {
  return (
    <header>
      <Link href="/">インデックスページ</Link>
      <Link href="/about">アバウトページ</Link>
    </header>
  );
};
