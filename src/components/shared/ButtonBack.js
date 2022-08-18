import { Button, Stack, Typography } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { theme } from 'theme';

export default function ButtonBack({ text, onClick, ...other }) {
  return (
    <Stack
      {...other}
      direction={'row'}
      alignItems={'center'}
      sx={{
        width: '100%',
        px: {
          xs: '16px',
          md: '40px',
        },
        py: {
          xs: '11.5px',
          md: '20px',
        },
        borderBottom: '1px solid',
        borderRight: '1px solid',
        borderColor: theme.palette.divider,
      }}
    >
      <Button
        onClick={onClick}
        sx={{
          height: '20px',
        }}
      >
        <ArrowBackIosIcon
          sx={{
            fontSize: '13px',
            mr: 1,
            color: theme.palette.common.black,
          }}
        />
        <Typography variant="subtitle2">{text}</Typography>
      </Button>
    </Stack>
  );
}
