import { Button, Grid, Stack, Typography } from '@mui/material';
import {
  createRecognition,
  updateRecognition,
} from 'components/service/RecognitionsService';
import InputControl from 'components/shared/InputControl';
import SelectBox from 'components/shared/SelectBox';
import { useRouter } from 'next/router';
import { useSnackbar } from 'notistack';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { ITEM_STATUS } from 'utils/constants';

export default function CreateRecognitionForm({ onClose, press, data = null }) {
  const { enqueueSnackbar } = useSnackbar();
  const [formData, setFormData] = useState({});
  const [statusForm, setStatusForm] = useState(ITEM_STATUS.ACTIVATED);
  const [pressId, setPressId] = useState(data?.idPress || null);
  const router = useRouter();

  // init status
  const status = [ITEM_STATUS.ACTIVATED, ITEM_STATUS.DEACTIVATED];
  const { handleSubmit, control, getValues } = useForm({
    defaultValues: {
      id: data?.id,
      link: data?.link,
      name: data?.name,
    },
  });

  const onSuccess = (message) => {
    enqueueSnackbar(message, {
      variant: 'success',
    });
    onClose();
  };

  const onSubmit = async (d) => {
    if (!data) {
      // create press
      const createRes = await createRecognition({
        name: d?.name,
        idPress: pressId,
        link: d?.link,
        status: statusForm,
      });
      if (!createRes?.status === 200) {
        enqueueSnackbar('Create failed, please try again!', {
          variant: 'error',
        });
        return;
      }
      onSuccess('Create success');
    } else {
      const bodyReq = {
        id: data?.id,
        name: d?.name,
        link: d?.link,
        idPress: pressId,
        status: statusForm,
      };
      const updateRes = await updateRecognition(bodyReq);
      if (!updateRes?.status === 200) {
        enqueueSnackbar('Update failed, please try again!', {
          variant: 'error',
        });
        return;
      }
      onSuccess('Update success');
    }
  };

  const handleChangeStatus = (e) => {
    // setStatusForm()
    setStatusForm(e.target.value);
  };
  const handleChangePress = (e) => {
    // setStatusForm()
    setPressId(e.target.value);
  };

  const updateFormValues = (data, name) => {
    setFormData({ ...formData, [name]: data });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} method="POST">
      <Grid
        container
        rowSpacing={'32px'}
        columnSpacing={{
          xs: '0',
          sm: '40px',
        }}
        sx={{
          '& .MuiInputBase-root': {
            verticalAlign: 'top',
          },
        }}
        pr={'40px'}
      >
        <Stack
          sx={{
            display: 'none',
          }}
        >
          <InputControl
            control={control}
            id={'id'}
            name={'id'}
            label={'ID:'}
            onChange={(e) => updateFormValues(e[0].target.value, 'id')}
            type={'text'}
          />
        </Stack>
        <Grid item xs={12} md={12} lg={6}>
          <InputControl
            control={control}
            id={'name'}
            name={'name'}
            label={'Name:'}
            onChange={(e) => updateFormValues(e[0].target.value, 'name')}
            type={'text'}
          />
        </Grid>
        <Grid item xs={12} md={12} lg={6}>
          <InputControl
            control={control}
            id={'link'}
            name={'link'}
            label={'Link:'}
            onChange={(e) => updateFormValues(e[0].target.value, 'link')}
            type={'text'}
          />
        </Grid>
        {/* <Typography>{JSON.stringify(press[0]?.description)}</Typography> */}
        <Grid item xs={12} md={12} lg={6}>
          <SelectBox
            titleVariant={'subtitle1'}
            title={'Press:'}
            defaultValue={pressId}
            handleChange={handleChangePress}
            options={
              press?.map((el) => ({
                value: el?.id,
                name: el?.description,
              })) || []
            }
            textTransform={'capitalize'}
            value={pressId}
          />
        </Grid>
        {/* 
        <Grid item xs={12} md={12} lg={6}>
          <SelectBox
            titleVariant={'subtitle1'}
            title={'District:'}
            defaultValue={district}
            handleChange={handleChangeDistrict}
            options={
              districts?.map((el) => ({
                value: el.district_id,
                name: el?.district_name,
              })) || []
            }
            textTransform={'capitalize'}
            value={district}
          />
        </Grid>
        <Grid item xs={12} md={12} lg={6}>
          <SelectBox
            titleVariant={'subtitle1'}
            title={'Ward:'}
            defaultValue={ward}
            handleChange={handleChangeWard}
            options={
              wards?.map((el) => ({
                value: el.ward_id,
                name: el?.ward_name,
              })) || []
            }
            textTransform={'capitalize'}
            value={ward}
          />
        </Grid>
        <Grid item xs={12}>
          <InputControl
            control={control}
            id={'adress'}
            type={'text'}
            onChange={(e) => updateFormValues(e[0]?.target.value, 'adress')}
            name={'adress'}
            label={'Adress:'}
          />
        </Grid>
        <Grid item xs={12}>
          <InputControl
            control={control}
            id={'note'}
            type={'text'}
            onChange={(e) => updateFormValues(e[0]?.target.value, 'note')}
            name={'note'}
            label={'Note:'}
          />
        </Grid> */}
      </Grid>
      <Stack
        mt={4}
        sx={{
          background: 'black',
        }}
      >
        <Button type="submit">Submit</Button>
      </Stack>
    </form>
  );
}
