import { useState, useEffect } from 'react'

import { Box, InputLabel, MenuItem, FormControl, Select } from '@mui/material'

import { useBuildContext } from '../../hooks/useBuildContext'
import { PanelType } from '../../types/types'

interface Props {
  maxPanels: number
  mxPanel: PanelType
  label?: string
  disabled?: boolean
}

const Dropdown = ({
  maxPanels,
  mxPanel,
  label = 'Positions',
  disabled = false,
}: Props) => {
  const { state, dispatch } = useBuildContext()

  const [options, setOptions] = useState([
    {
      panels: state.panelCount,
      positions:
        state.panelType.positions * (state.panelCount - state.hybridPanels) +
        state.hybridType.positions,
    },
  ])

  useEffect(() => {
    let maxMXPanels =
      maxPanels - (state.hybridType.panelSize || 1) * state.hybridPanels
    const minMXPanels = state.hybridType.type === 'DP' ? 2 : 1

    if (state.isAddon) maxMXPanels += 1

    if (state.panelCount > maxMXPanels || state.panelCount < minMXPanels) {
      dispatch({ type: 'SET_PANEL_COUNT', payload: maxMXPanels })
    }
  }, [state, mxPanel, maxPanels, dispatch])

  useEffect(() => {
    const opts = []
    if (state.hybridType.panelSize) {
      let i = state.isAddon ? maxPanels + 1 : maxPanels
      i = i - state.hybridType.panelSize * state.hybridPanels

      const j = state.hybridType.type === 'DP' ? 1 : 0

      for (i; i > j; i--) {
        opts.push({
          panels: i,
          positions:
            state.panelType.positions * i +
            state.hybridType.positions * state.hybridPanels,
        })
      }
    }

    setOptions(opts)
  }, [state, maxPanels])

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
