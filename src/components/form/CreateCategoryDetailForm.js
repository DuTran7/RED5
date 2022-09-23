import { Button, Grid, Stack, TextareaAutosize } from '@mui/material';
import {
  createAward,
  updateAward,
  uploadFile,
} from 'components/service/AwardService';
import {
  createDetailCategory,
  updateDetailCategory,
} from 'components/service/CategoryDetailService';
import InputControl from 'components/shared/InputControl';
import SelectBox from 'components/shared/SelectBox';
import { useRouter } from 'next/router';
import { useSnackbar } from 'notistack';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { IMAGE_SOURCE, ITEM_STATUS } from 'utils/constants';

export default function CreateCategoryDetailForm({
  onClose,
  data = null,
  categories = [],
}) {
  const { enqueueSnackbar } = useSnackbar();
  const [formData, setFormData] = useState({});
  const [file, setFile] = useState(null);
  const [fileUrl, setFileUrl] = useState(
    data ? IMAGE_SOURCE + data?.image : null
  );
  const [statusForm, setStatusForm] = useState(ITEM_STATUS.ACTIVATED);
  const [category, setCategory] = useState(data?.idCategory || null);
  const [description, setDescription] = useState(data?.description || null);
  const router = useRouter();

  // init status
  const status = [ITEM_STATUS.ACTIVATED, ITEM_STATUS.DEACTIVATED];
  const { handleSubmit, control, getValues } = useForm({
    defaultValues: {
      id: data?.id,
      name: data?.name,
      description: data?.description,
      design: data?.design,
      designTeam: data?.designTeam,
      client: data?.client,
      area: data?.area,
      material: data?.material,
      location: data?.location,
      photo: data?.photo,
      idCategory: data?.idCategory,
      file: data?.file ? IMAGE_SOURCE + data?.file : null,
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
        actorName: d?.actorName,
        albumType: 'string',
        description: d?.description,
        title: d?.title,
      })
    );
    if (!data) {
      let imgUrl = '';
      if (file) {
        const bodyUploadFile = new FormData();
        bodyUploadFile.append('image', file);
        bodyUploadFile.append(
          'jsonAlbum',
          JSON.stringify({
            description: 'category detail id',
          })
        );
        const res = await uploadFile(bodyUploadFile);
        if (!res?.status === 200) {
          enqueueSnackbar('Create failed, please try again!', {
            variant: 'error',
          });
          return;
        }
        imgUrl = res.data?.data;
      }
      // create category
      const createRes = await createDetailCategory({
        name: d?.name,
        description: description,
        design: d?.design,
        designTeam: d?.designTeam,
        image: imgUrl,
        client: d?.client,
        area: d?.area,
        material: d?.material,
        location: d?.location,
        photo: d?.photo,
        idCategory: category,
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
      //update award
      let fileUrlNew = data?.image;
      if (file) {
        const bodyUploadFile = new FormData();
        bodyUploadFile.append('image', file);
        bodyUploadFile.append(
          'jsonAlbum',
          JSON.stringify({
            idAward: data?.id,
            description: 'award id ' + data?.id,
          })
        );
        const res = await uploadFile(bodyUploadFile);
        if (!res?.status === 200) {
          enqueueSnackbar('Upload image failed, please try again!', {
            variant: 'error',
          });
          return;
        }
        fileUrlNew = res.data?.data;
      }
      const bodyReq = {
        id: data?.id,
        name: d?.name,
        description: description,
        design: d?.design,
        designTeam: d?.designTeam,
        image: fileUrlNew,
        client: d?.client,
        area: d?.area,
        material: d?.material,
        location: d?.location,
        photo: d?.photo,
        idCategory: category,
        status: statusForm,
      };
      const updateRes = await updateDetailCategory(bodyReq);
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
  const handleChangeCategory = (e) => {
    // setStatusForm()
    setCategory(e.target.value);
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
            id={'name'}
            name={'name'}
            label={'Name:'}
            onChange={(e) => updateFormValues(e[0].target.value, 'name')}
            type={'text'}
          />
        </Grid>
        <Grid item xs={12} md={12} lg={6}>
          {/* <InputControl
            control={control}
            id={'description'}
            name={'description'}
            label={'Description:'}
            onChange={(e) => updateFormValues(e[0].target.value, 'description')}
            type={'text'}
          /> */}
          {/* < */}
          <TextareaAutosize
            aria-label="Category description"
            placeholder="description"
            value={description}
            style={{ width: 500 }}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
        </Grid>
        <Grid item xs={12} md={12} lg={6}>
          <InputControl
            control={control}
            id={'designTeam'}
            name={'designTeam'}
            label={'Design Team:'}
            onChange={(e) => updateFormValues(e[0].target.value, 'designTeam')}
            type={'text'}
          />
        </Grid>
        <Grid item xs={12} md={12} lg={6}>
          <InputControl
            control={control}
            id={'client'}
            name={'client'}
            label={'Client:'}
            onChange={(e) => updateFormValues(e[0].target.value, 'client')}
            type={'text'}
          />
        </Grid>
        <Grid item xs={12} md={12} lg={6}>
          <InputControl
            control={control}
            id={'area'}
            name={'area'}
            label={'Area:'}
            onChange={(e) => updateFormValues(e[0].target.value, 'area')}
            type={'text'}
          />
        </Grid>
        <Grid item xs={12} md={12} lg={6}>
          <InputControl
            control={control}
            id={'material'}
            name={'material'}
            label={'Material:'}
            onChange={(e) => updateFormValues(e[0].target.value, 'material')}
            type={'text'}
          />
        </Grid>
        <Grid item xs={12} md={12} lg={6}>
          <InputControl
            control={control}
            id={'location'}
            name={'location'}
            label={'Location:'}
            onChange={(e) => updateFormValues(e[0].target.value, 'location')}
            type={'text'}
          />
        </Grid>
        <Grid item xs={12} md={12} lg={6}>
          <InputControl
            control={control}
            id={'photo'}
            name={'photo'}
            label={'Photo:'}
            onChange={(e) => updateFormValues(e[0].target.value, 'photo')}
            type={'text'}
          />
        </Grid>
        <Grid item xs={12} md={12} lg={6}>
          <InputControl
            control={control}
            id={'design'}
            type={'text'}
            name={'design'}
            onChange={(e) => updateFormValues(e[0]?.target.value, 'design')}
            label={'Titdesignle:'}
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
            label={'Image:'}
          />
        </Grid>
        <Grid item xs={12} md={12} lg={6}>
          <SelectBox
            titleVariant={'subtitle1'}
            title={'Status:'}
            defaultValue={category}
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
        <Grid item xs={12} md={12} lg={6}>
          <SelectBox
            titleVariant={'subtitle1'}
            title={'Chapter:'}
            defaultValue={category}
            handleChange={handleChangeCategory}
            options={
              categories?.map(({ categories }) => ({
                value: categories.id,
                name: categories.description,
              })) || []
            }
            textTransform={'capitalize'}
            value={category}
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
