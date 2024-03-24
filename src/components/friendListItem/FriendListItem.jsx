import styles from './FriendListItem.module.css';

const FriendListItem = ({ name, avatar, isOnline }) => {
    return (
        <div className={styles.imgCard}>
          <img src={avatar} alt={name} className={styles.imgAvatar}/>
          <p className={styles.friendName}>{name}</p>
          {isOnline ? (<p className={styles.online}>Online</p>) : (<p className={styles.offline}>Offline</p>)}
        </div>
    );
}; 

export default FriendListItem;