import { render, screen } from '@testing-library/react'

import DEFAULT_STATE from '../context/defaultState'
import { BuildContext } from '../context/BuildContext'
import CabinetsTab from '../Components/CabinetsTab/CabinetsTab'
import { Panel } from '../enums'
import data from '../data.json'

describe('Panel Dropdown', () => {
  const scenarios = data.panels.map((panel) => ({
    scenario: `${panel.type} Panel`,
    stateChanges: { panelType: panel },
    expectedValue: `${panel.type}`,
  }))

  scenarios.forEach(({ scenario, stateChanges, expectedValue }) => {
    it(`${scenario}`, () => {
      render(
        <BuildContext.Provider
          value={{
            state: { ...DEFAULT_STATE, ...stateChanges },
            dispatch: () => {},
          }}
        >
          <CabinetsTab data={data} />
        </BuildContext.Provider>
      )

      expect(screen.getByLabelText('Panel')).toHaveTextContent(expectedValue)
    })
  })
})

describe('Positions Dropdown', () => {
  const scenarios = []

  scenarios.push({
    scenario: 'MX 320 Addon',
    stateChanges: { panelCount: 10, isAddon: true },
    expectedValue: '320',
  })

  for (let i = 9; i > 0; i--) {
    scenarios.push({
      scenario: `MX ${i * data.panels[Panel.MX].positions}`,
      stateChanges: { panelCount: i },
      expectedValue: `${i * data.panels[Panel.MX].positions}`,
    })
  }

  scenarios.push({
    scenario: 'HC 560 Addon',
    stateChanges: {
      panelType: data.panels[Panel.HC],
      panelCount: 10,
      isAddon: true,
    },
    expectedValue: '560',
  })

  for (let i = 9; i > 0; i--) {
    scenarios.push({
      scenario: `HC ${i * data.panels[Panel.HC].positions}`,
      stateChanges: { panelType: data.panels[Panel.HC], panelCount: i },
      expectedValue: `${i * data.panels[Panel.HC].positions}`,
    })
  }

  scenarios.forEach(({ scenario, stateChanges, expectedValue }) => {
    it(`${scenario}`, () => {
      render(
        <BuildContext.Provider
          value={{
            state: { ...DEFAULT_STATE, ...stateChanges },
            dispatch: () => {},
          }}
        >
          <CabinetsTab data={data} />
        </BuildContext.Provider>
      )

      expect(screen.getByLabelText('Positions')).toHaveTextContent(
        expectedValue
      )
    })
  })
})

describe('Mount Dropdown', () => {
  const scenarios = data.mount.map((type) => ({
    scenario: `${type}`,
    stateChanges: { mount: type },
    expectedValue: `${type}`,
  }))

  scenarios.forEach(({ scenario, stateChanges, expectedValue }) => {
    it(`${scenario}`, () => {
      render(
        <BuildContext.Provider
          value={{
            state: { ...DEFAULT_STATE, ...stateChanges },
            dispatch: () => {},
          }}
        >
          <CabinetsTab data={data} />
        </BuildContext.Provider>
      )

      expect(screen.getByLabelText('Mount')).toHaveTextContent(expectedValue)
    })
  })
})
