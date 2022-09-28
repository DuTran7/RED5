import { Container, Grid, Stack } from '@mui/material';
import ForgetPwForm from 'components/form/ForgetPwForm';
import LoginAdminForm from 'components/form/LoginAdminForm';
import { Red5 } from 'components/shared/icons';
import { useState } from 'react';
import { TYPE_FORM } from 'utils/constants';

export default function LoginPage() {
  const [typeForm, setTypeForm] = useState(TYPE_FORM.LOGIN);
  return (
    <Container maxWidth="sm">
      <Stack
        justifyContent={'center'}
        pt={3}
        rowGap={3}
        alignItems={'center'}
        sx={{
          '.MuiTypography-root, input': {
            color: 'black',
          },
        }}
      >
        <Red5
          viewBox="0 0 60 36"
          sx={{
            height: '1em',
            width: '2em',
            fontSize: '10vw',
          }}
        />
        {typeForm === TYPE_FORM.LOGIN && (
          <LoginAdminForm
            handleForgetPw={() => {
              console.log(1);
              setTypeForm(TYPE_FORM.FORGET_PW);
            }}
          />
        )}
        {typeForm === TYPE_FORM.FORGET_PW && (
          <ForgetPwForm onHandleLogin={() => setTypeForm(TYPE_FORM.LOGIN)} />
        )}
      </Stack>
    </Container>
  );
}
