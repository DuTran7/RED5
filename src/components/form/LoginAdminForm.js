import { Stack } from '@mui/material';
import InputControl from 'components/shared/InputControl';
import { useForm } from 'react-hook-form';

export default function LoginAdminForm() {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack>
        <Stack>
          <InputControl
            control={control}
            id={'email'}
            name={'email'}
            label={'Email:'}
            onChange={(e) => {}}
          />
        </Stack>
      </Stack>
    </form>
  );
}
