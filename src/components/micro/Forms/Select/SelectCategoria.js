import React from 'react'
import { Select } from 'semantic-ui-react'

const countryOptions = [
  { key: 'af', value: 'af', text: 'Amber Lager' },
  { key: 'ax', value: 'ax', text: 'Pilsen' },
  { key: 'al', value: 'al', text: 'Lager' },
  { key: 'dz', value: 'dz', text: 'Trigo' },
  { key: 'as', value: 'as', text: 'India Pale Ale (IPA)' },
  { key: 'ad', value: 'ad', text: 'Weiss' },
  { key: 'ao', value: 'ao', text: 'Ipa' },
  { key: 'ao', value: 'ao', text: 'Ale' },
  { key: 'ao', value: 'ao', text: 'Stout' },

 
]

const SelectExample = () => (
  <Select onBlur='teste' name='opcSel' className="selectBusca" placeholder='Selecione' options={countryOptions} />
)

export default SelectExample