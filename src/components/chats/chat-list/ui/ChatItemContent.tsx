import { Box, Typography } from '@mui/material';
import { memo } from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

interface ChatItemContentProps {
  avatar: string,
  name: string,
  surName: string,
  link: string,
}

function ChatItemContent({
  avatar, name, surName, link,
}: ChatItemContentProps) {
  return (
    <>
      <Box
        sx={{
          width: '4rem',
          height: '4rem',
          borderRadius: '50%',
          overflow: 'hidden',
        }}
      >
        {avatar
          ? (
            <img src={avatar} style={{ objectFit: 'cover' }} alt="avatar" />
          )
          : (
            <AccountCircleIcon sx={{ width: '100%', height: '100%' }} />
          )}
      </Box>
      <Box marginLeft=".5rem">
        <Typography component="h5" fontSize="1rem">
          {name}
          {' '}
          {surName}
        </Typography>
        <Typography component="h6" sx={{ color: '#B5B5B5' }} fontSize="1rem">
          {link}
        </Typography>
      </Box>
    </>
  );
}

export default memo(ChatItemContent);
