import Head from 'next/head';
import { Box, Container } from '@mui/material';
import { DashboardLayout } from 'components/layouts/DashboardLayout';
import { PressListToolbar } from 'components/pages/Admin/Press/PressListToolbar';
import { PressListResults } from 'components/pages/Admin/Press/PressListResults';

const Teams = () => (
  <DashboardLayout>
    <Head>
      <title>Teams | Red5</title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8,
        height: '80vh',
      }}
    >
      <Container maxWidth={false}>
        <PressListToolbar />
        <Box sx={{ mt: 3 }}>
          <PressListResults data={[]} />
        </Box>
      </Container>
    </Box>
  </DashboardLayout>
);
Teams.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Teams;
