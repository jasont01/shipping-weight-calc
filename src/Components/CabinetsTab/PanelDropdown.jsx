import { Box, InputLabel, MenuItem, FormControl, Select } from '@mui/material'

import { useBuildContext } from '../../hooks/useBuildContext'

const PanelDropdown = ({ panels }) => {
  const { panelType, dispatch, isHybrid } = useBuildContext()

  const label = isHybrid ? 'Type' : 'Panel'

  return (
    <FormControl size='sm' sx={{ m: 1 }}>
      <Box sx={{ minWidth: 80 }}>
        <FormControl fullWidth>
          <InputLabel id='panelType-select-label'>{label}</InputLabel>
          <Select
            labelId='panelType-select-label'
            value={panelType}
            label='Panel'
            size={'small'}
            onChange={(e) =>
              dispatch({ type: 'SET_PANEL_TYPE', payload: e.target.value })
            }
          >
            {panels.map(
              (panel) =>
                !panel.hidden && (
                  <MenuItem key={panel.type} value={panel}>
                    {panel.type}
                  </MenuItem>
                )
            )}
          </Select>
        </FormControl>
      </Box>
    </FormControl>
  )
}

export default PanelDropdown
