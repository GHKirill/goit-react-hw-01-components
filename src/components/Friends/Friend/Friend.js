import PropsType from 'prop-types';
import css from 'components/Friends/Friend/Friend.module.css';
import PropTypes from 'prop-types';
import { friendGetColor } from './FriendGetColor';

export function Friend({ avatar, name, isOnline }) {
  return (
    <li className={css.item} key={name}>
      <span
        className={css.status}
        style={{
          backgroundColor: friendGetColor({ isOnline }),
        }}
      ></span>
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
}
Friend.prototype = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool,
};
