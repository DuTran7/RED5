import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Stack,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';

export default function StyledDialog({
  title,
  open = false,
  handleClose,
  ...props
}) {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      sx={{
        '& .MuiTypography-root, & .MuiInputBase-input': {
          color: 'black',
        },
      }}
      maxWidth={'lg'}
    >
      <DialogTitle>
        <Stack direction={'row'} justifyContent={'space-between'}>
          {title}
          <Button>
            <CloseIcon onClick={handleClose} />
          </Button>
        </Stack>
      </DialogTitle>
      <DialogContent>{props?.children}</DialogContent>
    </Dialog>
  );
}
