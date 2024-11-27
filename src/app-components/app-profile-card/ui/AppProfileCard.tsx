import { ReactNode } from 'react';
import { Box } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

interface AppProfileCardProps {
  title?: ReactNode,
  image?: string,
  description?: ReactNode,
  actions?: ReactNode,
}

function AppProfileCard({
  title, image, description, actions,
}: AppProfileCardProps) {
  return (
    <Box sx={{
      minHeight: '400px',
      background: 'linear-gradient(103.72deg, rgba(117, 117, 117, 0.18) -2.34%, rgba(145, 145, 145, 0.18) 81.02%)',
      backgroundBlendMode: 'overlay, normal',
      backdropFilter: 'blur(13.5px)',
      borderRadius: '.71rem',
      padding: '1rem',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      color: (theme) => theme.palette.text.secondary,
    }}
    >
      <Box sx={{
        marginBottom: '10px',
        width: '100%',
        minHeight: '230px',
        borderRadius: '.71rem',
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
      }}
      >
        {image
          ? (
            <img
              style={{
                objectFit: 'cover',
                maxHeight: '230px',
                position: 'absolute',
                borderRadius: '.71rem',
              }}
              src={image}
              alt=""
            />
          )
          : (
            <AccountCircleIcon sx={{
              maxWidth: '230px', maxHeight: '230px', width: '100%', height: '100%',
            }}
            />
          )}
      </Box>
      <Box sx={{ marginBottom: '1.42rem' }}>{title}</Box>
      <Box sx={{ marginBottom: '2rem' }}>{description}</Box>
      <Box sx={{ paddingBottom: '6px' }}>{actions}</Box>
    </Box>
  );
}

export default AppProfileCard;
