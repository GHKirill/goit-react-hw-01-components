import PropTypes from 'prop-types';
import { numberFormatted } from './Number_normalize';
import {
  ProfileTag,
  Description,
  Image,
  Name,
  Tag,
  Location,
  Stats,
  Label,
  Quantity,
} from './Profile.styled';

export function Profile({ userName, tag, location, avatar, stats }) {
  return (
    <div>
      <ProfileTag>
        <Description>
          <Image src={avatar} alt="User avatar" />
          <Name>{userName}</Name>
          <Tag>@{tag}</Tag>
          <Location>{location}</Location>
        </Description>

        <Stats>
          <li>
            <Label>Followers</Label>
            <Quantity>{numberFormatted(stats.followers)}</Quantity>
          </li>
          <li>
            <Label>Views</Label>
            <Quantity>{numberFormatted(stats.views)}</Quantity>
          </li>
          <li>
            <Label>Likes</Label>
            <Quantity>{numberFormatted(stats.likes)}</Quantity>
          </li>
        </Stats>
      </ProfileTag>
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
