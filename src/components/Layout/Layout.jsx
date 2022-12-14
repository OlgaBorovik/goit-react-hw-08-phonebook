import { Outlet } from 'react-router-dom';
import { Box } from '@chakra-ui/react';
import { AppBar } from '../Appbar/Appbar';
import { Suspense } from 'react';

export const Layout = () => {
  return (
    <Box style={{ maxWidth: 960, margin: '0 auto', padding: '0 16px' }}>
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      {/* <Toaster position="top-right" reverseOrder={false} /> */}
    </Box>
  );
};