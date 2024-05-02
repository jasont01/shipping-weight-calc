import {
  Box,
  Tab as MuiTab,
  Tabs as MuiTabs,
  Paper,
  useMediaQuery,
} from '@mui/material'

import CabinetsTab from './Cabinets'
import AccessoriesTab from './Accessories'
import HybridsTab from './Hybrids'
import DealerPlateTab from './DealerPlate'
import MiniTab from './Mini'
//import MechanicalTab from './Mechanical'

import { Tab } from '../../enums'
import data from '../../data.json'
import { useBuildContext } from '../../hooks/useBuildContext'

interface PanelProps {
  index: number
  children: React.ReactNode
}

const Panel = (props: PanelProps) => {
  const { index, children } = props

  const { state } = useBuildContext()

  return (
    <div
      role='tabpanel'
      hidden={state.currentTab !== index}
      id={`tabpanel-${index}`}
    >
      {state.currentTab === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  )
}

const Tabs = () => {
  const isMobile = useMediaQuery('(max-width: 600px)')
  const { state, dispatch } = useBuildContext()

  return (
    <Paper elevation={2} sx={{ p: 4, pt: 2 }}>
      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <MuiTabs
            variant='scrollable'
            scrollButtons='auto'
            value={state.currentTab}
            onChange={(_, newValue) =>
              dispatch({ type: 'SET_TAB', payload: newValue })
            }
          >
            <MuiTab label='Cabinets' />
            <MuiTab label='Hybrids' />
            <MuiTab label='DealerPlate' />
            <MuiTab label='Mini' />
            <MuiTab label='Accessories' />
            {/* <MuiTab label='Mechanical' disabled /> */}
          </MuiTabs>
        </Box>
        <Panel index={Tab.Cabinets}>
          <CabinetsTab data={data} isMobile={isMobile} />
        </Panel>
        <Panel index={Tab.Hybrids}>
          <HybridsTab data={data} isMobile={isMobile} />
        </Panel>
        <Panel index={Tab.DealerPlate}>
          <DealerPlateTab data={data} isMobile={isMobile} />
        </Panel>
        <Panel index={Tab.Mini}>
          <MiniTab data={data} isMobile={isMobile} />
        </Panel>
        <Panel index={Tab.Accessories}>
          <AccessoriesTab
            wallboards={data.cabinets.map((cab) => cab.wallboard)}
            stand={data.stand}
            accessories={data.accessories}
          />
        </Panel>
        {/* <Panel index={Tab.Mechanical}>
          <MechanicalTab items={data.mechanical} />
        </Panel> */}
      </Box>
    </Paper>
  )
}

export default Tabs
