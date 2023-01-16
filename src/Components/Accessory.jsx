import { TextField } from '@mui/material'
import { useBuildContext } from '../hooks/useBuildContext'

const Accessory = ({ item }) => {
  const { accessories, dispatch } = useBuildContext()

  const handleChange = (e) => {
    dispatch({
      type: 'SET_ACCESSORIES',
      payload: { ...item, qty: parseInt(e.target.value) },
    })
  }

  return (
    <TextField
      key={item.part}
      id={item.part}
      label={item.part}
      type='number'
      InputProps={{ inputProps: { min: 0 } }}
      value={accessories.find((accs) => accs.part === item.part).qty}
      sx={{ width: '5em', m: 1 }}
      size={'small'}
      onChange={handleChange}
    />
  )
}
export default Accessory
