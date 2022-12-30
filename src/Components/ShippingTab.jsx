import { Typography, TextField } from '@mui/material'

const ShippingTab = () => {
  return (
    <>
      <Typography variant='subtitle2' sx={{ mb: 2 }}>
        Pallets
      </Typography>
      <TextField
        id='PBX028'
        label='56x42'
        type='number'
        InputProps={{ inputProps: { min: 0 } }}
        defaultValue={0}
        sx={{ width: '5em' }}
        size={'small'}
      />
      <TextField
        id='PBX021'
        label='48x40'
        type='number'
        InputProps={{ inputProps: { min: 0 } }}
        defaultValue={0}
        sx={{ width: '5em', mx: 2 }}
        size={'small'}
      />
      <TextField
        id='PBX003'
        label='36x36'
        type='number'
        InputProps={{ inputProps: { min: 0 } }}
        defaultValue={0}
        sx={{ width: '5em' }}
        size={'small'}
      />
    </>
  )
}
export default ShippingTab
