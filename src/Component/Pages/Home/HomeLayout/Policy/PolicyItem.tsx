import React from 'react'
import {policy} from '../../../../../interface'
import className from 'classnames/bind'
//@ts-ignore
import style from './Policy.module.scss'

const cx= className.bind(style)
interface Policy{
    Value:policy
}
export const PolicyItem:React.FC<Policy> = ({Value}) => {

  return (
    <div className={cx('policy-item')}>
      <div className={cx('policy-icon')}>
      {Value.icon}
      </div>
        <div>
            <h4>{Value.name}</h4>
            <p>{Value.description}</p>
        </div>
    </div>
  )
}
