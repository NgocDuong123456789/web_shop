import className from 'classnames/bind'
//@ts-ignore
import style from './Policy.module.scss'
import {Policy} from '../../../../../data'
import {PolicyItem} from './PolicyItem'

const cx= className.bind(style)


export const Policys = () => {
  return (
    <div className={cx('swapper')}>
        {Policy.map((policy, index)=>{
            return (
                <PolicyItem key={index}  Value={policy}/>
            )
        })}
    </div>
  )
}
