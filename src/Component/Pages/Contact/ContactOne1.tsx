import {useState, useContext} from 'react'
import { DataItems } from '../../useContext/useContext'

import className from 'classnames/bind'
//@ts-ignore
import style from './Contact.module.scss'
import {Policy} from '../../../data'
const cx= className.bind(style)
export const ContactOne1 = () => {
  const datass= useContext<any>(DataItems)
  const [check, setCheck]= useState<string>('')
  const handleChange=(title:string)=>{
    setCheck(title)
    // datass.setDataItem({...datass.dataItem, check:check})
  }
  // console.log(datass.dataForm)
  return (
    <div className={cx('contact')}>
        <h1>Phương thức thanh toán</h1>
        {
          Policy.map((Item, index)=>{
            return (
              <div key={index} className={cx('contact-item')}>
                 <input   type='radio'  id={`input${index}`}  
                 onChange={()=>handleChange(Item.title)}   
                 value={check}  
                 checked={check===Item.title} />
                 {Item.icon }
                 <label htmlFor={`input${index}`}>{Item.title}</label>
              </div>
            )
          })
        }
  
    </div>
  )
}
