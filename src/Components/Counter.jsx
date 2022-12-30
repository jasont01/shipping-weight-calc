import { Box, IconButton } from '@mui/material'
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle'
import AddCircleIcon from '@mui/icons-material/AddCircle'
import { useShipmentContext } from '../hooks/useShipmentContext'

const Counter = ({ id, qty }) => {
  const { dispatch } = useShipmentContext()

  const increment = () => dispatch({ type: 'INCREMENT', payload: id })

  const decrement = () => {
    if (qty > 0) dispatch({ type: 'DECREMENT', payload: id })
  }

  return (
    <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
      <IconButton size='small' onClick={decrement} color='primary'>
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
