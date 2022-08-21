import { Stack } from '@mui/material';
import Slider from 'react-slick';
import { theme } from 'theme';
import ProductCard from './ProductCard';

const CarouselProduct = ({ data, width, height, sizeArrow }) => {
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
    <Slider className="carousel-product" {...setting}>
      {data &&
        data?.map((item, i) => (
          <Stack
            key={i}
            sx={{
              borderRight: {
                xs: 'none',
                md: `1px solid ${theme.palette.primary.main}`,
              },
            }}
            p={{
              xs: '20px 0px 0 20px',
              md: '20px',
            }}
          >
            <ProductCard key={i} item={item} />
          </Stack>
        ))}
    </Slider>
  );
};

export default CarouselProduct;
