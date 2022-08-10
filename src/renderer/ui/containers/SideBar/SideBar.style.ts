import styled from 'styled-components';

const StyledSidebar = styled.nav`
  width: 232px;
  padding: 8px 15px;
  z-index: 1301;
  display: flex;
  justify-content: space-evenly;
  align-items: stretch;
  flex-direction: column;
  background-color: ${(props) => props.theme.palette.primary.main};
  border: 1px solid white;
  .nav-menu {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: stretch;
  }
  .nav-link-disabled {
    opacity: 0.1;
  }
  // TODO: replace with variable
  @media (min-width: 960px) {
  }

  // TODO: replace with variable
  @media (min-width: 1200px) {
  }
`;

export default StyledSidebar;
