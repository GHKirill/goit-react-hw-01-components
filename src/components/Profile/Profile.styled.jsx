import styled from '@emotion/styled';

const ProfileTag = styled.div`
  width: 220px;
  /* margin: 20px auto; */
  border-radius: 4px;
  padding: 20px;
  box-shadow: 2px 1px 14px -4px #000000;
`;
const Description = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 40px;
`;

const Image = styled.img`
  display: block;
  width: 130px;
  height: auto;
  border-radius: 50%;
  margin: 0, auto;
  align-self: center;
  margin-bottom: 20px;
`;

const Name = styled.p`
  font-size: 24px;
  font-weight: 700;
  text-align: center;
  margin: 0;
  padding: 0;
  margin-bottom: 10px;
`;
const Tag = styled.p`
  font-size: 18px;
  color: grey;
  text-align: center;
  margin: 0;
  padding: 0;
`;
const Location = styled.p`
  font-size: 18px;
  color: grey;
  text-align: center;
  margin: 0;
  padding: 0;
`;

const Stats = styled.ul`
  display: flex;
  justify-content: space-between;
  list-style: none;
  padding: 0;
  margin: 0;
`;

const Label = styled.span`
  display: block;
  text-align: center;
  color: gray;
  margin-bottom: 10px;
`;

const Quantity = styled.span`
.quantity {
  display: block;
  text-align: center;
  font-size: 18px;
  font-weight: 500;
`;
export {
  ProfileTag,
  Description,
  Image,
  Name,
  Tag,
  Location,
  Stats,
  Label,
  Quantity,
};
