import { Box, IconButton } from '@mui/material'
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle'
import AddCircleIcon from '@mui/icons-material/AddCircle'
import { useShipmentContext } from '../../hooks/useShipmentContext'

const Counter = ({ part, qty }) => {
  const { dispatch } = useShipmentContext()

  const increment = () => dispatch({ type: 'INCREMENT', payload: part })

  const decrement = () => {
    if (qty > 1) dispatch({ type: 'DECREMENT', payload: part })
  }

  return (
    <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
      <IconButton
        size='small'
        onClick={decrement}
        color='primary'
        disabled={qty < 2}
      >
        <RemoveCircleIcon />
      </IconButton>
      <Box
        sx={{
          width: '1.5em',
          display: 'flex',
          flexWrap: 'wrap',
          alignContent: 'center',
          justifyContent: 'center',
        }}
      >
        {qty}
      </Box>
      <IconButton size='small' onClick={increment} color='primary'>
        <AddCircleIcon />
      </IconButton>
    </Box>
  )
}
export default Counter
