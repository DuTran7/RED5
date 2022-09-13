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

export const PressListResults = ({ data, ...rest }) => {
  const [selectedPressIds, setSelectedPressIds] = useState([]);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(0);

  const handleSelectAll = (event) => {
    let newSelectedPressIds;

    if (event.target.checked) {
      newSelectedPressIds = data.map((p) => p.id);
    } else {
      newSelectedPressIds = [];
    }

    setSelectedPressIds(newSelectedPressIds);
  };

  const handleSelectOne = (event, id) => {
    const selectedIndex = selectedPressIds.indexOf(id);
    let newSelectedPressIds = [];

    if (selectedIndex === -1) {
      newSelectedPressIds = newSelectedPressIds.concat(selectedPressIds, id);
    } else if (selectedIndex === 0) {
      newSelectedPressIds = newSelectedPressIds.concat(
        selectedPressIds.slice(1)
      );
    } else if (selectedIndex === selectedPressIds.length - 1) {
      newSelectedPressIds = newSelectedPressIds.concat(
        selectedPressIds.slice(0, -1)
      );
    } else if (selectedIndex > 0) {
      newSelectedPressIds = newSelectedPressIds.concat(
        selectedPressIds.slice(0, selectedIndex),
        selectedPressIds.slice(selectedIndex + 1)
      );
    }

    setSelectedPressIds(newSelectedPressIds);
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
                    checked={selectedPressIds.length === data.length}
                    color="primary"
                    indeterminate={
                      selectedPressIds.length > 0 &&
                      selectedPressIds.length < data.length
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
              {data.slice(0, limit).map((press) => (
                <TableRow
                  hover
                  key={press.id}
                  selected={selectedPressIds.indexOf(press.id) !== -1}
                >
                  <TableCell padding="checkbox">
                    <Checkbox
                      checked={selectedPressIds.indexOf(press.id) !== -1}
                      onChange={(event) => handleSelectOne(event, press.id)}
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
                      <Avatar src={press.avatarUrl} sx={{ mr: 2 }}>
                        {getInitials(press.name)}
                      </Avatar>
                      <Typography color="textPrimary" variant="body1">
                        {press.name}
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell>{press.email}</TableCell>
                  <TableCell>
                    {`${press.address.city}, ${press.address.state}, ${press.address.country}`}
                  </TableCell>
                  <TableCell>{press.phone}</TableCell>
                  <TableCell>{format(press.createdAt, 'dd/MM/yyyy')}</TableCell>
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

PressListResults.propTypes = {
  data: PropTypes.array.isRequired,
};
