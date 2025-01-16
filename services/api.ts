
import { UsersProps } from '@/types/user.type';
import axios from 'axios';

export const fetchUsers = async (page: number): Promise<UsersProps[]> => {
  const { data } = await axios.get('https://randomuser.me/api/', {
    params: {
      results: 10,
      page,
    },
  });

  // Map the API response to your User interface, with default values for missing data
  const users: UsersProps[] = data.results.map((user: any): UsersProps => {
    const countryCode = user.location?.country?.toLowerCase().slice(0, 2); // Get the first two letters as country code
    const flagUrl = countryCode ? `https://flagcdn.com/w320/${countryCode}.png` : ''; // Fetch the flag image from flagcdn

    return {
      firstName: user.name.first,
      lastName: user.name.last,
      username: user.login.username,
      gender: user.gender,
      phoneNumber: user.phone,
      email: user.email,
      picture: user.picture?.large || '',
      nickname: user.login?.nickname || 'N/A',
      address: {
        street: user.location?.street?.name || 'N/A',
        city: user.location?.city || 'N/A',
        state: user.location?.state || 'N/A',
        postalCode: user.location?.postcode || 'N/A',
        country: user.location?.country || 'N/A',
        flag: flagUrl, // Add the flag URL
      },
    };
  });

  return users;
};