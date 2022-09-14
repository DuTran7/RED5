import { NorthEast } from '@mui/icons-material';
import { Pagination, Stack, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { theme } from 'theme';

export default function AddressList({ isMobile, data }) {
  // const data = [
  //   'Hybird bar',
  //   'September Coffee',
  //   'English Town by Red5 Studio, Ho Chi Minh City – Vietnam',
  //   'Nguyen Hoang Tu flagship store by Red5 Studio, Ho Chi Minh City – Vietnam',
  //   'Hybird bar',
  //   'Nguyen Hoang Tu flagship store',
  // ];
  const [listAddress, setListAddress] = useState(data?.content || []);
  const [page, setPage] = useState(1);
  const [mobile, setMobile] = useState(false);
  const handleChange = (event, value) => {
    setPage(value);
  };

  useEffect(() => {
    const itemPerPage = 4;
    setListAddress(
      data?.content?.slice(
        itemPerPage * page - itemPerPage,
        itemPerPage * page + 4 - itemPerPage
      )
    );
    console.log(listAddress);
  }, [page]);
  useEffect(() => {
    setMobile(isMobile);
  }, [isMobile]);
  return (
    <Stack
      justifyContent={'center'}
      borderTop={'1px solid ' + theme.palette.divider}
    >
      {listAddress &&
        listAddress?.map((e, i) => (
          <Stack
            direction={'row'}
            key={i}
            height={{
              xs: '52px',
              md: '74px',
            }}
            alignItems={'center'}
            justifyContent={'space-between'}
            borderBottom={'1px solid ' + theme.palette.divider}
            p={'26px 24px'}
            sx={{
              '&:hover': {
                background: 'rgba(255, 255, 255, 0.04);',
                cursor: 'pointer',
              },
            }}
          >
            <Typography
              variant="body1"
              height={'fit-content'}
              sx={{
                whiteSpace: 'nowrap',
                textOverflow: 'ellipsis',
                overflow: 'hidden',
              }}
              title={e?.name}
            >
              {e?.name}
            </Typography>
            <NorthEast
              sx={{
                fill: {
                  xs: theme.palette.text.primary,
                  md: theme.palette.text.secondary,
                },
                fontSize: '20px',
              }}
            />
          </Stack>
        ))}
      <Stack py={'29px'}>
        <Pagination
          count={100}
          siblingCount={mobile ? 2 : 3}
          page={page}
          boundaryCount={mobile ? 0 : 1}
          onChange={handleChange}
          sx={{
            '.MuiPagination-ul': {
              justifyContent: 'center',
            },
          }}
        />
      </Stack>
    </Stack>
  );
}
