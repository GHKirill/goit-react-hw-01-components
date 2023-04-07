import PropTypes from 'prop-types';
import {
  ListOfFriends,
  Friend,
  Status,
  Image,
  Name,
} from './FriendsList.styled';

export function FriendsList({ friends }) {
  return (
    <ListOfFriends>
      {friends.map(({ name, avatar, isOnline, id }) => {
        return (
          <Friend key={id}>
            <Status isOnline={isOnline}></Status>
            <Image src={avatar} alt="User avatar" width="48" />
            <Name>{name}</Name>
          </Friend>
        );
      })}
    </ListOfFriends>
  );
}

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};
