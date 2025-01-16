"use client";

import { fetchUsers } from "@/services/api";
import React, { useState, useEffect, useRef } from "react";
import { User } from "../components/atomes/User";
import { UsersProps } from "@/types/user.type";
import styles from "./UserList.module.scss";

const UserList: React.FC = () => {
  const [users, setUsers] = useState<UsersProps[]>([]);
  const [page, setPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);
  const [hasMore, setHasMore] = useState<boolean>(true);

  const observerRef = useRef<IntersectionObserver | null>(null);
  const loadingRef = useRef<HTMLDivElement | null>(null);

  // Fetch users
  const loadUsers = async () => {
    setLoading(true);
    try {
      const newUsers = await fetchUsers(page);
      if (newUsers.length === 0) {
        setHasMore(false); // No more data to fetch
      } else {
        setUsers((prevUsers) => [...prevUsers, ...newUsers]);
      }
    } catch (error) {
      console.error("Error fetching users:", error);
    } finally {
      setLoading(false);
    }
  };

  // Trigger loadUsers when the page changes
  useEffect(() => {
    if (hasMore) {
      loadUsers();
    }
  }, [page]);

  // Set up Intersection Observer
  useEffect(() => {
    const options = {
      root: null, // Viewport as root
      rootMargin: "0px",
      threshold: 1.0, // Trigger when 100% visible
    };

    const callback: IntersectionObserverCallback = (entries) => {
      const entry = entries[0];
      if (entry.isIntersecting && !loading && hasMore) {
        setPage((prevPage) => prevPage + 1);
      }
    };

    if (loadingRef.current) {
      observerRef.current = new IntersectionObserver(callback, options);
      observerRef.current.observe(loadingRef.current);
    }

    return () => {
      if (observerRef.current && loadingRef.current) {
        observerRef.current.unobserve(loadingRef.current);
      }
    };
  }, [loading, hasMore]);

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
