import React from 'react'
import { Select } from 'semantic-ui-react'

const countryOptions = [
  { key: 'DEf', value: '-1', text: 'Selecione' },
  { key: 'Bd', value: 'Bd', text: 'Baden' },
  { key: 'Cl', value: '13', text: 'Colorado' },
  { key: 'al', value: 'al', text: 'Fritz' },
  { key: 'dz', value: 'dz', text: 'Hoegaarden' },
  { key: 'as', value: 'as', text: 'Patagonia' },
  { key: 'ad', value: 'ad', text: 'Andorra' },
  { key: 'ao', value: 'ao', text: 'Madalena' },
  { key: 'ai', value: 'ai', text: 'Mantibier' },
  { key: 'ag', value: 'ag', text: 'Weltenburger' },
 
]

const SelectExample = () => (
  <Select className="selectBusca" placeholder='Selecione' options={countryOptions} />
)

export default SelectExample