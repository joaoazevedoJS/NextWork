import React, { FC, useState, ChangeEvent } from 'react'
import { BsFillEyeFill, BsFillEyeSlashFill } from 'react-icons/bs'

import './styles.css'

interface Props {
  label: string
  type?: string
  name: string
  isRequired?: boolean
  placehold?: string
  changeState?: React.Dispatch<React.SetStateAction<any>>
  clickEvent?: () => {}
}

const Inputs: FC<Props> = (props) => {
  const isPassword = props.type === 'password' ? true : false

  const [ typePassword, setTypePassword ] = useState<string>('password')
  const [ isOccult, setIsOccult ] = useState<boolean>(true)

  function OnChangeEvent(event: ChangeEvent<HTMLInputElement>) {
    if(props.changeState)
      return props.changeState(event.target.value)
  }

  function PasswordIsOccult() {
    isOccult ? setTypePassword('text') : setTypePassword('password')
    setIsOccult(!isOccult)
  }

  return (
    <>
      <label htmlFor={props.name}>
        {props.label}
        {props.isRequired ? <span className="is-require">*</span> : ''}
      </label>

      {
        isPassword === true ?
          <div className="passwordCamp">
            <input
              type={typePassword}
              id={props.name}
              name={props.name}
              required={props.isRequired || false}
              placeholder={props.placehold}
              onChange={OnChangeEvent}
            />

            {
              isOccult ? <BsFillEyeSlashFill onClick={PasswordIsOccult} /> :
                <BsFillEyeFill onClick={PasswordIsOccult}/>
            }
          </div> :
          <input
            type={props.type || 'text' }
            id={props.name}
            name={props.name}
            required={props.isRequired || false}
            placeholder={props.placehold}
            onChange={OnChangeEvent}
          />
      }
    </>
  )
}

export default Inputs