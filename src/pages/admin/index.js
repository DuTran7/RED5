import { Box, Container } from '@mui/material';
import { DashboardLayout } from 'components/layouts/DashboardLayout';
import Head from 'next/head';
import { useEffect } from 'react';

export default function AdminDashboard() {
  return <DashboardLayout>Wellcome to admin page!</DashboardLayout>;
}

// const Dashboard = () => (
//   <>
//     <Head>
//       <title>Dashboard | Red5</title>
//     </Head>
//     <Box
//       component="main"
//       sx={{
//         flexGrow: 1,
//         py: 8,
//       }}
//     >
//       <Container maxWidth={false}>
{
  /* <Grid
          container
          spacing={3}
        >
          <Grid
            item
            lg={3}
            sm={6}
            xl={3}
            xs={12}
          >
            <Budget />
          </Grid>
          <Grid
            item
            xl={3}
            lg={3}
            sm={6}
            xs={12}
          >
            <TotalCustomers />
          </Grid>
          <Grid
            item
            xl={3}
            lg={3}
            sm={6}
            xs={12}
          >
            <TasksProgress />
          </Grid>
          <Grid
            item
            xl={3}
            lg={3}
            sm={6}
            xs={12}
          >
            <TotalProfit sx={{ height: '100%' }} />
          </Grid>
          <Grid
            item
            lg={8}
            md={12}
            xl={9}
            xs={12}
          >
            <Sales />
          </Grid>
          <Grid
            item
            lg={4}
            md={6}
            xl={3}
            xs={12}
          >
            <TrafficByDevice sx={{ height: '100%' }} />
          </Grid>
          <Grid
            item
            lg={4}
            md={6}
            xl={3}
            xs={12}
          >
            <LatestProducts sx={{ height: '100%' }} />
          </Grid>
          <Grid
            item
            lg={8}
            md={12}
            xl={9}
            xs={12}
          >
            <LatestOrders />
          </Grid>
        </Grid> */
}
//       </Container>
//     </Box>
//   </>
// );

// Dashboard.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

// export default Dashboard;
