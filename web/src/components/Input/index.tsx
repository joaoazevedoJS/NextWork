import React, { FC, useState, ChangeEvent, InputHTMLAttributes } from 'react'
import { BsFillEyeFill, BsFillEyeSlashFill } from 'react-icons/bs'

import './styles.css'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  name: string
  type?: string
  isSignUpRequired?: boolean
  changeState?: React.Dispatch<React.SetStateAction<any>>
}

const Inputs: FC<Props> = ({ label, name, type, isSignUpRequired, changeState, ...rest }) => {
  const [typePassword, setTypePassword] = useState<string>('password')
  const [isOccult, setIsOccult] = useState<boolean>(true)

  function OnChangeEvent(event: ChangeEvent<HTMLInputElement>) {
    if (changeState)
      return changeState(event.target.value)
  }

  function PasswordIsOccult() {
    isOccult ? setTypePassword('text') : setTypePassword('password')
    setIsOccult(!isOccult)
  }

  return (
    <div className="input-block">
      <label htmlFor={name}>
        {label}
        {isSignUpRequired ? <span className="is-require">*</span> : '' }
      </label>

      <div className={type === 'password' ? 'passwordCamp' : ''} >
        <input
          type={type === 'password' ? typePassword : type || 'text' }
          id={name}
          name={name}
          { ...changeState ? rest.onChange=OnChangeEvent : '' }
          {...rest}
        />

        <>
          {
            type === "password" ? isOccult ?
              <BsFillEyeFill onClick={PasswordIsOccult} className="icon-password" /> :
              <BsFillEyeSlashFill onClick={PasswordIsOccult} className="icon-password" /> : ''
          }
        </>
      </div>
    </div>
  )
}

export default Inputs