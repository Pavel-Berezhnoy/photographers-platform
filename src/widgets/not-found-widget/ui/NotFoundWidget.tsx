import { Box, Typography } from '@mui/material';
import { ReactNode } from 'react';

interface NotFoundWidgetProps {
  children?: ReactNode,
  title?: string,
  isNotFound?: boolean,
}

function NotFoundWidget({
  children,
  title = 'Такой страницы или пользователя не существует',
  isNotFound = false,
}: NotFoundWidgetProps) {
  return (
    <>
      {isNotFound
        ? (
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            flex="1"
          >
            <Typography sx={{ fontSize: '2rem', opacity: '.5' }}>
              {title}
            </Typography>
          </Box>
        )
        : children}
    </>
  );
}

export default NotFoundWidget;
