import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { BuildContext } from '../context/BuildContext'
import ShipmentProvider from '../context/ShipmentContext'
import DEFAULT_STATE from '../context/defaultState'

import AddCabinet from '../Components/AddCabinet'
import Shipment from '../Components/Shipment/Shipment'

import data from '../data.json'
import { Panel, Cabinet, Config } from '../enums'

// TODO =====================
// TODO add tests for: Hybrids, DP, Mini, Accessories

interface Scenario {
  build: string
  panelType: Panel
  panelCount: number
  size: Cabinet
  config: Config
  isAddon: boolean
}

const calcWeight = ({ panelType, panelCount, size, config }: Scenario) => {
  const maxPanels =
    config === Config.Addon
      ? data.cabinets[size].maxPanels + 1
      : data.cabinets[size].maxPanels

  const box = data.cabinets[size].box

  const weight =
    data.panels[panelType].weight * panelCount +
    data.cabinets[size].weight +
    data.config[config].weight +
    (maxPanels - panelCount) * data.blank.weight +
    box.weight

  return weight.toFixed(1).toString()
}

const scenarios = data.cabinets.flatMap((cab, cabIdx) =>
  data.panels.flatMap((panel, pnlIdx) =>
    data.config.flatMap((cfg, cfgIdx) => {
      const maxPanels = cfg.type === 'Addon' ? cab.maxPanels + 1 : cab.maxPanels
      const arr = Array.from({ length: maxPanels }, (_, i) => i + 1)

      return arr.map((pnlCount) => ({
        build: `MKE${panel.positions * pnlCount}${panel.suffix}${cfg.suffix} ${
          cab.size
        }`,
        panelType: pnlIdx,
        panelCount: pnlCount,
        size: cabIdx,
        config: cfgIdx,
        isAddon: cfgIdx === Config.Addon,
      }))
    })
  )
)

describe('Cabinet Weights', () => {
  const user = userEvent.setup()

  scenarios.forEach((scenario) => {
    const { build, panelType, panelCount, size, config, isAddon } = scenario

    const weight = calcWeight(scenario)

    it(`${build}: ${weight} lbs`, async () => {
      render(
        <BuildContext.Provider
          value={{
            state: {
              ...DEFAULT_STATE,
              panelType: data.panels[panelType],
              panelCount,
              cabinet: data.cabinets[size],
              config: data.config[config],
              isAddon,
            },
            dispatch: () => {},
          }}
        >
          <ShipmentProvider>
            <AddCabinet />
            <Shipment setTab={() => {}} />
          </ShipmentProvider>
        </BuildContext.Provider>
      )

      await user.click(screen.getByRole('button', { name: 'Add' }))

      expect(screen.getByText(weight)).toBeInTheDocument()
    })
  })
})
