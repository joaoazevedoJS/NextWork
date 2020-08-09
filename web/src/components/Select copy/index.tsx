import React, { FC, ChangeEvent, SelectHTMLAttributes } from 'react'

import './styles.css'

interface Props extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string
  name: string
  changeState?: React.Dispatch<React.SetStateAction<any>>
  options: Array<{ value: string, label: string }>
}

const Select: FC<Props> = ({ label, name, options, changeState, ...rest }) => {
  function OnChangeEvent(event: ChangeEvent<HTMLSelectElement>) {
    if (changeState)
      return changeState(event.target.value)
  }

  return (
    <div className="select-block">
      <label htmlFor={name}> {label} </label>
      <select value="" id={name} {...rest} {...changeState ? rest.onChange = OnChangeEvent : ''}>
        <option value="" disabled hidden>Selecione uma opção</option>

        {
          options.map(option => {
            return <option key={option.value} value={option.value}>{option.label}</option>
          })
        }
      </select>
    </div>
  )
}

export default Select