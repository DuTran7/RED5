import {
  Card,
  CardActionArea,
  CardContent,
  Stack,
  CardMedia,
  Typography,
  Grid,
} from '@mui/material';
import { width } from '@mui/system';
import { StyledOutlineButton } from 'components/ukit/Button';
import { theme } from 'theme';
import moment from 'moment';
import Link from 'next/link';

const BlogCard = ({
  width,
  imgHeight,
  title,
  content,
  img,
  createdD,
  category,
  background,
  onMouseOver,
  onMouseLeave,
}) => {
  return (
    <Card
      sx={{
        p: '20px',
        background,
        width,
        borderRadius: '0',
        boxShadow: 'none',
        borderTop: {
          xs: '1px solid' + theme.palette.primary.main,
          md: 'none',
        },
      }}
      onMouseOver={onMouseOver}
      onMouseLeave={onMouseLeave}
    >
      <CardMedia
        component="img"
        image={img}
        alt="green iguana"
        height={imgHeight}
        width={'100%'}
      />
      <CardContent
        sx={{
          p: '24px 0 0 !important',
        }}
      >
        <Typography
          gutterBottom
          variant="h7"
          component="div"
          color={'text.primary'}
          mb={'16px'}
        >
          {title}
        </Typography>
        <Stack
          direction={'row'}
          sx={{
            height: '46px',
          }}
          mb={'16px'}
        >
          <Stack
            flexBasis={'49.99%'}
            alignItems={'center'}
            justifyContent={'center'}
            sx={{
              borderTop: '1px solid',
              borderRight: '1px solid',
              borderBottom: '1px solid',
              borderColor: theme.palette.primary.main,
            }}
          >
            <Typography
              gutterBottom
              variant="subtitle2"
              color={'text.primary'}
              width={'fit-content'}
            >
              {moment(createdD).format('LL')}
            </Typography>
          </Stack>
          <Stack
            flexBasis={'49.99%'}
            alignItems={'center'}
            justifyContent={'center'}
            sx={{
              borderTop: '1px solid',
              borderBottom: '1px solid',
              borderColor: theme.palette.primary.main,
            }}
          >
            <Typography
              variant="subtitle2"
              color="text.primary"
              width={'fit-content'}
            >
              {category}
            </Typography>
          </Stack>
        </Stack>
        <Typography
          gutterBottom
          variant="subtitle1"
          component="div"
          color={'text.primary'}
          mb={'16px'}
        >
          {content}
        </Typography>
        <Typography
          gutterBottom
          variant="subtitle1"
          component="div"
          color={'primary.main'}
          sx={{ zIndex: 1 }}
          bottom={0}
          mb={'16px'}
        >
          <Link href={'/blogs/details/a'}>
            <a>
              <i>View detail</i>
            </a>
          </Link>
        </Typography>
      </CardContent>
    </Card>
  );
};

export default BlogCard;
