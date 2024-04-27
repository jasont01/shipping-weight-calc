import { Box, InputLabel, MenuItem, FormControl, Select } from '@mui/material'

import { useBuildContext } from '../../hooks/useBuildContext'

import { PanelType } from '../../types/types'

interface Props {
  panels: PanelType[]
  label?: string
  hidden?: boolean
  hybrid?: boolean
}

const PanelDropdown = ({
  panels,
  label = 'Panel',
  hidden = false,
  hybrid = false,
}: Props) => {
  const { state, dispatch } = useBuildContext()

  return (
    <FormControl size='small' sx={hidden ? { display: 'none' } : { m: 1 }}>
      <Box sx={{ minWidth: 80 }}>
        <FormControl fullWidth>
          <InputLabel id='panelType-select-label'>{label}</InputLabel>
          <Select
            labelId='panelType-select-label'
            value={hybrid ? state.hybridType.type : state.panelType.type}
            label='Panel'
            size={'small'}
            onChange={(e) =>
              dispatch({
                type: hybrid ? 'SET_HYBRID_TYPE' : 'SET_PANEL_TYPE',
                payload:
                  panels.find((p) => p.type === e.target.value) ?? panels[0],
              })
            }
          >
            {panels.map((panel) => (
              <MenuItem key={panel.type} value={panel.type}>
                {panel.type}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
    </FormControl>
  )
}

export default PanelDropdown
