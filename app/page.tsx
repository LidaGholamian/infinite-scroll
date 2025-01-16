import styles from "@/styles/HomePage.module.scss";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles["home__main"]}>
      <h2 className={styles["home__title"]}>Infinitie User List</h2>
      <p className={styles["home__description"]}>
        Click the button below to view the user list:
      </p>
      <Link href="/userlist">
        <button className={styles["home__button"]}>Go to User List</button>
      </Link>
    </main>
  );
}
