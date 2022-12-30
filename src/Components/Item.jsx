import { TableCell, TableRow, IconButton } from '@mui/material'
import Counter from './Counter'
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline'
import { useShipmentContext } from '../hooks/useShipmentContext'

const Item = ({ item: { id, desc, qty, weight } }) => {
  const { dispatch } = useShipmentContext()

  const handleRemove = () => {
    dispatch({ type: 'REMOVE_ITEM', payload: id })
  }

  return (
    <TableRow key={id}>
      <TableCell>{desc}</TableCell>
      <TableCell align='right'>{id}</TableCell>
      <TableCell align='right'>
        <Counter id={id} qty={qty} />
      </TableCell>
      <TableCell align='right'>{weight}</TableCell>
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
