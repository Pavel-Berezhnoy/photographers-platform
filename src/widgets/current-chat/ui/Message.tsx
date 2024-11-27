import React from 'react';
import { Box, Typography } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DoneIcon from '@mui/icons-material/Done';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import { IChatMessage } from '../../../constants/types/chat.d';

interface MessageProps {
  message: IChatMessage,
  isMyMessage: boolean,
}

function Message({ message, isMyMessage }: MessageProps) {
  return (
    <Box
      component="li"
      sx={{
        gap: '1rem',
        display: 'flex',
        marginTop: '1rem',
        alignItems: 'flex-start',
        justifyContent: isMyMessage ? 'flex-end' : 'flex-start',
      }}
    >
      <Box
        sx={{
          width: '4rem',
          height: '4rem',
          minWidth: '4rem',
          borderRadius: '50%',
          overflow: 'hidden',
          order: isMyMessage ? 2 : 1,
        }}
      >
        {message.sender.avatar
          ? (
            <img src={message.sender.avatar} style={{ objectFit: 'cover' }} alt="avatar" />
          )
          : (
            <AccountCircleIcon sx={{ width: '100%', height: '100%' }} />
          )}
      </Box>
      <Box
        sx={{
          padding: '1rem 2.5rem 1rem 1rem',
          borderRadius: '1.5rem',
          position: 'relative',
          display: 'flex',
          order: isMyMessage ? 1 : 2,
          background: 'linear-gradient(114.17deg, rgba(255, 174, 204, 0.3075) 12.81%, rgba(255, 208, 236, 0.3) 107.92%)',
        }}
      >
        <Typography fontSize="1rem">{message.content}</Typography>
        <Box
          sx={{
            position: 'absolute',
            right: '1.28rem',
            bottom: '.5rem',
            display: 'flex',
          }}
          color={({ palette }) => palette.text.secondary}
        >
          {message.viewed ? <DoneAllIcon sx={{ fontSize: '1rem' }} /> : <DoneIcon sx={{ fontSize: '1rem' }} />}
        </Box>
      </Box>
    </Box>
  );
}

export default Message;
