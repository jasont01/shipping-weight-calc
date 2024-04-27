import { useState } from 'react'
import { TableCell, TableRow, IconButton } from '@mui/material'

import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline'
import ArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'
import ArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'

import Counter from './Counter'

import { useShipmentContext } from '../../hooks/useShipmentContext'
import { Item as ItemType } from '../../context/ShipmentContext'
import Details from './Details'

interface Props {
  item: ItemType
}

const Item = ({ item: { part, size, desc, qty, weight, details } }: Props) => {
  const [open, setOpen] = useState(false)

  const { dispatch } = useShipmentContext()

  const handleRemove = () => {
    dispatch({ type: 'REMOVE_ITEM', payload: part })
  }

  return (
    <>
      <TableRow key={part}>
        <TableCell>
          {details && (
            <IconButton
              aria-label='expand row'
              size='small'
              onClick={() => setOpen(!open)}
            >
              {open ? <ArrowDownIcon /> : <ArrowRightIcon />}
            </IconButton>
          )}
        </TableCell>
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
      {details && <Details details={details} open={open} />}
    </>
  )
}

export default Item
