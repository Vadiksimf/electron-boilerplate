import styled from '@emotion/styled';
import Switch from '@mui/material/Switch';

const StyledSwitch = styled(Switch)`
  height: 46px;
  width: 66px;
  .custom-switch {
    &__track {
      border: 1px solid #f1f1f1;
      border-radius: 20px;
      background: #f1f1f1;
      opacity: revert;
    }
    &__thumb-wrapper {
      color: #2b2a2a;

      top: 5px;
      left: 5px;
      &:hover {
        background: revert;
      }
    }
    &__thumb {
      width: 18px;
      height: 18px;
      box-shadow: 0px 5px 10px rgba(16, 16, 16, 0.1);
    }
  }
  .custom-switch__thumb-wrapper.custom-switch_checked {
    color: #f1f1f1;
    &__thumb {
      border: 1px solid #2b2a2a;
    }
    & + span {
      opacity: revert;
    }
  }
`;

export default StyledSwitch;
