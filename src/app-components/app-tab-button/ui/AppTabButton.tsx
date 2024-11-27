import { ButtonProps } from '@mui/material';
import React, { ReactNode } from 'react';
import { AppTabBtn } from '../styles/appTabButton';

interface AppTabButtonProps extends ButtonProps {
  children?: ReactNode,
  active?: boolean,
}

function AppTabButton({ active, children, ...props }: AppTabButtonProps) {
  return (
    <AppTabBtn active={active || false} {...props}>{children}</AppTabBtn>
  );
}

export default AppTabButton;
