import PropTypes from 'prop-types';
//import { Friend } from "../Friend/Friend";
import css from 'components/Friends/FriendsList/FriendsList.module.css';
import { friendGetColor } from './FriendGetColor';

export function FriendsList({ friends }) {
  return (
    <ul className={css.friendsList}>
      {friends.map(({ name, avatar, isOnline }) => {
        return (
          // <Friend
          //   avatar={friend.avatar}
          //   name={friend.name}
          //   isOnline={friend.isOnline}
          // />
          <li className={css.item} key={name}>
            <span
              className={css.status}
              style={{
                backgroundColor: friendGetColor({ isOnline }),
              }}
            ></span>
            <img
              className={css.avatar}
              src={avatar}
              alt="User avatar"
              width="48"
            />
            <p className={css.name}>{name}</p>
          </li>
        );
      })}
    </ul>
  );
}

FriendsList.prototype = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ),
};
