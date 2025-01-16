import { useState, useEffect } from "react";
import { fetchUsers } from "@/services/api";
import { UsersProps } from "@/types/user.type";

export const useFetchUsers = (page: number) => {
  const [users, setUsers] = useState<UsersProps[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [hasMore, setHasMore] = useState<boolean>(true);

  const loadUsers = async () => {
    setLoading(true);
    try {
      const newUsers = await fetchUsers(page);
      if (newUsers.length === 0) {
        setHasMore(false); 
        return;
      }
      setUsers((prevUsers) => [...prevUsers, ...newUsers]);
    } catch (error) {
      console.error("Error fetching users:", error);
      setHasMore(false); 
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadUsers();
  }, [page]);

  return { users, loading, hasMore };
};
