import { Box, Stack, Typography } from '@mui/material';
import { theme } from 'theme';

const Section = ({ title, customTitle, ...prop }) => {
  return (
    <Box
      sx={{
        position: 'relative',
      }}
    >
      {title && !customTitle && (
        <Stack
          sx={{
            background: theme.palette.primary.main,
            p: {
              xs: '16px',
              sm: '40px',
            },
          }}
        >
          <Typography
            variant="h1"
            color={theme.palette.common.white}
            fontSize={{
              xs: '5rem',
              md: '340px',
            }}
          >
            {title}
          </Typography>
        </Stack>
      )}
      {customTitle && (
        <Stack
          sx={{
            background: theme.palette.primary.main,

            wordBreak: 'break-all',
          }}
        >
          {customTitle}
        </Stack>
      )}
      <Stack
        sx={{
          background: theme.palette.common.white,
        }}
      >
        {prop.children}
      </Stack>
    </Box>
  );
};

export default Section;
