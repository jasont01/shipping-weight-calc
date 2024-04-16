import { createContext } from 'react'
import { render, screen } from '@testing-library/react'

import AddCabinet from '../Components/AddCabinet'

import data from '../data.json'
import { Panel, Cabinet, Config } from '../enums'

import DEFAULT_STATE from '../context/defaultState'

const panelCount = 9

const maxPanels = data.cabinets[Cabinet.Large].maxPanels

const box = data.cabinets[Cabinet.Large].box

const result =
  data.panels[Panel.MX].weight * panelCount +
  data.cabinets[Cabinet.Large].weight +
  data.config[Config.Kiosk].weight +
  (maxPanels - panelCount) * data.blank.weight +
  box.weight

describe('MKE288XC', () => {
  const TestContext = createContext({
    state: DEFAULT_STATE,
  })

  it('should weigh 165lbs', () => {
    render(
      <TestContext.Provider value={{ state: DEFAULT_STATE }}>
        <AddCabinet />
      </TestContext.Provider>
    )

    const weight = screen.debug()
    expect(weight).toBe(result)
  })
})
