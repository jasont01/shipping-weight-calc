import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material'
import Item from './Item'

const Pallet = ({ items }) => {
  return (
    <TableContainer component={Paper} sx={{ p: 1, pb: 0 }}>
      <Table sx={{ minWidth: 700 }} size='small'>
        <TableHead>
          <TableRow>
            <TableCell>Desc</TableCell>
            <TableCell align='right'>Part</TableCell>
            <TableCell align='right' sx={{ pr: '4em' }}>
              Qty
            </TableCell>
            <TableCell align='right'>Weight</TableCell>
            <TableCell align='right'></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {items.map((item) => (
            <Item key={item.part} item={item} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
export default Pallet
