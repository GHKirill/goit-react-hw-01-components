import styled from '@emotion/styled';

export const TransactionsHistory = styled.table`
  width: 500px;
  text-align: center;
  margin: 10px auto;
  box-shadow: 0px 3px 8px -4px #000000;
  table-layout: fixed;

  & thead {
    color: white;
    background-color: #1bb1e8;
    text-transform: uppercase;
    font-size: 12px;
    height: 50px;
  }

  & td {
    text-align: center;
    padding: 20px;
    font-weight: 300;
    width: 100%;
  }

  & > tbody > tr :first-of-type {
    text-transform: capitalize;
    text-align: left;
    padding-left: 60px;
  }
`;
