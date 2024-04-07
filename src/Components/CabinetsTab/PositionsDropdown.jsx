import { useState, useEffect } from 'react'
import {
  Box,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  ListSubheader,
} from '@mui/material'

import { useBuildContext } from '../../hooks/useBuildContext'

const Dropdown = () => {
  const { panels, panelType, cabinet, dispatch, isHybrid, isAddon } =
    useBuildContext()

  const [options, setOptions] = useState([
    { panels: panels, positions: panelType.positions * panels },
  ])

  useEffect(() => {
    let opts = []

    let i = isAddon ? cabinet.maxPanels + 1 : cabinet.maxPanels
    for (i; i > 0; i--) {
      opts.push({
        panels: i,
        positions: panelType.positions * i,
      })
    }

    setOptions(opts)
  }, [panelType, isHybrid, isAddon])

  // const renderSelectGroup = (size) => {
  //   const options = size.options.map((opt) => {
  //     return <MenuItem value={opt}>{opt}</MenuItem>
  //   })
  //   return [<ListSubheader>{size.size}</ListSubheader>, options]
  // }

  return (
    <FormControl size='sm' sx={{ m: 1 }}>
      <Box sx={{ minWidth: 80 }}>
        <FormControl fullWidth>
          <InputLabel id='panels-select-label'>Positions</InputLabel>
          <Select
            labelId='panels-select-label'
            value={panels}
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
