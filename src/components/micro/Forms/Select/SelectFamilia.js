import React from 'react'
import { Select } from 'semantic-ui-react'

const countryOptions = [
  { key: 'af', value: 'af', text: 'Lager' },
  { key: 'ax', value: 'ax', text: 'Trigo' },
  { key: 'al', value: 'al', text: 'Weiss' },
  { key: 'dz', value: 'dz', text: 'Ipa' },
  { key: 'as', value: 'as', text: 'Pale Ale' },
  { key: 'ad', value: 'ad', text: 'Stout' },
  { key: 'ao', value: 'ao', text: 'India Pale Ale' },

 
]

const SelectExample = () => (
  <Select className="selectBusca" placeholder='Selecione' options={countryOptions} />
)

export default SelectExample