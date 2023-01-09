import { useState } from 'react'
import { Box, Tab, Tabs, Paper } from '@mui/material'
import CabinetsTab from './Components/CabinetsTab'
import AccessoriesTab from './Components/AccessoriesTab'
import ShippingTab from './Components/ShippingTab'
import { useShipmentContext } from './hooks/useShipmentContext'

import data from './data.json'

const TabPanel = (props) => {
  const { children, tab, index } = props

  return (
    <div role='tabpanel' hidden={tab !== index} id={`tabpanel-${index}`}>
      {tab === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  )
}

const Main = () => {
  const { dispatch } = useShipmentContext()

  const { cabinets } = data

  const [tab, setTab] = useState(0)

  const [build, setBuild] = useState({
    panelType: cabinets.panels[0],
    panels: cabinets.size[0].interiorPanels + cabinets.size[0].doorPanels,
    size: cabinets.size[0],
    config: cabinets.config[0],
    mount: cabinets.mount[0],
    qty: 1,
  })

  const [accessories, setAccessories] = useState(
    data.accessories
      .map((category) => category.items.map((item) => ({ ...item, qty: 0 })))
      .flat()
  )
  const [shipping, setShipping] = useState([
    { desc: '56x42', part: '', weight: 35, qty: 2 },
    { desc: '36x36', part: '', weight: 35, qty: 1 },
  ])

  const addToShipment = () => {
    //Cabinet
    const buildDesc = `${build.panelType.type}${
      build.panels * build.panelType.positions
    } ${build.size.type} ${build.config.type}`

    const buildPart = `MKE${String(
      build.panels * build.panelType.positions
    ).padStart(3, '0')}${build.panelType.suffix}${build.config.suffix}`

    const buildWeight =
      build.panelType.weight * build.panels +
      build.size.weight +
      build.config.weight

    dispatch({
      type: 'ADD_ITEM',
      payload: {
        desc: buildDesc,
        part: buildPart,
        qty: build.qty,
        weight: buildWeight,
      },
    })

    //Mount
    if (build.mount.type !== 'none') {
      const mountAccessories = data.accessories.find(
        (accessory) => accessory.type === build.mount.accessoryType
      )

      const mountItem = mountAccessories.items.find(
        (item) => item.part === build.size.mount[build.mount.type]
      )

      dispatch({ type: 'ADD_ITEM', payload: { ...mountItem, qty: build.qty } })
    }

    //TODO: Accessories & shipping
    //accessories.map((item) => dispatch({ type: 'ADD_ITEM', payload: item }))
    //shipping.map((item) => dispatch({ type: 'ADD_ITEM', payload: item }))
  }

  return (
    <Paper elevation={2} sx={{ p: 4, pt: 2 }}>
      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={tab} onChange={(e, newValue) => setTab(newValue)}>
            <Tab label='Cabinets' />
            <Tab label='Accessories' />
            <Tab label='Shipping Materials' />
          </Tabs>
        </Box>
        <TabPanel tab={tab} index={0}>
          <CabinetsTab
            data={cabinets}
            build={build}
            setBuild={setBuild}
            addToShipment={addToShipment}
          />
        </TabPanel>
        <TabPanel tab={tab} index={1}>
          <AccessoriesTab
            categories={data.accessories}
            accessories={accessories}
            setAccessories={setAccessories}
          />
        </TabPanel>
        <TabPanel tab={tab} index={2}>
          <ShippingTab
            data={data.shipping}
            selections={shipping}
            onChange={setShipping}
          />
        </TabPanel>
      </Box>
    </Paper>
  )
}

export default Main
