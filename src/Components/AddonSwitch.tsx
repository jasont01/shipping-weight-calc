import { Switch, FormGroup, FormControlLabel } from '@mui/material'

import { useBuildContext } from '../hooks/useBuildContext'

const AddonSwitch = () => {
  const { state, dispatch } = useBuildContext()

  const toggleAddon = () => {
    dispatch({ type: 'SET_ADDON', payload: !state.isAddon })
  }

  return (
    <FormGroup>
      <FormControlLabel
        control={
          <Switch checked={state.isAddon} onChange={toggleAddon} size='small' />
        }
        label='Addon'
      />
    </FormGroup>
  )
}
export default AddonSwitch
