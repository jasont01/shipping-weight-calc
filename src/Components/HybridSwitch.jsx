import { Switch, FormGroup, FormControlLabel } from '@mui/material'

import { useBuildContext } from '../hooks/useBuildContext'

const HybridSwitch = () => {
  const { dispatch, isHybrid, isAddon } = useBuildContext()

  const toggleHybrid = () => {
    if (isAddon) dispatch({ type: 'SET_ADDON', payload: false })

    dispatch({ type: 'SET_HYBRID', payload: !isHybrid })
  }

  return (
    <FormGroup>
      <FormControlLabel
        control={
          <Switch
            label='Hybrid'
            checked={isHybrid}
            onChange={toggleHybrid}
            size='small'
          />
        }
        label='Hybrid'
      />
    </FormGroup>
  )
}
export default HybridSwitch
