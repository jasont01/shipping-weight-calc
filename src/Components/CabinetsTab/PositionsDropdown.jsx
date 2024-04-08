import { Box, InputLabel, MenuItem, FormControl, Select } from '@mui/material'

import { useBuildContext } from '../../hooks/useBuildContext'

const Dropdown = ({ options, disabled = false }) => {
  const { panelCount, dispatch } = useBuildContext()

  // const { panelCount, panelType, cabinet, dispatch, isAddon } =
  //   useBuildContext()

  // const [options, setOptions] = useState([
  //   { panels: panelCount, positions: panelType.positions * panelCount },
  // ])

  // useEffect(() => {
  //   let opts = []

  //   let i = isAddon ? cabinet.maxPanels + 1 : cabinet.maxPanels
  //   for (i; i > 0; i--) {
  //     opts.push({
  //       panels: i,
  //       positions: panelType.positions * i,
  //     })
  //   }

  //   setOptions(opts)
  // }, [panelType, isAddon])

  return (
    <FormControl size='sm' sx={{ m: 1 }}>
      <Box sx={{ minWidth: 80 }}>
        <FormControl fullWidth disabled={disabled}>
          <InputLabel id='panels-select-label'>Positions</InputLabel>
          <Select
            labelId='panels-select-label'
            value={panelCount}
            label='Positions'
            size={'small'}
            onChange={(e) =>
              dispatch({ type: 'SET_PANELS', payload: e.target.value })
            }
          >
            {options.map((option) => (
              <MenuItem key={option.positions} value={option.panels}>
                {option.positions}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
    </FormControl>
  )
}

export default Dropdown
