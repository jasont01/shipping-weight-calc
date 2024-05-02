import { Box, InputLabel, MenuItem, FormControl, Select } from '@mui/material'

import { useBuildContext } from '../../hooks/useBuildContext'

interface Props {
  options: string[]
}

const MountDropdown = ({ options }: Props) => {
  const { state, dispatch } = useBuildContext()

  return (
    <FormControl size='small' sx={{ m: 1 }}>
      <Box sx={{ minWidth: 100 }}>
        <FormControl fullWidth>
          <InputLabel id='mount-select-label'>Mount</InputLabel>
          <Select
            labelId='mount-select-label'
            value={state.mount}
            label='Mount'
            size={'small'}
            onChange={(e) =>
              dispatch({
                type: 'SET_MOUNT',
                payload: e.target.value,
              })
            }
            sx={{ textTransform: 'capitalize' }}
          >
            {options.map((option) => (
              <MenuItem
                key={option}
                value={option}
                sx={{ textTransform: 'capitalize' }}
              >
                {option}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
    </FormControl>
  )
}

export default MountDropdown
