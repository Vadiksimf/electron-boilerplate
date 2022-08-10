import { Button as MuiButton } from '@mui/material';
import styled from 'styled-components';

const StyledButton = styled(MuiButton)`
  && {
    background: white;
    color: black;
    padding: 19px 20px;
    width: 100%;
    font-weight: bold;
    font-size: 0.9375rem;
    text-transform: none;
    border-radius: 3px;
    margin-top: 10px;
    max-width: 200px;
  }

  &&:hover {
    background: white;
  }

  @media (min-width: 960px) {
    && {
      font-size: 1.125rem;
    }
  }
`;

export default StyledButton;
