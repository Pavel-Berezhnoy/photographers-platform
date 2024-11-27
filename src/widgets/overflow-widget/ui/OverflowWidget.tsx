import { Box } from '@mui/material';
import { ReactNode } from 'react';

interface OverflowWidgetProps {
  children?: ReactNode
}

function OverflowWidget({ children }: OverflowWidgetProps) {
  return (
    <Box height="100%" flex="1" overflow="hidden" display="flex" flexDirection="column">
      <Box height="100%" overflow="auto">{children}</Box>
    </Box>
  );
}

export default OverflowWidget;
