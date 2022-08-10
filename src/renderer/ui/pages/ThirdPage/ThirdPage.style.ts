import styled from 'styled-components';

const StyledThirdPage = styled.div`
  padding: 0 50px;
  align-self: start;
  justify-self: stretch;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  row-gap: 40px;
  width: calc(100% - 232px);
  height: 100%;
  overflow-y: scroll;
  background-color: ${(props) => props.theme.palette.primary.main};
`;

export default StyledThirdPage;
