import { useState } from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
import PropTypes from 'prop-types';
import { format } from 'date-fns';
import {
  Avatar,
  Box,
  Card,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
} from '@mui/material';
import { getInitials } from 'utils/helper';

export const DetailCategoryListResults = ({ data, ...rest }) => {
  const [selectedDetailCategoryIds, setSelectedDetailCategoryIds] = useState(
    []
  );
  const [limit, setLimit] = useState(10);
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
    <Card {...rest}>
      <PerfectScrollbar>
        <Box sx={{ minWidth: 1050 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell padding="checkbox">
                  <Checkbox
                    checked={selectedDetailCategoryIds.length === data.length}
                    color="primary"
                    indeterminate={
                      selectedDetailCategoryIds.length > 0 &&
                      selectedDetailCategoryIds.length < data.length
                    }
                    onChange={handleSelectAll}
                  />
                </TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Location</TableCell>
                <TableCell>Phone</TableCell>
                <TableCell>Registration date</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.slice(0, limit).map((d) => (
                <TableRow
                  hover
                  key={d.id}
                  selected={selectedDetailCategoryIds.indexOf(d.id) !== -1}
                >
                  <TableCell padding="checkbox">
                    <Checkbox
                      checked={selectedDetailCategoryIds.indexOf(d.id) !== -1}
                      onChange={(event) => handleSelectOne(event, d.id)}
                      value="true"
                    />
                  </TableCell>
                  <TableCell>
                    <Box
                      sx={{
                        alignItems: 'center',
                        display: 'flex',
                      }}
                    >
                      <Avatar src={d.avatarUrl} sx={{ mr: 2 }}>
                        {getInitials(d.name)}
                      </Avatar>
                      <Typography color="textPrimary" variant="body1">
                        {d.name}
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell>{d.email}</TableCell>
                  <TableCell>
                    {`${d.address.city}, ${d.address.state}, ${d.address.country}`}
                  </TableCell>
                  <TableCell>{d.phone}</TableCell>
                  <TableCell>{format(d.createdAt, 'dd/MM/yyyy')}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </PerfectScrollbar>
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
