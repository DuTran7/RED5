import CloseIcon from '@mui/icons-material/Close';
import { Box, Stack, Typography } from '@mui/material';
import InputControl from 'components/shared/InputControl';
import {
  StyledIconLabelButton,
  StyledPrimaryBtn,
  StyledRedButton,
} from 'components/ukit/Button';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { theme } from 'theme';
import { API } from 'utils/constants';
import { request } from 'utils/request';

export default function ForgetPwForm({ onClose, onHandleLogin }) {
  const [messageCode, setMessageCode] = useState(null);
  const { handleSubmit, control } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });
  const onSubmit = async (d) => {
    const data = await request(API.AUTH_FORGET_PW + '?email=' + d.email, 'GET');
    setMessageCode(data?.messageCode);
  };

  return (
    <Box component={'form'} onSubmit={handleSubmit(onSubmit)}>
      <Stack direction={'column'} padding={'20px 20px'} rowGap={'20px'}>
        <Typography variant={'subtitle3'}>
          {`Enter your email address below. We'll send you an email to reset your
            password.`}
        </Typography>
        {messageCode && <Typography>{messageCode}</Typography>}
        {!messageCode && (
          <InputControl
            control={control}
            id={'email'}
            name={'email'}
            label={'Email:'}
            type={'email'}
          />
        )}

        {!messageCode ? (
          <Stack
            direction={'column'}
            justifyContent={'center'}
            alignItems={'center'}
            rowGap={'16px'}
            mt={'20px'}
          >
            <StyledPrimaryBtn width={'100%'} type="submit">
              <Typography variant={'body1'} color={'text.secondary'}>
                submit
              </Typography>
            </StyledPrimaryBtn>
            <StyledPrimaryBtn width={'100%'} onClick={onHandleLogin}>
              <Typography variant={'body1'} color={'text.secondary'}>
                Remember your password
              </Typography>
            </StyledPrimaryBtn>
          </Stack>
        ) : (
          <Stack
            direction={'column'}
            justifyContent={'center'}
            alignItems={'center'}
            rowGap={'16px'}
            mt={'20px'}
          >
            <StyledPrimaryBtn width={'100%'} onClick={onHandleLogin}>
              <Typography variant={'body1'} color={'text.secondary'}>
                Back to login
              </Typography>
            </StyledPrimaryBtn>
          </Stack>
        )}
      </Stack>
    </Box>
  );
}
