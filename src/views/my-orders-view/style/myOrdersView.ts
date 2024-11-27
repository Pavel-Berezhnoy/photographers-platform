import { styled } from '@mui/material';

export type StatusBlockType = 'warning' | 'error' | 'info' | 'success'

export const StatusBlock = styled('div', {
  shouldForwardProp: (prop) => prop !== 'color',
})(({ theme, color }) => ({
  backgroundColor: theme.palette[color as StatusBlockType].main,
  display: 'inline-flex',
  padding: '6px 21px',
  borderRadius: '5px',
}));
