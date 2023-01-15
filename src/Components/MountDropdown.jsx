import { Box, InputLabel, MenuItem, FormControl, Select } from '@mui/material'
import { useBuildContext } from '../hooks/useBuildContext'

const MountDropdown = ({ options }) => {
  const { mount, dispatch } = useBuildContext()

  return (
    <FormControl size='sm' sx={{ m: 1 }}>
      <Box sx={{ minWidth: 100 }}>
        <FormControl fullWidth>
          <InputLabel id='mount-select-label'>Mount</InputLabel>
          <Select
            labelId='mount-select-label'
            value={mount}
            label='Mount'
            size={'small'}
            onChange={(e) =>
              dispatch({ type: 'SET_MOUNT', payload: e.target.value })
            }
            sx={{ textTransform: 'capitalize' }}
          >
            {options.map((option) => (
              <MenuItem
                key={option.type}
                value={option}
                sx={{ textTransform: 'capitalize' }}
              >
                {option.type}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
    </FormControl>
  )
}

export default MountDropdown
