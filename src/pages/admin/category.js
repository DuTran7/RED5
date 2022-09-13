import Head from 'next/head';
import { Box, Container } from '@mui/material';
import { DashboardLayout } from 'components/layouts/DashboardLayout';
import { AwardListToolbar } from 'components/pages/Admin/Award/AwardListToolbar';
import { AwardListResults } from 'components/pages/Admin/Award/AwardListResults';
import { CategoryListResults } from 'components/pages/Admin/Category/CategoryListResults';
import { CategoryListToolbar } from 'components/pages/Admin/Category/CategoryListToolbar';

const Categories = () => (
  <DashboardLayout>
    <Head>
      <title>Categories | Red5</title>
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
        <CategoryListToolbar />
        <Box sx={{ mt: 3 }}>
          <CategoryListResults categories={[]} />
        </Box>
      </Container>
    </Box>
  </DashboardLayout>
);
Categories.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Categories;
