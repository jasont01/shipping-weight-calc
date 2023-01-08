import { useState, useEffect } from 'react'
import { FormControl, TextField } from '@mui/material'
import Dropdown from './Dropdown'
import PositionsDropdown from './PositionsDropdown'
import data from '../data.json'

const CabinetsTab = () => {
  const [panelType, setPanelType] = useState(data.panels[0])
  const [panels, setPanels] = useState(9)
  const [size, setSize] = useState(data.cabinets[0])
  const [config, setConfig] = useState(data.config[0])
  const [mount, setMount] = useState(data.mount[0])
  const [qty, setQty] = useState(1)
  const [maxPanels, setMaxPanels] = useState(10)

  useEffect(() => {
    let panelCount = size.interiorPanels

    panelCount += panelType?.interiorOnly
      ? null
      : size.doorPanels + config.extraPanels

    panelCount = Math.floor(panelCount / (panelType?.panelSize || 1))

    setMaxPanels(panelCount)
  }, [panelType, size, config])

  useEffect(() => {
    if (panels > maxPanels) setPanels(maxPanels)
  }, [maxPanels, panels])

  return (
    <>
      <FormControl size='sm' sx={{ m: 1 }}>
        <Dropdown
          label={'Panel'}
          items={data.panels}
          onChange={setPanelType}
          value={panelType}
        />
      </FormControl>
      <FormControl size='sm' sx={{ m: 1 }}>
        <PositionsDropdown
          label={'Positions'}
          maxPanels={maxPanels}
          value={panels}
          onChange={setPanels}
          panelPositions={panelType.positions}
        />
      </FormControl>
      <FormControl size='sm' sx={{ m: 1 }}>
        <Dropdown
          label={'Size'}
          items={data.cabinets}
          onChange={setSize}
          value={size}
        />
      </FormControl>
      <FormControl size='sm' sx={{ m: 1 }}>
        <Dropdown
          label={'Config'}
          items={data.config}
          onChange={setConfig}
          value={config}
        />
      </FormControl>
      <FormControl size='sm' sx={{ m: 1 }}>
        <Dropdown
          label={'Mount'}
          items={data.mount}
          onChange={setMount}
          value={mount}
        />
      </FormControl>
      <FormControl>
        <TextField
          id='qty'
          label='Qty'
          type='number'
          InputProps={{ inputProps: { min: 0 } }}
          defaultValue={qty}
          onChange={(e) => setQty(e.target.value)}
          sx={{ width: '5em', m: 1 }}
          size={'small'}
        />
      </FormControl>
    </>
  )
}

export default CabinetsTab
