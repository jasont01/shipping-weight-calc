import { render, screen } from '@testing-library/react'

import DEFAULT_STATE from '../context/defaultState'
import { BuildContext } from '../context/BuildContext'
import CabinetsTab from '../Components/CabinetsTab/CabinetsTab'

import data from '../data.json'

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
