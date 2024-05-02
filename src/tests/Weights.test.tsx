// import { render, screen } from '@testing-library/react'
// import userEvent from '@testing-library/user-event'

// import { BuildContext } from '../context/BuildContext'
// import ShipmentProvider from '../context/ShipmentContext'
// import DEFAULT_STATE from '../context/defaultState'

// import AddCabinet from '../Components/AddCabinet'
// import Shipment from '../Components/Shipment/Shipment'

// import data from '../data.json'
// import { Panel, Mount, Config, Hybrid, Tab } from '../enums'
// import validateState from '../context/buildReducer'

// //TODO accessories

// // {
// //   build: 'MKE320XA',
// //   panelType: data.panels[Panel.MX],
// //   panelCount: 10,
// //   mount: 'none',
// //   isAddon: true,
// //   isUpgrade: false,
// // },

// const cabinets = [
//   {
//     build: 'MKE160XC / Stand',
//     panelCount: 5,
//     mount: data.mount[Mount.Stand],
//     weight: 227.2,
//   },
//   {
//     build: 'MKE128XC / Wall',
//     panelCount: 4,
//     weight: 108.2,
//   },
//   {
//     build: 'MKE320XA',
//     panelCount: 10,
//     mount: 'None',
//     config: data.config[Config.Addon],
//     isAddon: true,
//     weight: 160.7,
//   },
//   {
//     build: 'MKE96IC (LG) / Wall',
//     panelType: data.panels[Panel.MXi],
//     panelCount: 3,
//     isUpgrade: true,
//     weight: 198.0,
//   },
//   {
//     build: 'MKE112HC / Wall',
//     panelType: data.panels[Panel.HC],
//     panelCount: 2,
//     weight: 101.4,
//   },
// ]

// describe('Cabinets', () => {
//   const user = userEvent.setup()

//   cabinets.forEach((cabinet) => {
//     const {
//       build,
//       panelType = data.panels[Panel.MX],
//       panelCount,
//       mount = 'Wall',
//       config = data.config[Config.Kiosk],
//       isAddon = false,
//       isUpgrade = false,
//       weight,
//     } = cabinet

//     const state = validateState(
//       {
//         ...DEFAULT_STATE,
//         panelType,
//         panelCount,
//         mount,
//         config,
//         isAddon,
//         isUpgrade,
//       },
//       {}
//     )

//     it(`${build}: ${weight} lbs`, async () => {
//       render(
//         <BuildContext.Provider
//           value={{
//             state,
//             dispatch: () => {},
//           }}
//         >
//           <ShipmentProvider>
//             <AddCabinet />
//             <Shipment />
//           </ShipmentProvider>
//         </BuildContext.Provider>
//       )
//       await user.click(screen.getByRole('button', { name: 'Add' }))
//       expect(screen.getByText(weight.toFixed(1))).toBeInTheDocument()
//     })
//   })
// })

// const hybrids = [
//   {
//     build: 'MKE1121MDC',
//     panelCount: 3,
//     hybridPanels: 1,
//     mount: 'None',
//     weight: 158.3,
//   },
//   {
//     build: 'MKE1281MIC',
//     panelCount: 3,
//     hybridType: data.hybrids[Hybrid.Xi],
//     hybridPanels: 1,
//     mount: 'Stand',
//     isUpgrade: true,
//     weight: 229.9,
//   },
//   {
//     build: 'MKE3201MIA',
//     hybridType: data.hybrids[Hybrid.Xi],
//     panelCount: 9,
//     hybridPanels: 1,
//     mount: 'Wall',
//     config: data.config[Config.Addon],
//     isAddon: true,
//     weight: 194.3,
//   },
// ]

// describe('Hybrids', () => {
//   const user = userEvent.setup()

//   hybrids.forEach((hybrid) => {
//     const {
//       build,
//       panelCount,
//       hybridType = data.hybrids[Hybrid.DP],
//       hybridPanels = 0,
//       mount = 'Wall',
//       config = data.config[Config.Kiosk],
//       isAddon = false,
//       isUpgrade = false,
//       weight,
//     } = hybrid

//     const state = validateState(
//       {
//         ...DEFAULT_STATE,
//         currentTab: Tab.Hybrids,
//         panelCount,
//         hybridType,
//         hybridPanels,
//         mount,
//         config,
//         isAddon,
//         isUpgrade,
//       },
//       {}
//     )

//     it(`${build}: ${weight} lbs`, async () => {
//       render(
//         <BuildContext.Provider
//           value={{
//             state,
//             dispatch: () => {},
//           }}
//         >
//           <ShipmentProvider>
//             <AddCabinet />
//             <Shipment />
//           </ShipmentProvider>
//         </BuildContext.Provider>
//       )
//       await user.click(screen.getByRole('button', { name: 'Add' }))
//       expect(screen.getByText(weight.toFixed(1))).toBeInTheDocument()
//     })
//   })
// })

// const dealerPlates = [
//   {
//     build: 'MKE16DPC / Wall',
//     panelType: data.panels[Panel.DP],
//     panelCount: 1,
//     isUpgrade: true,
//     weight: 183.2,
//   },
//   {
//     build: 'MKE32DPC / Stand',
//     panelType: data.panels[Panel.DP],
//     panelCount: 2,
//     mount: 'Stand',
//     weight: 224.3,
//   },
//   {
//     build: 'MKE16DPA (LG)',
//     panelType: data.panels[Panel.DP],
//     panelCount: 1,
//     config: data.config[Config.Addon],
//     isAddon: true,
//     weight: 148,
//   },
// ]

// describe('DealerPlates', () => {
//   const user = userEvent.setup()

//   dealerPlates.forEach((dp) => {
//     const {
//       build,
//       panelCount,
//       mount = 'Wall',
//       config = data.config[Config.Kiosk],
//       isAddon = false,
//       isUpgrade = false,
//       weight,
//     } = dp

//     const state = validateState(
//       {
//         ...DEFAULT_STATE,
//         currentTab: Tab.DealerPlate,
//         panelCount,
//         mount,
//         config,
//         isAddon,
//         isUpgrade,
//       },
//       {}
//     )

//     it(`${build}: ${weight} lbs`, async () => {
//       render(
//         <BuildContext.Provider
//           value={{
//             state,
//             dispatch: () => {},
//           }}
//         >
//           <ShipmentProvider>
//             <AddCabinet />
//             <Shipment />
//           </ShipmentProvider>
//         </BuildContext.Provider>
//       )
//       await user.click(screen.getByRole('button', { name: 'Add' }))
//       expect(screen.getByText(weight.toFixed(1))).toBeInTheDocument()
//     })
//   })
// })

// const minis = [
//   { build: 'MKE3256MX', panelCount: 1, mount: 'Wall', weight: 77.6 },
//   {
//     build: 'MKE3256HC',
//     panelType: data.panels[Panel.HC],
//     panelCount: 1,
//     mount: 'None',
//     weight: 63.1,
//   },
//   {
//     build: 'MKE3256IC',
//     panelType: data.panels[Panel.MXi],
//     panelCount: 1,
//     mount: 'Stand',
//     weight: 143.1,
//   },
// ]

// describe('Minis', () => {
//   const user = userEvent.setup()

//   minis.forEach((mini) => {
//     const {
//       build,
//       panelType = data.panels[Panel.MX],
//       panelCount,
//       mount = 'Wall',
//       weight,
//     } = mini

//     const state = validateState(
//       { ...DEFAULT_STATE, currentTab: Tab.Mini, panelType, panelCount, mount },
//       {}
//     )

//     it(`${build}: ${weight} lbs`, async () => {
//       render(
//         <BuildContext.Provider
//           value={{
//             state,
//             dispatch: () => {},
//           }}
//         >
//           <ShipmentProvider>
//             <AddCabinet />
//             <Shipment />
//           </ShipmentProvider>
//         </BuildContext.Provider>
//       )
//       await user.click(screen.getByRole('button', { name: 'Add' }))
//       expect(screen.getByText(weight.toFixed(1))).toBeInTheDocument()
//     })
//   })
// })
