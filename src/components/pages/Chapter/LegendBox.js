import { Stack, Typography } from '@mui/material';

export default function LegendBox({ label, name }) {
  return (
    <Stack rowGap={0.5}>
      <Typography
        variant={'subtitle1'}
        color={'text.primary'}
        sx={{
          opacity: 0.7,
        }}
        fontWeight={400}
      >
        {label}
      </Typography>
      <Typography
        variant={'body1'}
        fontWeight={400}
        sx={{
          opacity: 0.9,
        }}
        lineHeight={1.2}
        color={'text.primary'}
      >
        {name}
      </Typography>
    </Stack>
  );
}
