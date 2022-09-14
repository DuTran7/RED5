import { Button, Grid, Stack } from '@mui/material';
import {
  createAward,
  updateAward,
  uploadFile,
} from 'components/service/AwardService';
import {
  createCategory,
  updateCategory,
} from 'components/service/CategoryService';
import { createPress, updatePress } from 'components/service/PressService';
import InputControl from 'components/shared/InputControl';
import SelectBox from 'components/shared/SelectBox';
import { useRouter } from 'next/router';
import { useSnackbar } from 'notistack';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { IMAGE_SOURCE, ITEM_STATUS } from 'utils/constants';

export default function CreatePressForm({ onClose, data = null }) {
  const { enqueueSnackbar } = useSnackbar();
  const [formData, setFormData] = useState({});
  const [file, setFile] = useState(null);
  const [fileUrl, setFileUrl] = useState(
    data ? IMAGE_SOURCE + data?.name : null
  );
  const [statusForm, setStatusForm] = useState(ITEM_STATUS.ACTIVATED);
  const router = useRouter();

  // init status
  const status = [ITEM_STATUS.ACTIVATED, ITEM_STATUS.DEACTIVATED];
  const { handleSubmit, control, getValues } = useForm({
    defaultValues: {
      id: data?.id,
      title: data?.title,
      description: data?.description,
      file: data?.name ? IMAGE_SOURCE + data?.name : null,
    },
  });

  const onSuccess = (message) => {
    enqueueSnackbar(message, {
      variant: 'success',
    });
    onClose();
  };

  const onSubmit = async (d) => {
    let body = new FormData();
    body.append('image', file);
    body.append(
      'jsonAlbum',
      JSON.stringify({
        title: d?.title,
        name: d?.name,
        description: d?.description,
        status: statusForm,
      })
    );
    if (!data) {
      // create press
      const createRes = await createPress(body);
      if (!createRes?.status === 200) {
        enqueueSnackbar('Create failed, please try again!', {
          variant: 'error',
        });
        return;
      }
      onSuccess('Create success');
    } else {
      //update press
      let fileUrlNew = data?.name;
      if (file) {
        const bodyUploadFile = new FormData();
        bodyUploadFile.append('image', file);
        bodyUploadFile.append(
          'jsonAlbum',
          JSON.stringify({
            idPress: data?.id,
            description: 'press id ' + data?.id,
            status: statusForm,
          })
        );
        const res = await uploadFile(bodyUploadFile);
        if (!res?.status === 200) {
          enqueueSnackbar('Create failed, please try again!', {
            variant: 'error',
          });
          return;
        }
        fileUrlNew = res.data?.data;
      }
      const bodyReq = {
        id: data?.id,
        description: d?.description,
        name: d?.name,
        status: statusForm,
      };
      const updateRes = await updatePress(bodyReq);
      if (!updateRes?.status === 200) {
        enqueueSnackbar('Create failed, please try again!', {
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

  const updateFormValues = (data, name) => {
    setFormData({ ...formData, [name]: data });
  };

  useEffect(() => {
    if (file) setFileUrl(URL.createObjectURL(file));
  }, [file]);

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
            id={'title'}
            name={'title'}
            label={'Title:'}
            onChange={(e) => updateFormValues(e[0].target.value, 'title')}
            type={'text'}
          />
        </Grid>
        <Grid item xs={12} md={12} lg={6}>
          <InputControl
            control={control}
            id={'description'}
            name={'description'}
            label={'Description:'}
            onChange={(e) => updateFormValues(e[0].target.value, 'description')}
            type={'text'}
          />
        </Grid>
        <Grid item xs={12} md={12} lg={6}>
          <InputControl
            control={control}
            id={'image'}
            type={'file'}
            name={'image'}
            srcImg={fileUrl}
            onChange={(e) => {
              updateFormValues(e[0]?.target.value, 'image');
              setFile(e[0]?.target.files[0]);
            }}
            label={
              <>
                <p
                  style={{
                    color: 'black',
                    fontStyle: 'italic',
                  }}
                >
                  Image (please use file .svg)
                </p>
              </>
            }
          />
        </Grid>
        <Grid item xs={12} md={12} lg={6}>
          <SelectBox
            titleVariant={'subtitle1'}
            title={'Status:'}
            defaultValue={statusForm}
            disabled={!data}
            handleChange={handleChangeStatus}
            options={
              status?.map((el) => ({
                value: el,
                name: el,
              })) || []
            }
            textTransform={'capitalize'}
            value={statusForm}
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
