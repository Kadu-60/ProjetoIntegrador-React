import React from 'react'
import { Select } from 'semantic-ui-react'

const countryOptions = [
  { key: 'af', value: 'af', text: 'Frangos' },
  { key: 'ax', value: 'ax', text: 'Culinária Japonesa' },
  { key: 'al', value: 'al', text: 'Peixes' },
  { key: 'dz', value: 'dz', text: 'Queijos' },
  { key: 'as', value: 'as', text: 'Frutos do Mar' },
  { key: 'ad', value: 'ad', text: 'Embutidos' },
  { key: 'ao', value: 'ao', text: 'Saladas' },
  { key: 'ai', value: 'ai', text: 'Carnes' },
  { key: 'ag', value: 'ag', text: 'Hamburguer' },
  { key: 'ao', value: 'ao', text: 'Comidas Apimentadas' },
  { key: 'ai', value: 'ai', text: 'Aves' },
  { key: 'ag', value: 'ag', text: 'Carne Assada' },
  { key: 'ag', value: 'ag', text: 'Chocolate' },
 
]

const SelectExample = () => (
  <Select className="selectBusca" placeholder='Selecione' options={countryOptions} />
)

export default SelectExample