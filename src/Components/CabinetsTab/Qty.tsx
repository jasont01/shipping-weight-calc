import { FormControl, TextField } from '@mui/material'

import { useBuildContext } from '../../hooks/useBuildContext'

const Qty = () => {
  const { qty, dispatch } = useBuildContext()

  return (
    <FormControl>
      <TextField
        id='qty'
        label='Qty'
        type='number'
        InputProps={{ inputProps: { min: 1 } }}
        value={qty}
        onChange={(e) =>
          dispatch({ type: 'SET_QTY', payload: parseInt(e.target.value) })
        }
        sx={{ width: '4em', m: 1 }}
        size={'small'}
      />
    </FormControl>
  )
}
export default Qty
