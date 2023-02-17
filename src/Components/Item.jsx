import { TableCell, TableRow, IconButton } from '@mui/material'
import Counter from './Counter'
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline'
import { useShipmentContext } from '../hooks/useShipmentContext'

const Item = ({ item: { part, desc, qty, weight } }) => {
  const { dispatch } = useShipmentContext()

  const handleRemove = () => {
    dispatch({ type: 'REMOVE_ITEM', payload: part })
  }

  return (
    <TableRow key={part}>
      <TableCell>{desc}</TableCell>
      <TableCell align='right'>{part.split('|')[0]}</TableCell>
      <TableCell align='right'>
        <Counter part={part} qty={qty} />
      </TableCell>
      <TableCell align='right'>{weight.toFixed(1)}</TableCell>
      <TableCell width={'2em'} align='right'>
        <IconButton
          size='small'
          sx={{ color: '#e57373' }}
          onClick={handleRemove}
        >
          <RemoveCircleOutlineIcon />
        </IconButton>
      </TableCell>
    </TableRow>
  )
}

export default Item
