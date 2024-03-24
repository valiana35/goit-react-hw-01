import FriendListItem from '../friendListItem/FriendListItem';
import styles from './FriendList.module.css';

const FriendList = ({ friends }) => {
    return (
        <ul className={styles.friendList}>
        {friends.map(({ id, avatar, name, isOnline}) => {
            return (
             <li key={id} className={styles.friendCard}>
                 <FriendListItem avatar={avatar} name={name} isOnline={isOnline} />
             </li>
            );
        })}
    </ul>
    );
};

export default FriendList;