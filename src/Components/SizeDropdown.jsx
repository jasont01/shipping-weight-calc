import { Box, InputLabel, MenuItem, FormControl, Select } from '@mui/material'
import { useBuildContext } from '../hooks/useBuildContext'

const Dropdown = ({ cabinets }) => {
  const { size, panelType, dispatch } = useBuildContext()

  return (
    <FormControl size='sm' sx={{ m: 1 }}>
      <Box sx={{ minWidth: 80 }}>
        <FormControl fullWidth>
          <InputLabel id='size-select-label'>Size</InputLabel>
          <Select
            labelId='size-select-label'
            value={size}
            label='Size'
            size={'small'}
            onChange={(e) =>
              dispatch({ type: 'SET_CABINET_SIZE', payload: e.target.value })
            }
          >
            {cabinets.map((cabinet) => (
              <MenuItem
                key={cabinet.type}
                value={cabinet}
                disabled={cabinet.interiorPanels < (panelType?.panelSize || 1)}
              >
                {cabinet.type}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
    </FormControl>
  )
}

export default Dropdown
