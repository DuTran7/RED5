import { Stack } from '@mui/material';
import { theme } from 'theme';
import CartItem from './CartItem';

export default function CartItems2({ items, showAction }) {
  return (
    <Stack
      p={'16px 0 0'}
      rowGap={'20px'}
      maxHeight={'480px'}
      overflow={'hidden auto'}
    >
      {items?.length > 0 &&
        items.map((item, i) => (
          <Stack
            key={i}
            px={'40px'}
            pb={'16px'}
            borderBottom={'1px solid ' + theme.palette.primary.main}
          >
            <CartItem
              showAction={false}
              key={i}
              id={item?.id}
              imgSrc={item.imgSrc}
              title={item.title}
              grid={item.grid}
              bagSize={item.bagSize}
              quantity={item.quantity}
              price={item.price}
              freq={item?.subscription}
            />
          </Stack>
        ))}
    </Stack>
  );
}
