import axios from "axios";

export const fetchUsers = async (page: number) => {
  const { data } = await axios.get(`https://randomuser.me/api/`, {
    params: {
      results: 10,
      page,
    },
  });
  return data.results;
};
