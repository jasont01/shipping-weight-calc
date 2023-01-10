import { Box, Typography, Divider, Button, TextField } from '@mui/material'
import { useShipmentContext } from '../hooks/useShipmentContext'

const AccessoriesTab = ({ categories, accessories, setAccessories }) => {
  const { dispatch } = useShipmentContext()

  const handleClick = () => {
    accessories.map(
      (item) => item.qty > 0 && dispatch({ type: 'ADD_ITEM', payload: item })
    )
  }

  const onChange = (e) => {
    setAccessories(
      accessories.map((accessory) =>
        accessory.part === e.target.id
          ? { ...accessory, qty: parseInt(e.target.value) }
          : accessory
      )
    )
  }

  return (
    <>
      {categories.map((category) => (
        <Box sx={{ mb: 2 }} key={category.type}>
          <Typography variant='subtitle2' sx={{ mb: 1 }}>
            {category.type}
          </Typography>
          {category.items.map((item) => (
            <TextField
              key={item.part}
              id={item.part}
              label={item.part}
              type='number'
              InputProps={{ inputProps: { min: 0 } }}
              value={accessories.find((a) => a.part === item.part).qty}
              sx={{ width: '5em', m: 1 }}
              size={'small'}
              onChange={onChange}
            />
          ))}
        </Box>
      ))}
      <Divider sx={{ m: 3 }} />
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Button variant='contained' onClick={handleClick}>
          Add
        </Button>
      </Box>
    </>
  )
}

export default AccessoriesTab
