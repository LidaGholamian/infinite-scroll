export interface UsersProps {
    firstName: string;
    lastName: string;
    username: string;
    gender: 'male' | 'female' | 'other'; // You can expand this based on requirements
    phoneNumber: string;
    email: string;
    picture: string;
    nickname: string;
    address: {
        street: string;
        city: string;
        state: string;
        postalCode: string;
        country: string;
        flag: string;
  }; 

}