import { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Navbar } from 'components/pages/Admin/Navbar';
import { Sidebar } from 'components/pages/Admin/Sidebar';
import { theme } from 'theme';
import { useSession } from 'next-auth/client';
import { useRouter } from 'next/router';
import { useSnackbar } from 'notistack';

const DashboardLayoutRoot = styled('div')(({ theme }) => ({
  display: 'flex',
  flex: '1 1 auto',
  maxWidth: '100%',
  paddingTop: 64,
  [theme.breakpoints.up('lg')]: {
    paddingLeft: 280,
  },
}));

export const DashboardLayout = (props) => {
  const { enqueueSnackbar } = useSnackbar();
  const { children } = props;
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [session] = useSession();
  const router = useRouter();
  useEffect(() => {
    console.log(session?.user);
    if (new Date().getTime() > session?.user?.expiredToken) {
      enqueueSnackbar('Please login and try again', { variant: 'error' });
      router.push('/admin/login');
      return;
    }
  }, []);

  return (
    <>
      <DashboardLayoutRoot>
        {new Date().getTime() <= session?.user?.expiredToken && (
          <Box
            sx={{
              display: 'flex',
              flex: '1 1 auto',
              flexDirection: 'column',
              width: '100%',
              background: '#fbfbfb',
            }}
          >
            {children}
          </Box>
        )}
      </DashboardLayoutRoot>
      <Navbar onSidebarOpen={() => setSidebarOpen(true)} />
      <Sidebar onClose={() => setSidebarOpen(false)} open={isSidebarOpen} />
    </>
  );
};
