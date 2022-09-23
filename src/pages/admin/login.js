import { Container, Grid } from '@mui/material';
import LoginAdminForm from 'components/form/LoginAdminForm';

export default function LoginPage() {
  return (
    <Container maxWidth="lg">
      <Grid container>
        <Grid item xs={0} md={8}></Grid>
        <Grid item xs={12} md={4}>
          <LoginAdminForm />
        </Grid>
      </Grid>
    </Container>
  );
}
