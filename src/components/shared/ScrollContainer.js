import { Box } from '@mui/material';
import { useState } from 'react';
import { theme } from 'theme';

export default function ScrollContainer({
  children,
  height,
  customClass = '',
  onSwipe,
  onScroll,
  ...other
}) {
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const [touchStartY, setTouchStartY] = useState(null);
  const [touchEndY, setTouchEndY] = useState(null);

  // the required distance between touchStart and touchEnd to be detected as a swipe
  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    setTouchEnd(null); // otherwise the swipe is fired even with usual touch events
    setTouchStart(e.targetTouches[0].clientX);
    setTouchStartY(e.targetTouches[0].clientY);
  };

  const onTouchMove = (e) => {
    // console.log(e.targetTouches[0]);
    setTouchEnd(e.targetTouches[0].clientX);
    setTouchEndY(e.targetTouches[0].clientY);
  };

  const onTouchEnd = (e) => {
    if (!touchStart || !touchEnd || !touchStartY || !touchEndY) return;
    const distance = touchStart - touchEnd;
    const distanceY = touchStartY - touchEndY;
    onSwipe?.(distanceY);
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    if (isLeftSwipe || isRightSwipe) {
    }
  };
  return (
    <Box
      {...other}
      className={'scroll-horizontal ' + customClass}
      sx={{
        display: {
          xs: 'block',
          md: 'flex',
        },
        background: theme.palette.common.black,
        overflowY: {
          xs: 'overlay',
          md: 'hidden',
        },
        overflowX: 'overlay',
        height: height || 'calc(100vh)',
      }}
      position={'relative'}
      minWidth={{
        xs: 'none',
        md: '100vw',
      }}
      onScroll={onScroll}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      {children}
    </Box>
  );
}
