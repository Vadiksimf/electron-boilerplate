import styled from 'styled-components';

const StyledLinkPage = styled.div`
  padding: 0 50px;
  align-self: start;
  justify-self: stretch;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: calc(100% - 232px);
  height: 100%;
  overflow-y: scroll;
  background-color: ${(props) => props.theme.palette.primary.main};
  .title {
    margin: 0;
    margin-bottom: 30px;
    margin-top: 30px;
  }
  .log {
    display: flex;
    flex-direction: column;
    margin-top: 40px;
    &__title {
    }
  }
  .log__content {
    display: block;
    border-radius: 5px;
    background-color: white;
    color: black;
    min-height: 90px;
    max-height: 300px;
    margin-bottom: 40px;
    overflow-y: scroll;
    padding: 10px;
  }
  .log__list {
    padding: 0;
    margin: 0;
    height: auto;

    &__item {
      margin: 5px 0;

      &__error {
        color: red;
      }
    }
  }
`;

export default StyledLinkPage;
