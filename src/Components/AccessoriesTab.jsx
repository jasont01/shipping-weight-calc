import { TextField, Typography } from '@mui/material'

const AccessoriesTab = () => {
  return (
    <>
      <Typography variant='subtitle2' sx={{ mb: 2 }}>
        APC
      </Typography>
      <TextField
        id='ATX020'
        label='ATX020'
        type='number'
        InputProps={{ inputProps: { min: 0 } }}
        defaultValue={0}
        sx={{ width: '5em', mr: 2 }}
        size={'small'}
      />
      <TextField
        id='ATX009'
        label='ATX009'
        type='number'
        InputProps={{ inputProps: { min: 0 } }}
        defaultValue={0}
        sx={{ width: '5em' }}
        size={'small'}
      />
      <Typography variant='subtitle2' sx={{ my: 2 }}>
        Zebra
      </Typography>
      <TextField
        id='ATM015'
        label='ATM015'
        type='number'
        InputProps={{ inputProps: { min: 0 } }}
        defaultValue={0}
        sx={{ width: '5em' }}
        size={'small'}
      />
      <Typography variant='subtitle2' sx={{ my: 2 }}>
        Wallboard
      </Typography>
      <TextField
        id='AAX010'
        label='Large'
        type='number'
        InputProps={{ inputProps: { min: 0 } }}
        defaultValue={0}
        sx={{ width: '5em' }}
        size={'small'}
      />
      <TextField
        id='AAX020'
        label='Small'
        type='number'
        InputProps={{ inputProps: { min: 0 } }}
        defaultValue={0}
        sx={{ width: '5em', mx: 2 }}
        size={'small'}
      />
      <TextField
        id='AAX056'
        label='Mini'
        type='number'
        InputProps={{ inputProps: { min: 0 } }}
        defaultValue={0}
        sx={{ width: '5em' }}
        size={'small'}
      />
      <Typography variant='subtitle2' sx={{ my: 2 }}>
        Stand
      </Typography>
      <TextField
        id='A600'
        label='A600'
        type='number'
        InputProps={{ inputProps: { min: 0 } }}
        defaultValue={0}
        sx={{ width: '5em' }}
        size={'small'}
      />
    </>
  )
}
export default AccessoriesTab
