import { Switch, FormGroup, FormControlLabel } from '@mui/material'

import { useBuildContext } from '../hooks/useBuildContext'
import { isLargeCab } from '../context/buildReducer'

const UpgradeSwitch = () => {
  const { state, dispatch } = useBuildContext()

  const toggleUpgrade = () => {
    dispatch({ type: 'SET_UPGRADE', payload: !state.isUpgrade })
  }

  return (
    <FormGroup>
      <FormControlLabel
        control={
          <Switch
            checked={state.isUpgrade}
            onChange={toggleUpgrade}
            disabled={isLargeCab(state)}
            size='small'
          />
        }
        label='Large Upgrade'
      />
    </FormGroup>
  )
}
export default UpgradeSwitch
