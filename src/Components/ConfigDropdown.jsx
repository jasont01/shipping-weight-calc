import { Box, InputLabel, MenuItem, FormControl, Select } from '@mui/material'

import { useBuildContext } from '../hooks/useBuildContext'

const ConfigDropdown = ({ options }) => {
  const { config, cabinet, dispatch } = useBuildContext()

  return (
    <FormControl size='sm' sx={{ m: 1 }}>
      <Box sx={{ minWidth: 100 }}>
        <FormControl fullWidth>
          <InputLabel id='config-select-label'>Config</InputLabel>
          <Select
            labelId='config-select-label'
            value={config}
            label='Config'
            size={'small'}
            onChange={(e) =>
              dispatch({ type: 'SET_CONFIG', payload: e.target.value })
            }
            sx={{ textTransform: 'capitalize' }}
          >
            {options.map((option) => (
              <MenuItem
                key={option.type}
                value={option}
                sx={{ textTransform: 'capitalize' }}
                disabled={cabinet.type === 'Mini' && option.type === 'Addon'}
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

export default ConfigDropdown
