import { Switch, FormGroup, FormControlLabel, Tooltip } from '@mui/material'

import { useBuildContext } from '../../hooks/useBuildContext'

const HybridSwitch = () => {
  const { dispatch, isAddon, isHybrid } = useBuildContext()

  const toggleAddon = () => {
    dispatch({ type: 'SET_ADDON', payload: !isAddon })
  }

  const Control = () => (
    <Switch
      label='Addon'
      checked={isAddon}
      onChange={toggleAddon}
      disabled={isHybrid}
      size='small'
    />
  )

  return (
    <FormGroup>
      <FormControlLabel
        control={
          isHybrid ? (
            <Tooltip
              arrow
              title='Option not avaiable for hybrids'
              placement='top-start'
            >
              <span>
                <Control />
              </span>
            </Tooltip>
          ) : (
            <Control />
          )
        }
        label='Addon'
      />
    </FormGroup>
  )
}
export default HybridSwitch
