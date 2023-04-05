import PropTypes from 'prop-types';
import css from 'components/Profile/Profile.module.css';
import { numberFormatted } from './Number_normalize';

export function Profile({ userName, tag, location, avatar, stats }) {
  return (
    <div>
      <div className={css.profile}>
        <div className={css.description}>
          <img src={avatar} alt="User avatar" className={css.avatar} />
          <p className={css.name}>{userName}</p>
          <p className={css.tag}>@{tag}</p>
          <p className={css.location}>{location}</p>
        </div>

        <ul className={css.stats}>
          <li>
            <span className={css.label}>Followers</span>
            <span className={css.quantity}>
              {numberFormatted(stats.followers)}
            </span>
          </li>
          <li>
            <span className={css.label}>Views</span>
            <span className={css.quantity}>{numberFormatted(stats.views)}</span>
          </li>
          <li>
            <span className={css.label}>Likes</span>
            <span className={css.quantity}>{numberFormatted(stats.likes)}</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.exact({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
