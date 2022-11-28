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
import CreateAwardForm from 'components/form/CreateAwardForm';
import CreateCategoryForm from 'components/form/CreateCategoryForm';
import { updateFile, uploadFile } from 'components/service/AwardService';
import { updateCategory } from 'components/service/CategoryService';
import Albums from 'components/shared/Albums';
import StyledDialog from 'components/shared/Dialog';
import { useSnackbar } from 'notistack';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { IMAGE_SOURCE, ITEM_STATUS } from 'utils/constants';

export const CategoryListResults = ({
  categories,
  handleChangeList,
  onClose,
  ...rest
}) => {
  const { enqueueSnackbar } = useSnackbar();
  const [open, setOpen] = useState(false);
  const [openAlbum, setOpenAlbum] = useState(false);
  const [categorySelected, setCategorySelected] = useState(null);
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

  const handleAddImage = async (fileUrl, file, description = '') => {
    const bodyUploadFile = new FormData();
    bodyUploadFile.append('image', file);
    bodyUploadFile.append(
      'jsonAlbum',
      JSON.stringify({
        idCategory: categorySelected?.id,
        description,
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
    handleChangeList();
  };
  const onClickDelImg = async (id) => {
    const res = await updateFile({
      id,
      status: ITEM_STATUS.DEACTIVATED,
    });
    if (!res?.status === 200) {
      enqueueSnackbar('Delete img failed, please try again!', {
        variant: 'error',
      });
      return;
    }
    enqueueSnackbar('Delete image success', {
      variant: 'success',
    });
    handleChangeList();
  };
  const onClickDel = async (id) => {
    const res = await updateCategory({
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
  const [selectedCategoryIds, setSelectedCategoryIds] = useState([]);
  const [limit, setLimit] = useState(999);
  const [page, setPage] = useState(0);

  const handleSelectAll = (event) => {
    let newSelectedCategoryIds;

    if (event.target.checked) {
      newSelectedCategoryIds = categories.map((category) => category.id);
    } else {
      newSelectedCategoryIds = [];
    }

    setSelectedCategoryIds(newSelectedCategoryIds);
  };

  const handleSelectOne = (event, id) => {
    const selectedIndex = selectedCategoryIds.indexOf(id);
    let newSelectedCategoryIds = [];

    if (selectedIndex === -1) {
      newSelectedCategoryIds = newSelectedCategoryIds.concat(
        selectedCategoryIds,
        id
      );
    } else if (selectedIndex === 0) {
      newSelectedCategoryIds = newSelectedCategoryIds.concat(
        selectedCategoryIds.slice(1)
      );
    } else if (selectedIndex === selectedCategoryIds.length - 1) {
      newSelectedCategoryIds = newSelectedCategoryIds.concat(
        selectedCategoryIds.slice(0, -1)
      );
    } else if (selectedIndex > 0) {
      newSelectedCategoryIds = newSelectedCategoryIds.concat(
        selectedCategoryIds.slice(0, selectedIndex),
        selectedCategoryIds.slice(selectedIndex + 1)
      );
    }

    setSelectedCategoryIds(newSelectedCategoryIds);
  };

  const handleLimitChange = (event) => {
    setLimit(event.target.value);
  };

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  useEffect(() => {
    if (categorySelected) {
      const newAlbum = categories?.find(
        (el) => el.categories?.id === categorySelected?.id
      )?.albums;

      if (newAlbum?.length > 0) {
        setAlbumsSelected(newAlbum);
      }
    }
  }, [categories]);

  return (
    <Card className="admin-cms" {...rest}>
      <PerfectScrollbar>
        <Box sx={{ minWidth: 1050 }}>
          <Table>
            <TableHead>
              <TableRow>
                {/* <TableCell padding="checkbox">
                  <Checkbox
                    checked={selectedCategoryIds.length === categories?.length}
                    color="primary"
                    indeterminate={
                      selectedCategoryIds.length > 0 &&
                      selectedCategoryIds.length < categories?.length
                    }
                    onChange={handleSelectAll}
                  />
                </TableCell> */}
                <TableCell>ID</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Description</TableCell>
                <TableCell>Image</TableCell>
                <TableCell>Albums</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {categories?.slice(0, limit).map(({ categories, albums }) => (
                <TableRow
                  hover
                  key={categories.id}
                  selected={selectedCategoryIds.indexOf(categories.id) !== -1}
                >
                  {/* <TableCell padding="checkbox">
                    <Checkbox
                      checked={selectedCategoryIds.indexOf(category.id) !== -1}
                      onChange={(event) => handleSelectOne(event, category.id)}
                      value="true"
                    />
                  </TableCell> */}
                  <TableCell>{categories.id}</TableCell>
                  <TableCell>{categories.name}</TableCell>
                  <TableCell>{categories?.description || ''}</TableCell>
                  <TableCell>
                    {albums[0]?.length > 0 ? (
                      <img
                        src={IMAGE_SOURCE + albums[0]?.name}
                        height={50}
                        width={50}
                      />
                    ) : (
                      'Not have image'
                    )}
                  </TableCell>
                  <TableCell>
                    <Button
                      onClick={() => {
                        setCategorySelected(categories);
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
                  </TableCell>
                  <TableCell>
                    <Button
                      onClick={() => {
                        setCategorySelected(categories);
                        setAlbumsSelected(albums);
                        handleClickOpen();
                      }}
                    >
                      Update
                    </Button>
                    <Button
                      onClick={() => {
                        onClickDel(categories.id);
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
        title={'Update Category'}
        open={open}
        handleClose={handleClose}
      >
        <CreateCategoryForm
          data={{ ...categorySelected, albums: albumsSelected }}
          onClose={() => {
            handleClose();
            handleChangeList();
          }}
        />
      </StyledDialog>
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
      <TablePagination
        component="div"
        count={categories?.length}
        onPageChange={handlePageChange}
        onRowsPerPageChange={handleLimitChange}
        page={page}
        rowsPerPage={limit}
        rowsPerPageOptions={[5, 10, 25]}
      />
    </Card>
  );
};

CategoryListResults.propTypes = {
  categories: PropTypes.array.isRequired,
};
