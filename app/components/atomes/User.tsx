import { UsersProps } from "@/types/user.type";
import styles from "./User.module.scss";
import { FaFire } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";

export const User: React.FC<UsersProps> = ({
  firstName,
  lastName,
  username,
  gender,
  phoneNumber,
  email,
  address,
  picture,
}) => {
  return (
    <div className={styles.user}>
      <div className={styles.user__profile}>
        <img src={picture} alt={`${firstName} ${lastName}`} />
        <div className={styles.user__details}>
          <h3>
            {firstName} {lastName}
          </h3>
          <p className={styles.user__username}>
            {username} / {gender.charAt(0).toUpperCase() + gender.slice(1)}
          </p>
        </div>
      </div>
      <div className={styles.user__info}>
        <p className={styles.user__info__contact}>
          <FaFire />
          {phoneNumber}
        </p>
        <a href={`mailto:${email}`} className={styles.user__info__email}>
          <MdOutlineMailOutline />
          {email}
        </a>
        <p className={styles.user__info__address}>
          {address.street}, {address.city}, {address.state},{" "}
          {address.postalCode}, {address.country}
        </p>
      </div>
      <div className={styles.user__flag}>
        <img src={address.flag} alt={`${address.country} flag`} />
      </div>
    </div>
  );
};
