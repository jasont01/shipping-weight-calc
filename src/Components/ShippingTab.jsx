import { Box, Typography, TextField, Divider, Button } from '@mui/material'
import { useShipmentContext } from '../hooks/useShipmentContext'

const ShippingTab = ({
  pallets,
  misc,
  shippingMaterials,
  setShippingMaterials,
}) => {
  const { dispatch } = useShipmentContext()

  const handleClick = () => {
    shippingMaterials.map(
      (item) => item.qty > 0 && dispatch({ type: 'ADD_ITEM', payload: item })
    )
  }

  const onChange = (e) => {
    setShippingMaterials(
      shippingMaterials.map((material) =>
        material.part === e.target.id
          ? { ...material, qty: parseInt(e.target.value) }
          : material
      )
    )
  }
  return (
    <Box>
      <Box sx={{ mb: 2 }}>
        <Typography variant='subtitle2' sx={{ mb: 1 }}>
          Pallets
        </Typography>
        {pallets.map((item) => (
          <TextField
            key={item.part}
            id={item.part}
            label={item.desc}
            value={shippingMaterials.find((a) => a.part === item.part).qty}
            type='number'
            InputProps={{ inputProps: { min: 0 } }}
            defaultValue={0}
            sx={{ width: '5em', m: 1 }}
            size={'small'}
            onChange={onChange}
          />
        ))}
      </Box>
      <Box sx={{ mb: 2 }}>
        <Typography variant='subtitle2' sx={{ mb: 1 }}>
          Misc
        </Typography>
        {misc.map((item) => (
          <TextField
            key={item.part}
            id={item.part}
            label={item.desc}
            value={shippingMaterials.find((a) => a.part === item.part).qty}
            type='number'
            InputProps={{ inputProps: { min: 0 } }}
            defaultValue={0}
            sx={{ width: '5em', m: 1 }}
            size={'small'}
            onChange={onChange}
          />
        ))}
      </Box>
      <Divider sx={{ m: 3 }} />
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Button variant='contained' onClick={handleClick}>
          Add
        </Button>
      </Box>
    </Box>
  )
}

export default ShippingTab
