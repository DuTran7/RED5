import {
  Box,
  Button,
  Card,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
} from '@mui/material';
import CreateCategoryDetailForm from 'components/form/CreateCategoryDetailForm';
import {
  updateAward,
  updateFile,
  uploadFile,
} from 'components/service/AwardService';
import { updateDetailCategory } from 'components/service/CategoryDetailService';
import Albums from 'components/shared/Albums';
import StyledDialog from 'components/shared/Dialog';
import { useSnackbar } from 'notistack';
import PropTypes from 'prop-types';
import { useState } from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { IMAGE_SOURCE, ITEM_STATUS } from 'utils/constants';

export const DetailCategoryListResults = ({
  data,
  handleChangeList,
  onClose,
  categories,
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

  const handleAddImage = async (fileUrl, file, description) => {
    const bodyUploadFile = new FormData();
    bodyUploadFile.append('image', file);
    bodyUploadFile.append(
      'jsonAlbum',
      JSON.stringify({
        idDetailCategory: itemSelected?.id,
        description: description || 'detailCategory id ' + itemSelected?.id,
      })
    );
    const res = await uploadFile(bodyUploadFile);
    if (!res?.status === 200) {
      enqueueSnackbar('Upload file failed, please try again!', {
        variant: 'error',
      });
      return;
    }
    enqueueSnackbar('Upload image success', {
      variant: 'success',
    });
    handleCloseAlbum();
    handleChangeList();
  };
  const onClickDelImg = async (id) => {
    const res = await updateFile({
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
  const onClickDelete = async (id) => {
    const res = await updateDetailCategory({
      id,
      status: ITEM_STATUS.DEACTIVATED,
    });
    if (!res?.status === 200) {
      enqueueSnackbar('Delete category detail failed, please try again!', {
        variant: 'error',
      });
      return;
    } else {
      enqueueSnackbar('Delete success', {
        variant: 'success',
      });
      handleCloseAlbum();
      handleChangeList();
    }
  };
  const [selectedDetailCategoryIds, setSelectedDetailCategoryIds] = useState(
    []
  );
  const [limit, setLimit] = useState(999);
  const [page, setPage] = useState(0);

  const handleSelectAll = (event) => {
    let newSelectedDetailCategoryIds;

    if (event.target.checked) {
      newSelectedDetailCategoryIds = data.map((e) => e.id);
    } else {
      newSelectedDetailCategoryIds = [];
    }

    setSelectedDetailCategoryIds(newSelectedDetailCategoryIds);
  };

  const handleSelectOne = (event, id) => {
    const selectedIndex = selectedDetailCategoryIds.indexOf(id);
    let newSelectedDetailCategoryIds = [];

    if (selectedIndex === -1) {
      newSelectedDetailCategoryIds = newSelectedDetailCategoryIds.concat(
        selectedDetailCategoryIds,
        id
      );
    } else if (selectedIndex === 0) {
      newSelectedDetailCategoryIds = newSelectedDetailCategoryIds.concat(
        selectedDetailCategoryIds.slice(1)
      );
    } else if (selectedIndex === selectedDetailCategoryIds.length - 1) {
      newSelectedDetailCategoryIds = newSelectedDetailCategoryIds.concat(
        selectedDetailCategoryIds.slice(0, -1)
      );
    } else if (selectedIndex > 0) {
      newSelectedDetailCategoryIds = newSelectedDetailCategoryIds.concat(
        selectedDetailCategoryIds.slice(0, selectedIndex),
        selectedDetailCategoryIds.slice(selectedIndex + 1)
      );
    }

    setSelectedDetailCategoryIds(newSelectedDetailCategoryIds);
  };

  const handleLimitChange = (event) => {
    setLimit(event.target.value);
  };

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  return (
    <Card
      className="admin-cms"
      {...rest}
      sx={{
        overflowX: 'auto',
        mb: 4,
      }}
    >
      <PerfectScrollbar>
        <Box>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Action</TableCell>
                <TableCell>ID</TableCell>
                <TableCell>Name</TableCell>
                <TableCell
                  sx={{
                    minWidth: '300px',
                  }}
                >
                  Description
                </TableCell>
                <TableCell>Image</TableCell>
                <TableCell>Chapter</TableCell>
                <TableCell>Albums</TableCell>
                <TableCell>Design</TableCell>
                <TableCell>Design Team</TableCell>
                <TableCell>Client</TableCell>
                <TableCell>Area</TableCell>
                <TableCell>Material</TableCell>
                <TableCell>Location</TableCell>
                <TableCell>Photo</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.slice(0, limit).map(({ albums, detailCategory }) => (
                <TableRow
                  hover
                  key={detailCategory.id}
                  selected={
                    selectedDetailCategoryIds.indexOf(detailCategory.id) !== -1
                  }
                >
                  <TableCell>
                    <Button
                      onClick={() => {
                        setItemSelected(detailCategory);
                        setAlbumsSelected(albums);
                        handleClickOpen();
                      }}
                    >
                      Update
                    </Button>
                    <Button
                      onClick={() => {
                        onClickDelete(detailCategory.id);
                      }}
                    >
                      Delete
                    </Button>
                  </TableCell>
                  <TableCell>{detailCategory.id}</TableCell>
                  <TableCell>{detailCategory.name}</TableCell>
                  <TableCell>
                    <Typography
                      variant="body1"
                      color={'black'}
                      title={detailCategory?.description}
                    >
                      {detailCategory?.description &&
                        detailCategory?.description?.slice(0, 150) + '...'}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <img
                      src={IMAGE_SOURCE + detailCategory.image}
                      height={80}
                      width={'max-content'}
                    />
                  </TableCell>
                  <TableCell>
                    {
                      categories?.find(
                        (item) =>
                          item?.categories?.id === detailCategory?.idCategory
                      )?.categories?.description
                    }
                  </TableCell>
                  <TableCell>
                    <Button
                      onClick={() => {
                        setItemSelected(detailCategory);
                        setAlbumsSelected(albums);
                        handleClickAlbum();
                      }}
                      sx={{
                        '&:hover': {
                          '& .MuiTypography-body1': {
                            color: 'blue',
                          },
                        },
                      }}
                    >
                      <Typography variant="body1">
                        {`View Albums (${albums?.length})`}
                      </Typography>
                    </Button>
                    <StyledDialog
                      title={'Albums'}
                      open={openAlbum}
                      handleClose={handleCloseAlbum}
                    >
                      <Albums
                        data={albumsSelected}
                        onClickAddImg={handleAddImage}
                        onClickDelImg={onClickDelImg}
                      />
                    </StyledDialog>
                  </TableCell>
                  <TableCell>{detailCategory.design}</TableCell>
                  <TableCell>{detailCategory.designTeam}</TableCell>
                  <TableCell>{detailCategory.client}</TableCell>
                  <TableCell>{detailCategory.area}</TableCell>
                  <TableCell>{detailCategory.material}</TableCell>
                  <TableCell>{detailCategory.location}</TableCell>
                  <TableCell>{detailCategory.photo}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </PerfectScrollbar>
      <StyledDialog
        title={'Update Detail Category'}
        open={open}
        handleClose={handleClose}
      >
        <CreateCategoryDetailForm
          data={itemSelected}
          categories={categories}
          onClose={() => {
            handleClose();
            handleChangeList();
          }}
        />
      </StyledDialog>
      <TablePagination
        component="div"
        count={data.length}
        onPageChange={handlePageChange}
        onRowsPerPageChange={handleLimitChange}
        page={page}
        rowsPerPage={limit}
        rowsPerPageOptions={[5, 10, 25]}
      />
    </Card>
  );
};

DetailCategoryListResults.propTypes = {
  data: PropTypes.array.isRequired,
};
