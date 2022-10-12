import {
  Link,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import React from 'react';
import { theme } from 'theme';

export default function StyledTable({ columns, rows, ...rest }) {
  const renderRows = () => {
    const onClickLink = () => {};
    return (rows || []).map((item, index) => (
      <TableRow
        // StyledTableRowhover
        // onClick={(e) => {
        //   if (typeof handleTableRowClick === "function") {
        //     handleTableRowClick(e, item.attributes?.id);
        //   }
        // }}
        key={index}
      >
        {(columns || []).map((column) => (
          <TableCell
            key={column.key}
            align={'left'}
            // width={column.width}
            sx={{
              color: theme.palette.common.darkBlack,
              borderBottom: '0.5px solid #2B2828',
              lineHeight: '24px',
              maxWidth: '165px',
              padding: '12px',
              verticalAlign: 'super',
            }}
          >
            {column.key !== 'action' ? (
              item[column.key]
            ) : (
              <Link
                color={theme.palette.link.blue}
                underline="none"
                href="#"
                onClick={onClickLink}
              >
                View order
              </Link>
            )}
          </TableCell>
        ))}
      </TableRow>
    ));
  };

  return (
    <React.Fragment>
      <TableContainer>
        <Table aria-label="customized table">
          <TableHead>
            <TableRow>
              {columns.map((item) => (
                <TableCell
                  key={item.key}
                  align={'left'}
                  width={item.width}
                  sx={{
                    fontWeight: '700',
                    fontSize: '12px',
                    fontFamily: theme.typography.bold70012lower,
                    color: theme.palette.common.darkBlack,
                    borderBottom: '0.5px solid #2B2828',
                    // textTransform: 'capitalize',
                    lineHeight: '18px',
                    maxWidth: '165px',
                    padding: '12px',
                  }}
                >
                  {item.title}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>{renderRows()}</TableBody>
        </Table>
      </TableContainer>
    </React.Fragment>
  );
}
