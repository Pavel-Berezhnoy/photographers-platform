import { ButtonProps } from '@mui/material';
import { AppBtn } from '../styles/appButton';

type IAppButton = ButtonProps

function AppButton(props: IAppButton) {
  const { children } = props;
  return (
    <AppBtn {...props}>{children}</AppBtn>
  );
}

export default AppButton;
