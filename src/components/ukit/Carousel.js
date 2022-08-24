import { Box } from '@mui/material';
import Slider from 'react-slick';

export const ChapterCarousel = ({ children }) => {
  const settings = {
    className: 'center',
    infinite: false,
    centerPadding: '60px',
    slidesToShow: 7.2,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 2000,
        settings: {
          slidesToShow: 7.2,
        },
      },
      {
        breakpoint: 1441,
        settings: {
          slidesToShow: 7.2,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5.5,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 5.1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };
  return (
    <div
      style={{
        width: '100%',
      }}
    >
      <Slider {...settings}>{children}</Slider>
    </div>
  );
};

export const LogoCarousel = ({ children }) => {
  const settings = {
    infinite: false,
    centerPadding: '0px',
    slidesToShow: 5.1,
    swipeToSlide: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 2000,
        settings: {
          slidesToShow: 5.1,
        },
      },
      {
        breakpoint: 1441,
        settings: {
          slidesToShow: 5.8,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4.5,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4.1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };
  return (
    <div
      style={{
        width: '100%',
      }}
    >
      <Slider {...settings}>{children}</Slider>
    </div>
  );
};

export const CenterCarousel = ({ children }) => {
  const settings = {
    className: 'center',
    centerMode: true,
    infinite: true,
    centerPadding: '0px',
    slidesToShow: 3,
    // slidesToScroll: 1,
    // dots: false,
    arrows: false,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 2000,
        settings: {
          // slidesToShow: 7.2,
        },
      },
      {
        breakpoint: 1441,
        settings: {
          // slidesToShow: 7.2,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          // slidesToShow: 5.5,
        },
      },
      {
        breakpoint: 600,
        settings: {
          // slidesToShow: 5.1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          // slidesToShow: 3,
        },
      },
    ],
  };
  return (
    <div
      style={{
        width: '100%',
      }}
    >
      <Slider {...settings}>{children}</Slider>
    </div>
  );
};
