import styled from 'vue-styled-components';

export const ItemWrapper = styled('div')`
  width: 230px;
  height: 200px;

  display: flex;
  justify-content: center;
  align-items: center;

  border: 1px solid lightgray;
  border-radius: 0.5rem;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15);

  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  margin-right: 1rem;

  overflow-x: hidden;
`;