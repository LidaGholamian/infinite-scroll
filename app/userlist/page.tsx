"use client";

import React, { useState } from "react";
import { User } from "../components/atomes/User";
import { useFetchUsers } from "@/hooks/useFetchUsers";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import styles from "./UserList.module.scss";

const UserList: React.FC = () => {
  const [page, setPage] = useState<number>(1);

  const { users, loading, hasMore } = useFetchUsers(page);

  const loadingRef = useIntersectionObserver(loading, hasMore, () => {
    if (hasMore && !loading) {
      setPage((prevPage) => prevPage + 1);
    }
  });

  return (
    <div className={styles.userList}>
      <div className={styles.userList__container}>
        {users.map((user, index) => (
          <User key={index} {...user} />
        ))}
      </div>

      {hasMore && (
        <div
          ref={loadingRef}
          className={styles.userList__loading}
          aria-live="polite"
        >
          {loading && <p>Loading...</p>}
        </div>
      )}
      {!hasMore && (
        <div className={styles.userList__end}>
          <p>No more users to display.</p>
        </div>
      )}
    </div>
  );
};

export default UserList;
