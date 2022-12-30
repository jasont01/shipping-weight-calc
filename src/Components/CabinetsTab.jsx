import { FormControl, TextField } from '@mui/material'
import Dropdown from './Dropdown'

const CabinetsTab = () => {
  return (
    <>
      <FormControl size='sm' sx={{ mx: 1 }}>
        <Dropdown label={'Panel'} items={['MX', 'HC', 'Xi', 'DP']} />
      </FormControl>
      <FormControl size='sm' sx={{ mx: 1 }}>
        <Dropdown
          label={'Positions'}
          items={['288', '256', '224', '192', '160', '128']}
        />
      </FormControl>
      <FormControl size='sm' sx={{ mx: 1 }}>
        <Dropdown label={'Size'} items={['Large', 'Small', 'Mini']} />
      </FormControl>
      <FormControl size='sm' sx={{ mx: 1 }}>
        <Dropdown label={'Config'} items={['Kiosk', 'Addon']} />
      </FormControl>
      <FormControl size='sm' sx={{ mx: 1 }}>
        <Dropdown label={'Mount'} items={['Wall', 'Stand', 'None']} />
      </FormControl>
      <TextField
        id='qty'
        label='Qty'
        type='number'
        InputProps={{ inputProps: { min: 0 } }}
        defaultValue={1}
        sx={{ width: '5em', mx: 1 }}
        size={'small'}
      />
    </>
  )
}
export default CabinetsTab
