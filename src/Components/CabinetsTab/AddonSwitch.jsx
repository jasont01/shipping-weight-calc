import { Switch, FormGroup, FormControlLabel } from '@mui/material'

import { useBuildContext } from '../../hooks/useBuildContext'

const AddonSwitch = () => {
  const { dispatch, isAddon } = useBuildContext()

  const toggleAddon = () => {
    dispatch({ type: 'SET_ADDON', payload: !isAddon })
  }

  return (
    <FormGroup>
      <FormControlLabel
        control={
          <Switch
            label='Addon'
            checked={isAddon}
            onChange={toggleAddon}
            size='small'
          />
        }
        label='Addon'
      />
    </FormGroup>
  )
}
export default AddonSwitch
