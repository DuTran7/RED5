import Head from 'next/head';
import { Box, Container } from '@mui/material';
import { DashboardLayout } from 'components/layouts/DashboardLayout';
import { PressListToolbar } from 'components/pages/Admin/Press/PressListToolbar';
import { PressListResults } from 'components/pages/Admin/Press/PressListResults';
import { getAllTeams } from 'components/service/TeamService';
import { TeamListToolbar } from 'components/pages/Admin/Team/TeamListToolbar';
import { TeamListResults } from 'components/pages/Admin/Team/TeamListResults';
import { useEffect, useState } from 'react';

const Teams = () => {
  const [data, setData] = useState([]);
  const updateData = async () => {
    const res = await getAllTeams();
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
        <title>Teams | Red5</title>
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
          <TeamListToolbar handleChangeList={updateData} />
          <Box sx={{ mt: 3 }}>
            <TeamListResults data={data} handleChangeList={updateData} />
          </Box>
        </Container>
      </Box>
    </DashboardLayout>
  );
};
Teams.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Teams;
