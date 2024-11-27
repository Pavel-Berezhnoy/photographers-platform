import { ReactNode } from 'react';
import { Box } from '@mui/material';

interface AppOrderCardProps {
  title?: ReactNode,
  price?: ReactNode,
  description?: ReactNode,
  actions?: ReactNode,
  user?: ReactNode,
}

function AppOrderCard({
  title, price, description, actions, user,
}: AppOrderCardProps) {
  return (
    <Box
      sx={{
        background: 'linear-gradient(103.72deg, rgba(117, 117, 117, 0.18) -2.34%, rgba(145, 145, 145, 0.18) 81.02%)',
        backgroundBlendMode: 'overlay, normal',
        backdropFilter: 'blur(13.5px)',
        borderRadius: '.71rem',
      }}
      color={(theme) => theme.palette.text.secondary}
    >
      <Box sx={(theme) => ({
        marginBottom: '1.42rem',
        borderRadius: '.71rem',
        backgroundColor: theme.palette.secondary.main,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1rem',
        width: '100%',
        minHeight: '8.57rem',
      })}
      >
        {title}
      </Box>
      <Box sx={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        marginBottom: '1.42rem',
      }}
      >
        {user}
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        sx={{ marginBottom: '2.42rem' }}
      >
        {description}
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        sx={{ marginBottom: '1.28rem' }}
      >
        {price}
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        sx={{ paddingBottom: '.71rem' }}
      >
        {actions}
      </Box>
    </Box>
  );
}

export default AppOrderCard;
