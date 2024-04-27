import { TextField } from '@mui/material'

import { useBuildContext } from '../hooks/useBuildContext'

import { Item } from '../types/types'

interface Props {
  item: Item
}

const Accessory = ({ item }: Props) => {
  const { state, dispatch } = useBuildContext()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: 'SET_ACCESSORIES',
      payload: { ...item, qty: parseInt(e.target.value) },
    })
  }

  return (
    <TextField
      id={item.part}
      label={item.part}
      type='number'
      InputProps={{ inputProps: { min: 0 } }}
      value={state.accessories.find((accs) => accs.part === item.part)?.qty}
      sx={{ width: '5em', m: 1 }}
      size={'small'}
      onChange={handleChange}
    />
  )
}
export default Accessory
