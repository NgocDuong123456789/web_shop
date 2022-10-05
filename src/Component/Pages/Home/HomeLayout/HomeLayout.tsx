
import className from 'classnames/bind'
//@ts-ignore
import style from './HomeLayout.module.scss'
import   SimpleSlider  from './HomeSlider/HomeSlider'
import { ForHer } from './ForHer/ForHer'
import{FashionNew} from './FashionNew/FashionNew'
import {Policys} from './Policy/Policy'
import {WWEKLYBEST} from './WWEKLYBEST/WWEKLYBEST'
const cx= className.bind(style)

export const HomeLayout = () => {
  return (
    <div className={cx('swapper')}>
        < SimpleSlider />
        <ForHer />
        <FashionNew />
        <Policys />
        <WWEKLYBEST /> 
    </div>
  )
}
