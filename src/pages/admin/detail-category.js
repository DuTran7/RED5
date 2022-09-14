import Head from 'next/head';
import { Box, Container } from '@mui/material';
import { DashboardLayout } from 'components/layouts/DashboardLayout';
import { DetailCategoryListToolbar } from 'components/pages/Admin/DetailCategory/DetailCategoryListToolbar';
import { DetailCategoryListResults } from 'components/pages/Admin/DetailCategory/DetailCategoryListResults';
import { getChapters } from 'components/service/CategoryDetailService';
import { getAllCategories } from 'components/service/CategoryService';
import { useEffect, useState } from 'react';

const DetailCategory = () => {
  const [data, setData] = useState([]);
  const [categories, setCategories] = useState([]);
  const updateData = async () => {
    const res = await getChapters();
    if (res?.data) {
      setData(res?.data);
    }
  };
  const updateCategory = async () => {
    const res = await getAllCategories();
    if (res?.data) {
      setCategories(res?.data);
    }
  };
  useEffect(() => {
    updateData();
    updateCategory();
  }, []);
  return (
    <DashboardLayout>
      <Head>
        <title>Detail Category | Red5</title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
          height: '90vh',
          overflowY: 'auto',
        }}
      >
        <Container maxWidth={false}>
          <DetailCategoryListToolbar
            handleChangeList={updateData}
            categories={categories}
          />
          <Box sx={{ mt: 3 }}>
            <DetailCategoryListResults
              data={data}
              handleChangeList={updateData}
              categories={categories}
            />
          </Box>
        </Container>
      </Box>
    </DashboardLayout>
  );
};
DetailCategory.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default DetailCategory;
