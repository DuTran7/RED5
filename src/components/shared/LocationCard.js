import {
  Card,
  CardActionArea,
  CardContent,
  Stack,
  CardMedia,
  Typography,
} from '@mui/material';
import { width } from '@mui/system';
import { StyledOutlineButton } from 'components/ukit/Button';
import { theme } from 'theme';

const LocationCard = ({
  width,
  imgHeight,
  title,
  img,
  content,
  background,
  onMouseOver,
  onMouseLeave,
}) => {
  return (
    <Card
      sx={{
        p: { xs: '16px', md: '20px' },
        // mb: { xs: '16px', md: '0' },
        background,
        width,
        boxShadow: 'none',
      }}
      onMouseOver={onMouseOver}
      onMouseLeave={onMouseLeave}
    >
      <CardMedia
        component="img"
        image={img || '/imgs/Shooting/220106_OKKIO_NN_7384.jpg'}
        alt="green iguana"
        height={imgHeight}
        width={'100%'}
      />
      <CardContent
        sx={{
          p: '24px 0 0 !important',
        }}
      >
        <Stack direction={'row'}>
          <Stack flexBasis={'66.666%'}>
            {title && (
              <Typography
                gutterBottom
                variant="h3"
                component="div"
                color={'text.secondary'}
                marginBottom={'18px'}
              >
                {title}
              </Typography>
            )}
            {content && (
              <Typography
                variant="subtitle2"
                color="text.secondary"
                mr={'10px'}
              >
                {content}
              </Typography>
            )}
          </Stack>
          <Stack
            flexBasis={'33.333%'}
            justifyContent={'center'}
            alignItems={'end'}
          >
            <StyledOutlineButton
              sx={{
                width: {
                  xs: '96px',
                  md: '160px',
                },
                height: {
                  xs: '36px',
                  md: '60px',
                },
                borderColor: theme.palette.common.white,
              }}
            >
              <Typography variant="h4" color="text.secondary">
                VIEW
              </Typography>
            </StyledOutlineButton>
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default LocationCard;
