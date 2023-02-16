import { Helmet } from 'react-helmet-async';
import { filter } from 'lodash';
import { sentenceCase } from 'change-case';
import { useState } from 'react';
// @mui
import {
  Card,
  Table,
  Stack,
  Paper,
  Avatar,
  Button,
  Popover,
  Checkbox,
  TableRow,
  MenuItem,
  TableBody,
  TableCell,
  Container,
  Typography,
  IconButton,
  TableContainer,
  TablePagination,
} from '@mui/material';
// components
import Label from '../../components/label';
import Iconify from '../../components/iconify';

// mock
import TEACHERLIST from '../../_mock/TeacherData';
import { TeacherListHead, TeacherListToolbar } from '../../sections/@dashboard/teacher';
import NewTeacher from './add/NewTeacher';


// ----------------------------------------------------------------------

const TABLE_HEAD = [
  { id: 'firstname', label: 'First Name', alignRight: false },
  { id: 'lastname', label: 'Last Name', alignRight: false },
  { id: 'address', label: 'Address', alignRight: false },
  { id: 'numberphone', label: 'Number Phone', alignRight: false },
  { id: 'status', label: 'Status', alignRight: false },
  { id: 'level', label: 'Level', alignRight: false },
  { id: '' },
];

// ----------------------------------------------------------------------

function descendingComparator(a:any, b:any, orderBy:string) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order:string, orderBy:string) {
  return order === 'desc'
    ? (a:any, b:any) => descendingComparator(a, b, orderBy)
    : (a:any, b:any) => -descendingComparator(a, b, orderBy);
}

// tim kiem theo ten
function applySortFilter(array:any, comparator:any, query:string) {
  const stabilizedThis = array.map((el:any, index:number) => [el, index]);
  stabilizedThis.sort((a:any, b:any) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  if (query) {
    return filter(array, (_user:any) => _user.firstname.toLowerCase().indexOf(query.toLowerCase()) !== -1);
  }
  return stabilizedThis.map((el:any) => el[0]);
}

export default function TeacherList() {
  const [open, setOpen] = useState(null);

  const [page, setPage] = useState(0);

  const [order, setOrder] = useState('asc');

  const [selected, setSelected] = useState<string[]>([]);

  const [orderBy, setOrderBy] = useState('firstname');

  const [filterName, setFilterName] = useState('');

  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleOpenMenu = (event:any) => {
    setOpen(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setOpen(null);
  };

  const handleRequestSort = (event:any, property:string) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event:any) => {
    if (event.target.checked) {
      const newSelecteds:any = TEACHERLIST.map((n:any) => n.firstname);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

//   console.log(USERLIST)

// Checkbox
  const handleClick = (event:any, firstname:string) => {
    const selectedIndex:number= selected.indexOf((firstname));
    let newSelected:any = [];
    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, firstname);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(selected.slice(0, selectedIndex), selected.slice(selectedIndex + 1));
    }
    setSelected(newSelected);
    // console.log('TeacherName',firstname)
  };

 

  const handleChangePage = (event:any, newPage:number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event:any) => {
    setPage(0);
    setRowsPerPage(parseInt(event.target.value, 10));
  };

  const handleFilterByName = (event:any) => {
    setPage(0);
    setFilterName(event.target.value);
    console.log('FilterName',event)
  };

  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - TEACHERLIST.length) : 0;

  const filteredUsers = applySortFilter(TEACHERLIST, getComparator(order, orderBy), filterName);

  const isNotFound = !filteredUsers.length && !!filterName;

  return (
    <>
      <Helmet>
        <title> Teacher | LMS </title>
      </Helmet>

      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            Teacher Manager
          </Typography>
         <NewTeacher/>
        </Stack>

        <Card>
          <TeacherListToolbar numSelected={selected.length} filterName={filterName} onFilterName={handleFilterByName}/>


          {/* <Scrollbar sx={{}}> */}
            <TableContainer sx={{ minWidth: 800 }}>
              <Table>
                <TeacherListHead
                  order={order}
                  orderBy={orderBy}
                  headLabel={TABLE_HEAD}
                  rowCount={TEACHERLIST.length}
                  numSelected={selected.length}
                  onRequestSort={handleRequestSort}
                  onSelectAllClick={handleSelectAllClick}
                />
                <TableBody>
                  {filteredUsers.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row:any) => {
                    const { id, firstname, lastname, address, avatarUrl,  numberphone,status, level } = row;
                    const selectedUser = selected.indexOf((firstname)) !== -1;

                    return (
                      <TableRow hover key={id} tabIndex={-1} role="checkbox" selected={selectedUser}>
                        <TableCell padding="checkbox">
                          <Checkbox checked={selectedUser} onChange={(event) => handleClick(event, firstname)} />
                        </TableCell>

                        <TableCell component="th" scope="row" padding="none">
                          <Stack direction="row" alignItems="center" spacing={2}>
                            <Avatar alt={firstname} src={avatarUrl} />
                            <Typography variant="subtitle2" noWrap>
                              {firstname}
                            </Typography>
                          </Stack>
                        </TableCell>

                        <TableCell align="left">{lastname}</TableCell>

                        <TableCell align="left">{address}</TableCell>

                    

                        <TableCell align="left">{numberphone}</TableCell>

                
                        <TableCell align="left">
                          <Label color={(status === 'disactive' && 'error') || 'success'}>{sentenceCase(status)}</Label>
                        </TableCell>

                        <TableCell align="left">{level}</TableCell>

                        <TableCell align="right">
                          <IconButton size="large" color="inherit" onClick={handleOpenMenu}>
                            <Iconify icon={'eva:more-vertical-fill'} />
                          </IconButton>
                        </TableCell>
                      </TableRow>
                    );
                  })}
                  {emptyRows > 0 && (
                    <TableRow style={{ height: 53 * emptyRows }}>
                      <TableCell colSpan={6} />
                    </TableRow>
                  )}
                </TableBody>

                {isNotFound && (
                  <TableBody>
                    <TableRow>
                      <TableCell align="center" colSpan={6} sx={{ py: 3 }}>
                        <Paper
                          sx={{
                            textAlign: 'center',
                          }}
                        >
                          <Typography variant="h6" paragraph>
                            Not found
                          </Typography>

                          <Typography variant="body2">
                            No results found for &nbsp;
                            <strong>&quot;{filterName}&quot;</strong>.
                            <br /> Try checking for typos or using complete words.
                          </Typography>
                        </Paper>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                )}
              </Table>
            </TableContainer>
          {/* </Scrollbar> */}

          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={TEACHERLIST.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Card>
      </Container>

      <Popover
        open={Boolean(open)}
        anchorEl={open}
        onClose={handleCloseMenu}
        anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        PaperProps={{
          sx: {
            p: 1,
            width: 140,
            '& .MuiMenuItem-root': {
              px: 1,
              typography: 'body2',
              borderRadius: 0.75,
            },
          },
        }}
      >
        <MenuItem>
          <Iconify icon={'eva:edit-fill'} sx={{ mr: 2 }} />
          Edit
        </MenuItem>

        <MenuItem sx={{ color: 'error.main' }}>
          <Iconify icon={'eva:trash-2-outline'} sx={{ mr: 2 }} />
          Delete
        </MenuItem>
      </Popover>
    </>
  );
}