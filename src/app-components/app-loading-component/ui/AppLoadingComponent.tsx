import { Box, CircularProgress } from '@mui/material';
import { ReactNode, memo } from 'react';

interface AppLoadingComponentProps {
  isLoading: boolean,
  children?: ReactNode,
}

function AppLoadingComponent({ isLoading = false, children }: AppLoadingComponentProps) {
  return (
    <>
      {isLoading
        ? (
          <Box sx={{
            display: 'flex',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
          }}
          >
            <CircularProgress color="secondary" />
          </Box>
        )
        : children}
    </>
  );
}

export default memo(AppLoadingComponent);
