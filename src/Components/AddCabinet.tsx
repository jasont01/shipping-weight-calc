import { Button } from '@mui/material'

import { useBuildContext } from '../hooks/useBuildContext'
import { useShipmentContext } from '../hooks/useShipmentContext'

import data from '../data.json'
import { Mount, Tab } from '../enums'

const AddCabinet = () => {
  const { state } = useBuildContext()
  const { dispatch } = useShipmentContext()

  const buildDesc = () => {
    switch (state.currentTab) {
      case Tab.Hybrids:
        return `Hybrid ${state.panelCount * state.panelType.positions}${
          state.panelType.type
        } / ${state.hybridPanels * state.hybridType.positions}${
          state.hybridType.type
        } ${state.isAddon ? 'Addon' : 'Complete'}`

      default:
        return `${state.panelType.type}${
          state.panelCount * state.panelType.positions
        } ${state.isAddon ? 'Addon' : 'Complete'}`
    }
  }

  const buildPart = () => {
    switch (state.currentTab) {
      case Tab.Hybrids: {
        const positions = String(
          state.panelCount * state.panelType.positions +
            state.hybridType.positions * state.hybridPanels
        )
        return `MKE${positions}${state.hybridPanels}${state.hybridType.suffix}${state.config.suffix}`
      }

      case Tab.Mini:
        return `MKE3256${state.panelType.type}`

      default: {
        const positions = String(state.panelCount * state.panelType.positions)
        return `MKE${positions}${state.panelType.suffix}${state.config.suffix}`
      }
    }
  }

  const getMountData = () => {
    switch (state.mount) {
      case data.mount[Mount.Wall]:
        return state.cabinet.wallboard
      case data.mount[Mount.Stand]:
        return data.stand
      default:
        return { desc: 'n/a', part: '', weight: 0 }
    }
  }

  const addToShipment = () => {
    const maxPanels = state.isAddon
      ? state.cabinet.maxPanels + 1
      : state.cabinet.maxPanels

    const panelBlanks = maxPanels - (state.panelCount + state.hybridPanels)

    const panelWeight = state.panelType.weight * state.panelCount

    const hybridPanelWeight = state.hybridType.weight * state.hybridPanels

    const box =
      state.mount === data.mount[Mount.Stand]
        ? data.stand.box
        : state.cabinet.box

    const mount = getMountData()

    const buildWeight =
      panelWeight +
      hybridPanelWeight +
      state.cabinet.weight +
      state.config.weight +
      panelBlanks * data.blank.weight +
      box.weight +
      mount.weight

    dispatch({
      type: 'ADD_ITEM',
      payload: {
        desc: buildDesc(),
        size: state.cabinet.size,
        mount: state.mount,
        part: `${buildPart()}|${state.cabinet.size}${state.mount}`,
        qty: state.qty,
        weight: buildWeight,
        details: [
          {
            desc: `${state.panelType.type} Panels`,
            weight: state.panelType.weight,
            qty: state.panelCount,
            totalWeight: Number(panelWeight.toFixed(1)),
            isVisible: true,
          },
          {
            desc: `${state.hybridType.type} Panels`,
            weight: state.hybridType.weight,
            qty: state.hybridPanels,
            totalWeight: Number(hybridPanelWeight.toFixed(1)),
            isVisible: state.currentTab === Tab.Hybrids,
          },
          {
            desc: 'Panel Blanks',
            weight: data.blank.weight,
            qty: panelBlanks,
            totalWeight: data.blank.weight * panelBlanks,
            isVisible: panelBlanks > 0,
          },
          {
            desc: `${state.cabinet.size} Cabinet`,
            totalWeight: state.cabinet.weight,
            isVisible: true,
          },
          {
            desc: state.config.type,
            totalWeight: state.config.weight,
            isVisible: true,
          },
          {
            desc: box.desc,
            totalWeight: box.weight,
            isVisible: true,
          },
          {
            desc: mount.desc,
            totalWeight: mount.weight,
            isVisible: mount.weight > 0,
          },
        ],
      },
    })
  }

  return (
    <Button variant='contained' onClick={addToShipment}>
      Add
    </Button>
  )
}
export default AddCabinet
