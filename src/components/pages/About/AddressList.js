import { NorthEast } from '@mui/icons-material';
import { Pagination, Stack, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { theme } from 'theme';

export default function AddressList() {
  const data = [
    'Hybird bar',
    'September Coffee',
    'English Town by Red5 Studio, Ho Chi Minh City – Vietnam',
    'Nguyen Hoang Tu flagship store by Red5 Studio, Ho Chi Minh City – Vietnam',
    'Hybird bar',
    'Nguyen Hoang Tu flagship store',
  ];
  const [listAddress, setListAddress] = useState(data || []);
  const [page, setPage] = useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };

  useEffect(() => {
    const itemPerPage = 4;
    setListAddress(
      data.slice(
        itemPerPage * page - itemPerPage,
        itemPerPage * page + 4 - itemPerPage
      )
    );
  }, [page]);
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
            height={'74px'}
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
            <Typography variant="body1" height={'fit-content'}>
              {e}
            </Typography>
            <NorthEast
              sx={{
                fill: theme.palette.text.secondary,
              }}
            />
          </Stack>
        ))}
      <Stack py={'29px'}>
        <Pagination
          count={100}
          siblingCount={3}
          page={page}
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
