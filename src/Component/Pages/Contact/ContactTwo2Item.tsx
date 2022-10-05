import className from "classnames/bind";
//@ts-ignore
import style from "./Contact.module.scss";

import {dataCart} from '../../../interface'
const cx = className.bind(style);

interface products {
  value: dataCart
  handleDelete:(title:string)=>void
}
export const ContactTwo2Item: React.FC<products> = 
({ value , handleDelete}) => {
  return (
    <div className={cx("swapper")}>
      <div className={cx("img-title")}>
        <div className={cx("img")}>
          <img src={value.img} alt="còn cái nịt" />
        </div>
        <p>{`${value.title}-${value.color}-${value.size}`}</p>
      </div>

      <div className={cx("context")}>
        <p>{`${value.price}đ`}</p>
        <p  className={cx('count')}>{`số lượng: ${value.count}`}</p>
        <p onClick={()=>handleDelete(value.title)}>Xóa</p>
      </div>
    </div>
  );
};
