import Head from 'next/head';
import { Box, Container } from '@mui/material';
import { DashboardLayout } from 'components/layouts/DashboardLayout';
import { DetailCategoryListToolbar } from 'components/pages/Admin/DetailCategory/DetailCategoryListToolbar';
import { DetailCategoryListResults } from 'components/pages/Admin/DetailCategory/DetailCategoryListResults';

const DetailCategory = () => (
  <DashboardLayout>
    <Head>
      <title>Detail Category | Red5</title>
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
        <DetailCategoryListToolbar />
        <Box sx={{ mt: 3 }}>
          <DetailCategoryListResults data={[]} />
        </Box>
      </Container>
    </Box>
  </DashboardLayout>
);
DetailCategory.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default DetailCategory;
