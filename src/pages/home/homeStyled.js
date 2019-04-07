import styled from 'vue-styled-components';

export const HomeWrapper = styled('div')`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const ReposWrapper = styled('div')`
  & > .drags {
    margin-top: 0.5rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-start;
  }
`;