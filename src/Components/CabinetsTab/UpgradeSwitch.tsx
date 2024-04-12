import { Switch, FormGroup, FormControlLabel } from '@mui/material'

import { useBuildContext } from '../../hooks/useBuildContext'

interface Props {
  disabled: boolean
}

const UpgradeSwitch = ({ disabled }: Props) => {
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
            disabled={disabled}
            size='small'
          />
        }
        label='Large Upgrade'
      />
    </FormGroup>
  )
}
export default UpgradeSwitch
