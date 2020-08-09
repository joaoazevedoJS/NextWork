import React, { FC, ChangeEvent, TextareaHTMLAttributes } from 'react'

import './styles.css'

interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string
  name: string
  changeState?: React.Dispatch<React.SetStateAction<any>>
}

const Textarea: FC<Props> = ({ label, name, changeState, ...rest }) => {
  function OnChangeEvent(event: ChangeEvent<HTMLTextAreaElement>) {
    if (changeState)
      return changeState(event.target.value)
  }

  return (
    <div className="textarea-block">
      <label htmlFor={name}> {label} </label>
      <textarea id={name} {...rest} { ...changeState ? rest.onChange=OnChangeEvent : '' } />
    </div>
  )
}

export default Textarea