import styles from './Profile.module.css';

const Profile = ({ name, tag, location, image, stats }) => {
    return (
      <div className={styles.profile}>
        <div>
          <img
            src={image}
            alt={name}
            className={styles.imgProfile}
          />
          <p className={styles.name}>{name}</p>
          <p className={styles.tag}>{tag}</p>
          <p className={styles.location}>{location}</p>
        </div>

        <ul className={styles.stats}>
          <li className={styles.stat}>
            <span className={styles.spanFollowers}>Followers</span>
            <span className={styles.amount}>{stats.followers}</span>
          </li>
          <li className={styles.stat}>
            <span className={styles.span}>Views</span>
            <span className={styles.amount}>{stats.views}</span>
          </li>
          <li className={styles.stat}>
            <span className={styles.span}>Likes</span>
            <span className={styles.amount}>{stats.likes}</span>
          </li>
        </ul>
      </div>      
    );
};

export default Profile;