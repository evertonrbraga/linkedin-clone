import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;

  > span {
    margin-top: 48px;
    display: flex !important;
  }

  @media (min-width: 1180px) {
    > main {
      margin: 0 30px;
      display: flex;
      justify-content: center;
    }

    > span {
      margin-top: 52px;
      padding: 8px 0;
    }
  }

  .left-column,
  .right-column,
  .banner {
    display: unset;
  }

  @media (max-width: 1180px) {
    .left-column,
    .right-column,
    .banner {
      display: none;
    }
  }
`;
