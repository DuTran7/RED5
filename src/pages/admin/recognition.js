import Head from 'next/head';
import { Box, Container } from '@mui/material';
import { DashboardLayout } from 'components/layouts/DashboardLayout';
import { AwardListToolbar } from 'components/pages/Admin/Award/AwardListToolbar';
import { AwardListResults } from 'components/pages/Admin/Award/AwardListResults';
import { RecognitionListResults } from 'components/pages/Admin/Recognition/RecognitionListResults';
import { RecognitionListToolbar } from 'components/pages/Admin/Recognition/RecognitionListToolbar';

const Recognitions = () => (
  <DashboardLayout>
    <Head>
      <title>Recognitions | Red5</title>
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
        <RecognitionListToolbar />
        <Box sx={{ mt: 3 }}>
          <RecognitionListResults data={[]} />
        </Box>
      </Container>
    </Box>
  </DashboardLayout>
);
Recognitions.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Recognitions;
