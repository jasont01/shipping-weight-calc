import { TableCell, TableRow, IconButton } from '@mui/material'
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline'

import Counter from './Counter'

import { useShipmentContext } from '../../hooks/useShipmentContext'
import { Item as ItemType } from '../../context/ShipmentContext'

interface Props {
  item: ItemType
}

const Item = ({ item: { part, size, desc, qty, weight } }: Props) => {
  const { dispatch } = useShipmentContext()

  const handleRemove = () => {
    dispatch({ type: 'REMOVE_ITEM', payload: part })
  }

  return (
    <TableRow key={part}>
      <TableCell>{desc}</TableCell>
      <TableCell>{size}</TableCell>
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
