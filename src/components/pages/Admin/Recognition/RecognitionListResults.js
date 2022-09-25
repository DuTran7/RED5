import {
  Box,
  Button,
  Card,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
} from '@mui/material';
import CreateAwardForm from 'components/form/CreateAwardForm';
import CreateRecognitionForm from 'components/form/CreateRecognitionForm';
import { uploadFile } from 'components/service/AwardService';
import { updateCategory } from 'components/service/CategoryService';
import { updateRecognition } from 'components/service/RecognitionsService';
import StyledDialog from 'components/shared/Dialog';
import { useSnackbar } from 'notistack';
import PropTypes from 'prop-types';
import { useState } from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { ITEM_STATUS } from 'utils/constants';

export const RecognitionListResults = ({
  data,
  handleChangeList,
  press = [],
  onClose,
  limit,
  page,
  setPage,
  setLimit,
  ...rest
}) => {
  const { enqueueSnackbar } = useSnackbar();
  const [open, setOpen] = useState(false);
  const [openAlbum, setOpenAlbum] = useState(false);
  const [itemSelected, setItemSelected] = useState(null);
  const [albumsSelected, setAlbumsSelected] = useState([]);

  const handleClose = () => {
    setOpen(false);
  };
  const handleCloseAlbum = () => {
    setOpenAlbum(false);
  };
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClickAlbum = () => {
    setOpenAlbum(true);
  };

  const onClickDelImg = async (id) => {
    const res = await updateRecognition({
      id,
      status: ITEM_STATUS.DEACTIVATED,
    });
    if (!res?.status === 200) {
      enqueueSnackbar('Delete file failed, please try again!', {
        variant: 'error',
      });
      return;
    }
    enqueueSnackbar('Delete image success', {
      variant: 'success',
    });
    handleCloseAlbum();
    handleChangeList();
  };
  const [selectedRecognitionIds, setSelectedRecognitionIds] = useState([]);

  const handleSelectAll = (event) => {
    let newSelectedRecognitionIds;

    if (event.target.checked) {
      newSelectedRecognitionIds = data?.content?.map((p) => p.id);
    } else {
      newSelectedRecognitionIds = [];
    }

    setSelectedRecognitionIds(newSelectedRecognitionIds);
  };

  const handleSelectOne = (event, id) => {
    const selectedIndex = selectedRecognitionIds.indexOf(id);
    let newSelectedRecognitionIds = [];

    if (selectedIndex === -1) {
      newSelectedRecognitionIds = newSelectedRecognitionIds.concat(
        selectedRecognitionIds,
        id
      );
    } else if (selectedIndex === 0) {
      newSelectedRecognitionIds = newSelectedRecognitionIds.concat(
        selectedRecognitionIds.slice(1)
      );
    } else if (selectedIndex === selectedRecognitionIds.length - 1) {
      newSelectedRecognitionIds = newSelectedRecognitionIds.concat(
        selectedRecognitionIds.slice(0, -1)
      );
    } else if (selectedIndex > 0) {
      newSelectedRecognitionIds = newSelectedRecognitionIds.concat(
        selectedRecognitionIds.slice(0, selectedIndex),
        selectedRecognitionIds.slice(selectedIndex + 1)
      );
    }

    setSelectedRecognitionIds(newSelectedRecognitionIds);
  };

  const handleLimitChange = (event) => {
    setLimit(event.target.value);
  };

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  return (
    <Card className="admin-cms" {...rest}>
      <PerfectScrollbar>
        <Box sx={{ minWidth: 1050 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Press</TableCell>
                <TableCell>Link</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data?.content?.slice(0, limit).map((rc) => (
                <TableRow
                  hover
                  key={rc.id}
                  selected={selectedRecognitionIds.indexOf(rc.id) !== -1}
                >
                  <TableCell>{rc.id}</TableCell>
                  <TableCell>{rc.name}</TableCell>
                  <TableCell>
                    {
                      press?.find((item) => item?.id === rc?.idPress)
                        ?.description
                    }
                  </TableCell>
                  <TableCell>{rc.link}</TableCell>

                  <TableCell>
                    <Button
                      onClick={() => {
                        setItemSelected(rc);
                        handleClickOpen();
                      }}
                    >
                      Update
                    </Button>
                    <Button
                      onClick={() => {
                        onClickDelImg(rc.id);
                      }}
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </PerfectScrollbar>
      <StyledDialog
        title={'Update Recognition'}
        open={open}
        handleClose={handleClose}
      >
        <CreateRecognitionForm
          data={itemSelected}
          press={press}
          onClose={() => {
            handleClose();
            handleChangeList();
          }}
        />
      </StyledDialog>
      <TablePagination
        component="div"
        count={data.totalElements}
        onPageChange={handlePageChange}
        onRowsPerPageChange={handleLimitChange}
        page={page}
        rowsPerPage={limit}
        rowsPerPageOptions={[5, 10, 25]}
      />
    </Card>
  );
};

RecognitionListResults.propTypes = {
  data: PropTypes.array.isRequired,
};
