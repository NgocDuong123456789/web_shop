import {memo} from 'react'
import className from 'classnames/bind'
//@ts-ignore
import style from './NotFashion.module.scss'
const cx = className.bind(style)
 const NotFashion = () => {
  return (
    <div className={cx('swapper')}>
       <p>Chưa có sản phẩm nào trong giỏ hàng</p>
    </div>
  )
}

export default memo(NotFashion)
