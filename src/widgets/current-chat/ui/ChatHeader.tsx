import { observer } from 'mobx-react-lite';
import {
  Box, IconButton, Tooltip, Typography,
} from '@mui/material';
import SatelliteOutlinedIcon from '@mui/icons-material/SatelliteOutlined';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import { useState } from 'react';
import { useStore } from '../../../app/store';
import AttachedFilesDialog from './AttachedFilesDialog';

function ChatHeader() {
  const [toggleAttachedFiles, setToggleAttachedFiles] = useState(false);
  const { chatStore: { getCurrentChat } } = useStore();

  const toggleAttachedFilesHandle = () => setToggleAttachedFiles((prevVal) => !prevVal);
  return (
    <Box sx={{
      borderRadius: '2rem',
      background: 'linear-gradient(99.03deg, #CF2565 4.39%, #C20F78 73.72%)',
      padding: '1rem',
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: '2rem',
    }}
    >
      <Box component="header" sx={{ display: 'flex', alignItems: 'center' }}>
        <Box
          sx={{
            width: '4rem',
            height: '4rem',
            borderRadius: '50%',
            overflow: 'hidden',
          }}
        >
          {getCurrentChat?.second_user.avatar
            ? (
              <img src={getCurrentChat?.second_user.avatar} style={{ objectFit: 'cover' }} alt="avatar" />
            )
            : (
              <AccountCircleIcon sx={{ width: '100%', height: '100%' }} />
            )}
        </Box>
        <Box marginLeft=".5rem">
          <Typography component="h5" fontSize="1rem">
            {`${getCurrentChat?.second_user.name} ${getCurrentChat?.second_user.sur_name}`}
          </Typography>
          <Typography component="h6" sx={{ color: '#B5B5B5' }} fontSize="1rem">
            {getCurrentChat?.second_user.link}
          </Typography>
        </Box>
      </Box>
      <Box sx={{
        display: 'flex',
        alignItems: 'center',
        gap: '1rem',
        marginRight: '1rem',
      }}
      >
        <AttachedFilesDialog open={toggleAttachedFiles} onClose={toggleAttachedFilesHandle} />
        <IconButton
          sx={(theme) => ({
            color: theme.palette.text.secondary,
            background: 'linear-gradient(96.92deg, #FF2A77 34.43%, rgba(255, 0, 168, 0.89) 112.95%)',
            boxShadow: '0px 0px 49.2971px rgba(0, 0, 0, 0.25)',
          })}
          onClick={toggleAttachedFilesHandle}
        >
          <SatelliteOutlinedIcon />
        </IconButton>
        <Tooltip title="Копировать номер телефона" placement="bottom">
          <IconButton
            sx={(theme) => ({
              color: theme.palette.text.secondary,
              background: ' linear-gradient(96.92deg, #FF2A77 34.43%, rgba(255, 0, 168, 0.89) 112.95%)',
              boxShadow: '0px 0px 49.2971px rgba(0, 0, 0, 0.25)',
            })}
          >
            <LocalPhoneIcon />
          </IconButton>
        </Tooltip>
      </Box>
    </Box>
  );
}

export default observer(ChatHeader);
