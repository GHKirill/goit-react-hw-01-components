import styled from '@emotion/styled';

const ListOfFriends = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  list-style: none;
`;
const Friend = styled.li`
  display: flex;
  justify-content: space-between;
  width: 150px;
  margin: 0 auto;
  padding: 10px 20px;
  box-shadow: 0px 3px 8px -4px #000000;
`;

const Status = styled.span`
  align-self: center;
  display: block;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  // background-color: green;
  background-color: ${({ isOnline }) => (isOnline ? 'green' : 'red')};
`;
const Image = styled.img`
  border-radius: 10%;
`;

const Name = styled.p`
  text-align: center;
`;

export { ListOfFriends, Friend, Status, Image, Name };
