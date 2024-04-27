import { useState, useEffect } from 'react'

import { Box, InputLabel, MenuItem, FormControl, Select } from '@mui/material'

import { useBuildContext } from '../../hooks/useBuildContext'

interface Props {
  maxPanels: number
  label?: string
  disabled?: boolean
}

const Dropdown = ({
  maxPanels,
  label = 'Positions',
  disabled = false,
}: Props) => {
  const { state, dispatch } = useBuildContext()

  const [options, setOptions] = useState([
    {
      panels: state.panelCount,
      positions: state.panelType.positions * state.panelCount,
    },
  ])

  useEffect(() => {
    const opts = []

    let i = state.isAddon ? maxPanels + 1 : maxPanels

    for (i; i > 0; i--) {
      opts.push({
        panels: i,
        positions: state.panelType.positions * i,
      })
    }

    setOptions(opts)
  }, [state.panelType, state.isAddon, maxPanels])

  return (
    <FormControl size='small' sx={{ m: 1 }}>
      <Box sx={{ minWidth: 80 }}>
        <FormControl fullWidth disabled={disabled}>
          <InputLabel id='panels-select-label'>{label}</InputLabel>
          <Select
            labelId='panels-select-label'
            value={state.panelCount}
            label='Positions'
            size={'small'}
            onChange={(e) =>
              dispatch({
                type: 'SET_PANEL_COUNT',
                payload: Number(e.target.value),
              })
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
