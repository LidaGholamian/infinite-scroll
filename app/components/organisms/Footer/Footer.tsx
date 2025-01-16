import React from "react";
import styles from "./Footer.module.scss";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <p className={styles["footer__text"]}>
        © 2025 My Next.js App. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
