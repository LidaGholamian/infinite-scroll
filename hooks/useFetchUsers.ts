import { useState, useEffect } from "react";
import { fetchUsers } from "@/services/api";
import { UsersProps } from "@/types/user.type";

export const useFetchUsers = (page: number, hasMore: boolean) => {
  const [users, setUsers] = useState<UsersProps[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const loadUsers = async () => {
    setLoading(true);
    try {
      const newUsers = await fetchUsers(page);
      if (newUsers.length === 0) {
        return null; // No more data
      }
      setUsers((prevUsers) => [...prevUsers, ...newUsers]);
      return true;
    } catch (error) {
      console.error("Error fetching users:", error);
      return false;
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (hasMore) {
      loadUsers();
    }
  }, [page, hasMore]);

  return { users, loading, loadUsers };
};
