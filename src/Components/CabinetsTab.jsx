import { useState, useEffect } from 'react'
import { Box, FormControl, TextField, Divider, Button } from '@mui/material'
import Dropdown from './Dropdown'
import PanelDropdown from './PanelDropdown'
import PositionsDropdown from './PositionsDropdown'
import SizeDropdown from './SizeDropdown'

const CabinetsTab = ({ data, build, setBuild, addToShipment }) => {
  const { panelType, panels, size, config, mount, qty } = build

  const [maxPanels, setMaxPanels] = useState(
    size.interiorPanels + size.doorPanels
  )

  useEffect(() => {
    let panelCount = size.interiorPanels

    panelCount += panelType?.interiorOnly
      ? null
      : size.doorPanels + config.extraPanels

    panelCount = Math.floor(panelCount / (panelType?.panelSize || 1))

    setMaxPanels(panelCount)
  }, [panelType, size, config])

  useEffect(() => {
    if (panels > maxPanels) setBuild({ ...build, panels: maxPanels })
  }, [maxPanels, panels, build, setBuild])

  return (
    <Box>
      <FormControl size='sm' sx={{ m: 1 }}>
        <PanelDropdown
          label={'Panel'}
          items={data.panels}
          onChange={(value) => setBuild({ ...build, panelType: value })}
          value={panelType}
          maxPanels={size.interiorPanels}
        />
      </FormControl>
      <FormControl size='sm' sx={{ m: 1 }}>
        <PositionsDropdown
          label={'Positions'}
          maxPanels={maxPanels}
          value={panels}
          onChange={(value) => setBuild({ ...build, panels: value })}
          panelPositions={panelType.positions}
        />
      </FormControl>
      <FormControl size='sm' sx={{ m: 1 }}>
        <SizeDropdown
          label={'Size'}
          items={data.size}
          onChange={(value) => setBuild({ ...build, size: value })}
          value={size}
          panelSize={panelType?.panelSize || 1}
        />
      </FormControl>
      <FormControl size='sm' sx={{ m: 1 }}>
        <Dropdown
          label={'Config'}
          items={data.config}
          onChange={(value) => setBuild({ ...build, config: value })}
          value={config}
        />
      </FormControl>
      <FormControl size='sm' sx={{ m: 1 }}>
        <Dropdown
          label={'Mount'}
          items={data.mount}
          onChange={(value) => setBuild({ ...build, mount: value })}
          value={mount}
        />
      </FormControl>
      <FormControl>
        <TextField
          id='qty'
          label='Qty'
          type='number'
          InputProps={{ inputProps: { min: 1 } }}
          defaultValue={qty}
          onChange={(e) =>
            setBuild({ ...build, qty: parseInt(e.target.value) })
          }
          sx={{ width: '5em', m: 1 }}
          size={'small'}
        />
      </FormControl>
      <Divider sx={{ m: 3 }} />
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Button variant='contained' onClick={addToShipment}>
          Add
        </Button>
      </Box>
    </Box>
  )
}

export default CabinetsTab
