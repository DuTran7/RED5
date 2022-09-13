import { Button, Grid, Stack } from '@mui/material';
import axios from 'axios';
import { createAward, uploadFile } from 'components/service/AwardService';
import InputControl from 'components/shared/InputControl';
import SelectBox from 'components/shared/SelectBox';
import { useRouter } from 'next/router';
import { useSnackbar } from 'notistack';
import { useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { PROVINES } from 'utils/RawData/provines';

export default function CreateAwardForm({
  onClose,
  onHandleCreate,
  handleForgetPw,
  onChange,
}) {
  const { enqueueSnackbar } = useSnackbar();
  const [formData, setFormData] = useState({});
  const [file, setFile] = useState(null);

  const form = useRef(null);
  const router = useRouter();
  const { handleSubmit, control, getValues } = useForm();
  const onSubmit = async (d) => {
    // create award
    const body = new FormData(form.current);
    body.append('image', file);
    // body.append(
    //   'jsonAlbum',
    //   JSON.stringify({
    //     actorName: d?.actorName,
    //     albumType: 'string',
    //     description: d?.description,
    //     title: d?.title,
    //   })
    // );
    console.log('avc', new FormData(form.current));
    const createRes = await createAward(new FormData(form.current));
    console.log(createRes);
  };

  const updateFormValues = (data, name) => {
    setFormData({ ...formData, [name]: data });
  };

  const updateLoadFile = (id) => {
    const body = new FormData();
    body.append('image', file);
    body.append(
      'jsonAlbum',
      JSON.stringify({
        idAward: id,
        description: 'test',
      })
    );
    return uploadFile(body);
  };

  return (
    <form ref={form} onSubmit={handleSubmit(onSubmit)} method="POST">
      <Grid
        container
        rowSpacing={'32px'}
        columnSpacing={{
          xs: '0',
          sm: '40px',
        }}
        pr={'40px'}
      >
        <Grid item xs={12} md={12} lg={6}>
          <InputControl
            control={control}
            id={'actorName'}
            name={'actorName'}
            label={'Actor Name:'}
            onChange={(e) => updateFormValues(e[0].target.value, 'actorName')}
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
            id={'title'}
            type={'text'}
            name={'title'}
            onChange={(e) => updateFormValues(e[0]?.target.value, 'title')}
            label={'Title:'}
          />
        </Grid>
        <Grid item xs={12} md={12} lg={6}>
          <InputControl
            control={control}
            id={'image'}
            type={'file'}
            name={'image'}
            onChange={(e) => {
              updateFormValues(e[0]?.target.value, 'image');
              setFile(e[0]?.target.files[0]);
            }}
            label={'Image:'}
          />
        </Grid>
        {/* <Grid item xs={12} md={12} lg={6}>
          <SelectBox
            titleVariant={'subtitle1'}
            title={'City/Provine:'}
            defaultValue={provine}
            handleChange={handleChangeProvine}
            options={
              PROVINES?.map((el) => ({
                value: el.province_id,
                name: el?.province_name,
              })) || []
            }
            textTransform={'capitalize'}
            value={provine}
          />
        </Grid>
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
