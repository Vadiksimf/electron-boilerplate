import StyledSwitchContainer from './StyledSwitch.style';

interface StyledSwitchProps {
  checked: boolean;
  enabled?: boolean;
  handleChange: (arg0: any) => void;
}

const StyledSwitch = (props: StyledSwitchProps) => {
  const { checked, enabled = true, handleChange } = props;

  return (
    <StyledSwitchContainer
      checked={checked}
      onChange={handleChange}
      classes={{
        track: 'custom-switch__track',
        switchBase: 'custom-switch__thumb-wrapper',
        thumb: 'custom-switch__thumb',
        checked: 'custom-switch_checked',
      }}
      disabled={!enabled}
    />
  );
};

StyledSwitch.defaultProps = {
  enabled: true,
};

export default StyledSwitch;
