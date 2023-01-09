import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
} from '@mui/material'
import Item from './Item'
import Summary from './Summary'
import { useShipmentContext } from '../hooks/useShipmentContext'

const Items = () => {
  const { items, dispatch } = useShipmentContext()

  const handleReset = () => dispatch({ type: 'RESET' })

  if (!items || items.length === 0) return

  return (
    <>
      <TableContainer component={Paper} sx={{ mt: 6 }}>
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
      <Button sx={{ mt: 2 }} onClick={handleReset}>
        Reset
      </Button>
      <Summary />
    </>
  )
}

export default Items
