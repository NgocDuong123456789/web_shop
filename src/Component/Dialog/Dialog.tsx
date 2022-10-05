import {memo} from 'react'
import className from 'classnames/bind'
//@ts-ignore
import style from './Dialog.module.scss'

const cx = className.bind(style)
interface handle{
  handleYes:()=>any
  handleNo:()=>any
}
const Dialog:React.FC<handle> = ({handleYes, handleNo}) => {
  return (
    <div className={cx('swapper')}>
        <div className={cx('container')}>
            <p>Are you sure you want to delete ?</p>
            <div className={cx('btn')}>
                <button onClick={handleYes}>Yes</button>
                <button onClick={handleNo}>No</button>
            </div>

        </div>
    </div>
  )
}
export default memo(Dialog)
