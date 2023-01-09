import { Box, Typography, TextField, Divider, Button } from '@mui/material'

const ShippingTab = ({ data: materials, addToShipment }) => {
  return (
    <Box>
      {materials.map((material) => (
        <Box sx={{ mb: 2 }}>
          <Typography variant='subtitle2' sx={{ mb: 1 }}>
            {material.type}
          </Typography>
          {material.items.map((item) => (
            <TextField
              id={item.desc}
              label={item.desc}
              type='number'
              InputProps={{ inputProps: { min: 0 } }}
              defaultValue={0}
              sx={{ width: '5em', m: 1 }}
              size={'small'}
            />
          ))}
        </Box>
      ))}
      <Divider sx={{ m: 3 }} />
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Button variant='contained' onClick={addToShipment}>
          Add
        </Button>
      </Box>
    </Box>
  )
}

export default ShippingTab
