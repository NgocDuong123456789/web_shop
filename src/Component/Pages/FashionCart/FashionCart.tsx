import className from 'classnames/bind'
//@ts-ignore
import style from './FashionCart.module.scss'
import {Header} from '../../Layouts/Header/Header'
import {Footer} from '../../Layouts/Footer/Footer'

import { FashionCartOne } from './FashionCartOne'
import {FashionCartTwo } from './FashionCartTwo'
const cx= className.bind(style)
export const FashionCart = () => {

  return (
    <div className={cx('swappers')}>
      <Header />
      <div className={cx('container')}>
      <FashionCartOne />
      <FashionCartTwo />
      </div>
      <Footer />
    </div>
    
  )
}
