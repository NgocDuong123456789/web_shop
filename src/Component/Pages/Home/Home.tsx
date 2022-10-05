import className from "classnames/bind"
//@ts-ignore
import style from './Home.module.scss'
import {HomeLayout} from './HomeLayout/HomeLayout'
import ButtonTop from '../../ButtonTop/ButtonTop'
const cx= className.bind(style)
export const Home = () => {
  return (
    <div className={cx('swapper')}>
        <HomeLayout />
        <ButtonTop />
    </div>
  )
}
