import InfoIcon from '@mui/icons-material/Info';
import { Button, Grid, Stack } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { useEffect } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { IMAGE_SOURCE } from 'utils/constants';
import InputControl from './InputControl';
import { theme } from 'theme';

export default function Albums({ data = [], onClickAddImg, onClickDelImg }) {
  const [file, setFile] = useState(null);
  const [fileUrl, setFileUrl] = useState(null);
  const [description, setDescription] = useState(null);

  const { handleSubmit, control, getValues } = useForm({
    defaultValues: {
      image: fileUrl,
    },
  });

  useEffect(() => {
    if (file) setFileUrl(URL.createObjectURL(file));
  }, [file]);

  const onClickAddImage = () => {
    onClickAddImg?.(fileUrl, file, description);
  };

  const onClickDeleteImage = (item) => {
    onClickDelImg?.(item?.id);
  };
  return (
    <Stack minWidth={'60vw'}>
      <Stack
        alignItems={'center'}
        border={'1px solid ' + theme.palette.primary.main}
      >
        <InputControl
          control={control}
          id={'description'}
          name={'description'}
          label={'Description:'}
          onChange={(e) => setDescription(e[0].target.value)}
          type={'text'}
        />
        <InputControl
          control={control}
          id={'image'}
          type={'file'}
          name={'image'}
          srcImg={fileUrl}
          onChange={(e) => {
            //   set(e[0]?.target.value, 'image');
            setFile(e[0]?.target.files[0]);
          }}
          label={'Image:'}
        />
        <Button
          sx={{
            // mt: 4,
            minWidth: '300px',
            width: '100%',
            background: theme.palette.common.black,
          }}
          onClick={onClickAddImage}
        >
          Add Image
        </Button>
      </Stack>
      {data?.length > 0 && (
        <ImageList sx={{ width: '100%', height: '40vh' }} cols={3}>
          {data.map((item, i) => (
            <ImageListItem key={i}>
              <img
                src={`${IMAGE_SOURCE + item?.name}`}
                srcSet={`${IMAGE_SOURCE + item?.name}`}
                alt={item?.description}
                width={100}
              />
              <ImageListItemBar
                title={item?.title}
                subtitle={item?.created_at}
                actionIcon={
                  <IconButton
                    onClick={() => onClickDeleteImage(item)}
                    sx={{
                      color: 'rgba(255, 255, 255, 0.54)',
                      '&:hover': {
                        '& .MuiSvgIcon-root': {
                          fill: theme.palette.primary.main,
                        },
                      },
                    }}
                    aria-label={`info about ${item?.title}`}
                  >
                    <DeleteIcon />
                  </IconButton>
                }
              />
            </ImageListItem>
          ))}
        </ImageList>
      )}
      {data?.length === 0 && 'No images'}
    </Stack>
  );
}
