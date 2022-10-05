import className from'classnames/bind' 
import {Link} from 'react-router-dom'
import {Path} from '../../../../Config/Path'
//@ts-ignore
import style from './ForHer.module.scss'
import {Image} from '../../../../../public/public'

const cx= className.bind(style)
export const ForHer = () => {
  return (
    <div className={cx('swapper')}>
      <Link to={Path.FashionGirl}>
      <div className={cx('img')}>
            <img src={Image.forher} alt='' />
        </div>
      </Link>
        <Link to={Path.FashionMale}>
        <div className={cx('img')}>
            <img src={Image.forhim} alt='' className={cx('img-item')} />
        </div>
        </Link>
    </div>
  )
}
