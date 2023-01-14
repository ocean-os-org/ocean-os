import { PropsWithChildren } from 'react';
import { Outlet } from 'react-router-dom';

import { Box } from '@mui/material';

const BaseLayout = ({ children }: PropsWithChildren<{}>) => {
  return (
    <Box
      sx={{
        flex: 1,
        height: '100%'
      }}
    >
      {children || <Outlet />}
    </Box>
  );
};

export default BaseLayout;
