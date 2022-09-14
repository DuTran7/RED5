import Head from 'next/head';
import { Box, Container } from '@mui/material';
import { DashboardLayout } from 'components/layouts/DashboardLayout';
import { AwardListToolbar } from 'components/pages/Admin/Award/AwardListToolbar';
import { AwardListResults } from 'components/pages/Admin/Award/AwardListResults';
import { RecognitionListResults } from 'components/pages/Admin/Recognition/RecognitionListResults';
import { RecognitionListToolbar } from 'components/pages/Admin/Recognition/RecognitionListToolbar';
import { getAllRecognitions } from 'components/service/RecognitionsService';
import { useEffect, useState } from 'react';

const Recognitions = () => {
  const [data, setData] = useState([]);
  const updateData = async () => {
    const res = await getAllRecognitions();
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
        <title>Recognitions | Red5</title>
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
          <RecognitionListToolbar handleChangeList={updateData} />
          <Box sx={{ mt: 3 }}>
            <RecognitionListResults data={data} handleChangeList={updateData} />
          </Box>
        </Container>
      </Box>
    </DashboardLayout>
  );
};
Recognitions.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Recognitions;
