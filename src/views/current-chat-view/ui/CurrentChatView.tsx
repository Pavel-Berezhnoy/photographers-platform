import { Box } from '@mui/material';
import { memo } from 'react';
import CurrentChat from '../../../widgets/current-chat';

function CurrentChatView() {
  return (
    <Box height="100%" className="wrapper" paddingBottom="2.57rem">
      <CurrentChat />
    </Box>
  );
}

export default memo(CurrentChatView);
