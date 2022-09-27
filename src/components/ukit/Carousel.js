import { Box } from '@mui/material';
import { useEffect, useRef } from 'react';
import { isMobile } from 'react-device-detect';
import Slider from 'react-slick';

export const ChapterCarousel = ({ children }) => {
  const settings = {
    className: 'center',
    infinite: true,
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
          slidesToShow: 1.534,
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
    arrows: false,
    slidesToShow: 6,
    initialSlide: 0,
    // focusOnSelect: false,
    // slidesToScroll: 4,
    // rows: 1,
    // infinite: false,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 2000,
        settings: {
          // slidesToShow: 6.5,
        },
      },
      {
        breakpoint: 1441,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 1085,
        settings: {
          slidesToShow: 4,
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
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
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

export const ImageSlider = ({ children }) => {
  const settings = {
    // className: 'center',
    // centerMode: true,
    infinite: true,
    autoplay: true,
    speed: 200,
    cssEase: 'linear',
    // centerPadding: '10px',
    pauseOnHover: false,
    slidesToShow: 1,
    initialSlide: 0,
    arrows: false,
    swipeToSlide: false,
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
          // slidesToShow: 1.2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          // slidesToShow: 1.2,
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

export const CenterCarousel = ({
  refEl,
  children,
  onChange,
  curIndex = 1,
  ...other
}) => {
  const sliderRef = useRef();
  const settings = {
    className: 'center',
    centerMode: true,
    // infinite: true,
    centerPadding: '0',
    slidesToShow: 3,
    initialSlide: 1,
    focusOnSelect: !isMobile,
    // arrows: false,
    // variableWidth: true,
    beforeChange: onChange,
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
          slidesToShow: 1.2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          initialSlide: 1,
          slidesToShow: 1.2,
        },
      },
    ],
  };

  useEffect(() => {
    if (isMobile) {
      setTimeout(() => {
        sliderRef.current.slickGoTo(curIndex);
      }, 500);
    }
  }, [isMobile, sliderRef, curIndex]);
  return (
    <div
      style={{
        width: '100%',
      }}
    >
      <Slider ref={sliderRef} {...settings}>
        {children}
      </Slider>
    </div>
  );
};
