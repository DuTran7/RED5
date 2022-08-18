import { Stack } from '@mui/material';
import { Carousel } from 'antd';
import Image from 'next/image';
import { theme } from 'theme';

const CarouselImg = ({ data, width, height, sizeArrow, fullWidth }) => {
  const setting = {
    dots: false,
    speed: 500,
    layzyLoad: true,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 1441,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2.2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: data?.length > 1 ? 1.2 : 1,
          dots: false,
        },
      },
    ],
    draggable: true,
    swipeToSlide: true,
    swipe: true,
    infinite: false,
  };
  return (
    <Carousel className="carousel-product" {...setting}>
      {data &&
        data?.map((item, i) => (
          <Stack
            key={i}
            height={'auto'}
            sx={{
              span: {
                borderRight:
                  '1px solid' + theme.palette.primary.main + '!important',
                borderBottom:
                  '1px solid' + theme.palette.primary.main + '!important',
              },
            }}
          >
            {!fullWidth && (
              <Image
                style={{}}
                key={i}
                src={item}
                width={width || 1600}
                height={height || 1600}
                alt={'image'}
              />
            )}
            {fullWidth && <img key={i} src={item} width={'64vw'} />}
          </Stack>
        ))}
    </Carousel>
  );
};

export default CarouselImg;
