import React, { FC, useState, ChangeEvent } from 'react'
import { BsFillEyeFill, BsFillEyeSlashFill } from 'react-icons/bs'

import './styles.css'

interface Props {
  label: string
  type?: string
  name: string
  isRequired?: {
    isLogin: boolean
  }

  placehold?: string
  changeState?: React.Dispatch<React.SetStateAction<any>>
  clickEvent?: () => {}
}

const Inputs: FC<Props> = (props) => {
  // const isPassword = props.type === 'password' ? true : false

  const [typePassword, setTypePassword] = useState<string>('password')
  const [isOccult, setIsOccult] = useState<boolean>(true)

  function OnChangeEvent(event: ChangeEvent<HTMLInputElement>) {
    if (props.changeState)
      return props.changeState(event.target.value)
  }

  function PasswordIsOccult() {
    isOccult ? setTypePassword('text') : setTypePassword('password')
    setIsOccult(!isOccult)
  }

  return (
    <div className="input-block">
      <label htmlFor={props.name}>
        {props.label}
        {props.isRequired?.isLogin ? '' : <span className="is-require">*</span> }
      </label>

      <div className={props.type === 'password' ? 'passwordCamp' : ''} >
        <input
          type={props.type === 'password' ? typePassword : props.type || 'text'}
          id={props.name}
          name={props.name}
          required={props.isRequired ? true : true}
          placeholder={props.placehold}
          onChange={OnChangeEvent}
        />

        {
          props.type === "password" ? isOccult ?
            <BsFillEyeSlashFill onClick={PasswordIsOccult} className="icon-password" /> :
            <BsFillEyeFill onClick={PasswordIsOccult} className="icon-password" /> : ''
        }
      </div>
    </div>
  )
}

export default Inputs