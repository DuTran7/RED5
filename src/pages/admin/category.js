import Head from 'next/head';
import { Box, Container } from '@mui/material';
import { DashboardLayout } from 'components/layouts/DashboardLayout';
import { AwardListToolbar } from 'components/pages/Admin/Award/AwardListToolbar';
import { AwardListResults } from 'components/pages/Admin/Award/AwardListResults';
import { CategoryListResults } from 'components/pages/Admin/Category/CategoryListResults';
import { CategoryListToolbar } from 'components/pages/Admin/Category/CategoryListToolbar';
import { getAllCategories } from 'components/service/CategoryService';
import { useEffect, useState } from 'react';

const Categories = () => {
  const [data, setData] = useState([]);
  const updateData = async () => {
    const res = await getAllCategories();
    if (res?.data) {
      setData(res?.data);
    }
  };
  useEffect(() => {
    updateData();
  }, []);
  return (
    <DashboardLayout>
      <Head>
        <title>Categories | Red5</title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
          height: '90vh',
        }}
      >
        <Container maxWidth={false}>
          <CategoryListToolbar handleChangeList={updateData} />
          <Box sx={{ mt: 3 }}>
            <CategoryListResults
              categories={data}
              handleChangeList={updateData}
            />
          </Box>
        </Container>
      </Box>
    </DashboardLayout>
  );
};
Categories.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Categories;
