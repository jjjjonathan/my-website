import styled from 'styled-components';

export default styled.div`
  position: fixed;
  width: calc(100vw - 100px);
  height: 100vh;
  margin: 0 50px;
  background-color: ${(props) => props.theme.colors.red};
  z-index: -100;
`;
