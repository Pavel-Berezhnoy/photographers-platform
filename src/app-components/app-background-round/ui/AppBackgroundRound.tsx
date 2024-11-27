import { Box } from '@mui/material';

function AppBackgroundRound() {
  return (
    <Box
      sx={(theme) => ({
        boxShadow: '0px 0px 92px 123px #1E13FF',
        backgroundColor: theme.palette.secondary.main,
        opacity: '.1',
        position: 'absolute',
        maxWidth: '45.21rem',
        width: '100%',
        height: '100%',
        maxHeight: '45.21rem',
        borderRadius: '50%',
        pointerEvents: 'none',
        left: '50%',
        transform: 'translateX(-60%)',
        zIndex: '0',
      })}
    />
  );
}

export default AppBackgroundRound;
