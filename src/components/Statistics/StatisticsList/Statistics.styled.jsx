import styled from '@emotion/styled';

const StatList = styled.ul`
  display: flex;
  list-style: none;
  /* width: 250px; */
  padding: 0;
  margin: 0, auto;
`;
const Item = styled.li`
  display: flex;
  flex-basis: calc(100% / 5);
  flex-direction: column;
  /* flex-grow: 2; */

  text-align: center;
  padding: 10px 0;
  color: white;
  /* background-color: grey; */
`;

const Label = styled.span``;

const Percentage = styled.span`
  font-size: 20px;
`;

export { StatList, Item, Label, Percentage };
