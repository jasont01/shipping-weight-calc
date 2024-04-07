import { useState, useEffect } from 'react'
import { Switch, FormGroup, FormControlLabel } from '@mui/material'

import { useBuildContext } from '../../hooks/useBuildContext'

const UpgradeSwitch = () => {
  const { isUpgrade, panels, data, dispatch } = useBuildContext()

  const [disabled, setdisabled] = useState(true)

  useEffect(() => {
    setdisabled(panels > data.cabinets[1].maxPanels)
  }, [panels])

  const toggleUpgrade = () => {
    dispatch({ type: 'SET_UPGRADE', payload: !isUpgrade })
  }

  return (
    <FormGroup>
      <FormControlLabel
        control={
          <Switch
            label='Upgrade'
            checked={isUpgrade}
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
