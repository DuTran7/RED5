import { Button, FormControlLabel, Stack, Typography } from '@mui/material';
import InputControl from 'components/shared/InputControl';
import {
  StyledContainerBtn,
  StyledOutlineButton,
  StyledPrimaryBtn,
} from 'components/ukit/Button';
import { signIn } from 'next-auth/client';
import { useRouter } from 'next/router';
import { useSnackbar } from 'notistack';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { theme } from 'theme';

export default function LoginAdminForm({ handleForgetPw }) {
  const { enqueueSnackbar } = useSnackbar();
  const router = useRouter();
  const [loginError, setLoginError] = useState(false);
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const user = await signIn('credentials', {
        ...data,
        redirect: false,
      });
      // const user = await axios.post('/api/auth/callback/credentials', {
      //   ...d,
      //   csrfToken,

      // });
      if (!!!user.error) {
        router.push('/admin');
        // router.push(window.location.origin + ROUTER.PROFILE);
        enqueueSnackbar('You are login successfull', { variant: 'success' });
      } else {
        setLoginError(user.error);
        enqueueSnackbar(user.error, { variant: 'error' });
      }
    } catch (e) {
      console.log(e);
      enqueueSnackbar('Server error', { variant: 'error' });
    }
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      style={{
        width: '100%',
      }}
    >
      <Stack>
        <Stack width={'100%'}>
          <InputControl
            control={control}
            id={'email'}
            name={'email'}
            label={'Email:'}
            type={'email'}
            minWidth={'90px'}
            // onChange={(e) => {}}
          />
          <InputControl
            control={control}
            id={'password'}
            type={'password'}
            name={'password'}
            label={'Password:'}
            minWidth={'90px'}
          />
          <Stack my={2} direction={'row'} justifyContent={'flex-end'}>
            <Typography
              onClick={handleForgetPw}
              variant="body1"
              color={theme.palette.primary.main}
              sx={{
                textDecoration: 'underline',
                cursor: 'pointer',
              }}
            >
              <a>forget password?</a>
            </Typography>
          </Stack>
          <Stack
            direction={'column'}
            justifyContent={'center'}
            alignItems={'center'}
            rowGap={'16px'}
            mt={'20px'}
          >
            {loginError && (
              <Typography
                variant="subtitle1"
                color={theme.palette.primary.main}
              >
                <i>{loginError}</i>
              </Typography>
            )}
            <StyledPrimaryBtn width={'100%'} type="submit">
              <Typography variant={'body1'} color={'text.secondary'}>
                log in
              </Typography>
            </StyledPrimaryBtn>
            {/* <Button width={'100%'} onClick={onHandleCreateAccount}>
              <Typography variant={'subtitle2'} color={'text.secondary'}>
                Create an account
              </Typography>
            </Button> */}
          </Stack>
        </Stack>
      </Stack>
    </form>
  );
}
