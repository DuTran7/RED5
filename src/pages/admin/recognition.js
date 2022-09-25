import Head from 'next/head';
import { Box, Container } from '@mui/material';
import { DashboardLayout } from 'components/layouts/DashboardLayout';
import { AwardListToolbar } from 'components/pages/Admin/Award/AwardListToolbar';
import { AwardListResults } from 'components/pages/Admin/Award/AwardListResults';
import { RecognitionListResults } from 'components/pages/Admin/Recognition/RecognitionListResults';
import { RecognitionListToolbar } from 'components/pages/Admin/Recognition/RecognitionListToolbar';
import { getAllRecognitions } from 'components/service/RecognitionsService';
import { useEffect, useState } from 'react';
import { getAllPress } from 'components/service/PressService';

const Recognitions = () => {
  const [data, setData] = useState([]);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(0);
  const [press, setPtess] = useState([]);
  const updateData = async () => {
    const res = await getAllRecognitions(page, limit);
    if (res?.data) {
      setData(res?.data);
    }
  };

  const updatePress = async () => {
    const res = await getAllPress();
    if (res?.data) {
      setPtess(res?.data);
    }
  };
  useEffect(() => {
    updateData();
    updatePress();
  }, []);
  useEffect(() => {
    updateData();
  }, [limit, page]);
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
          <RecognitionListToolbar handleChangeList={updateData} press={press} />
          <Box sx={{ mt: 3 }}>
            <RecognitionListResults
              data={data}
              press={press}
              limit={limit}
              setLimit={setLimit}
              page={page}
              setPage={setPage}
              handleChangeList={updateData}
            />
          </Box>
        </Container>
      </Box>
    </DashboardLayout>
  );
};
Recognitions.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Recognitions;
