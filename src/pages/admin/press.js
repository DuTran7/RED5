import { Box, Container } from '@mui/material';
import { DashboardLayout } from 'components/layouts/DashboardLayout';
import { PressListResults } from 'components/pages/Admin/Press/PressListResults';
import { PressListToolbar } from 'components/pages/Admin/Press/PressListToolbar';
import { getAllPress } from 'components/service/PressService';
import Head from 'next/head';
import { useEffect, useState } from 'react';
const Press = () => {
  const [data, setData] = useState([]);
  const updateData = async () => {
    const res = await getAllPress();
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
        <title>Press | Red5</title>
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
          <PressListToolbar handleChangeList={updateData} />
          <Box sx={{ mt: 3 }}>
            <PressListResults data={data} handleChangeList={updateData} />
          </Box>
        </Container>
      </Box>
    </DashboardLayout>
  );
};
Press.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Press;
