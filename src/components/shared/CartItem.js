import { Grid, Stack, Typography } from '@mui/material';
import { StyledIconLabelButton } from 'components/ukit/Button';
import Image from 'next/image';
import { theme } from 'theme';
import { API } from 'utils/constants';
import { request } from 'utils/request';

const StyledRow = ({ title, content }) => (
  <Stack direction={'row'} columnGap={'5px'}>
    <Typography variant="subtitle2">{title}</Typography>
    <Typography
      variant="subtitle2"
      fontWeight={'bold'}
      fontFamily={'SVN-Univers Bold'}
    >
      {content}
    </Typography>
  </Stack>
);

export default function CartItem({
  imgSrc,
  title,
  grid,
  bagSize,
  quantity,
  freq,
  showAction = true,
  price,
  id,
}) {
  const onDelete = async (id) => {
    // handle delete
    console.log('delete', id);
    // const deleteItemCart = await request(API.DELETE_CART_ITME, 'DELETE', {
    //   productDetailId: String(id),
    //   status: 'ACTIVATED',
    // });

    // console.log(deleteItemCart);
  };
  return (
    <Stack
      direction={'row'}
      columnGap={'16px'}
      alignItems={'start'}
      width={'100%'}
    >
      <Stack flexGrow={0} minWidth={'92px'}>
        <Image src={imgSrc} width={92} height={92} alt={'Image'} />
      </Stack>
      <Stack flexGrow={1}>
        <Stack direction={'row'}>
          <Stack flexGrow={1} direction={'column'} rowGap={'6px'}>
            <Typography variant="h4">{title}</Typography>
            {freq && <StyledRow title={'Frequency: '} content={freq} />}
            <StyledRow title={'GRID: '} content={grid} />
            <StyledRow title={'BAG SIZE: '} content={bagSize} />
            <StyledRow title={'QUANTITY: '} content={quantity} />
            <StyledRow title={'PRICE: '} content={price} />
          </Stack>
          {showAction && (
            <Stack flexGrow={0} width={'39px'}>
              <StyledIconLabelButton
                width={'fit-content'}
                onClick={() => onDelete(id)}
                sx={{
                  height: '24px',
                  '&:hover': {
                    '.MuiTypography-root, .MuiSvgIcon-root': {
                      color: theme.palette.primary.main,
                    },
                  },
                }}
              >
                <Typography color={'text.primary'} variant={'caption'}>
                  delete
                </Typography>
              </StyledIconLabelButton>
            </Stack>
          )}
        </Stack>
      </Stack>
    </Stack>
  );
}
