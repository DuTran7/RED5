import Head from 'next/head';
import { Box, Container } from '@mui/material';
import { DashboardLayout } from 'components/layouts/DashboardLayout';
import { AwardListToolbar } from 'components/pages/Admin/Award/AwardListToolbar';
import { AwardListResults } from 'components/pages/Admin/Award/AwardListResults';
import { useEffect, useState } from 'react';
import { getAllAwards } from 'components/service/AwardService';

const Awards = () => {
  const [awards, setAwards] = useState([]);
  const updateAwards = async () => {
    const res = await getAllAwards();
    if (res?.data) {
      setAwards(res?.data);
    }
  };
  useEffect(() => {
    
    updateAwards();
  }, []);
  return (
    <DashboardLayout>
      <Head>
        <title>Awards | Red5</title>
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
          <AwardListToolbar handleChangeList={updateAwards} />
          <Box sx={{ mt: 3 }}>
            <AwardListResults awards={awards} handleChangeList={updateAwards} />
          </Box>
        </Container>
      </Box>
    </DashboardLayout>
  );
};
Awards.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Awards;
