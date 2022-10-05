import className from "classnames/bind";

import {Link} from 'react-router-dom'
//@ts-ignore
import style from "./WWEKLYBEST.module.scss";
import { product } from "../../../../../interface";
import { Image } from "../../../../../public/public";
const cx = className.bind(style);
interface data {
  value: product;
  handleClick:(data:product)=>any
}
export const WWEKLYBESTItem: React.FC<data> = ({ value , handleClick}) => {

  return (
  <Link to={`/Fashion/${value.title}`}>
    <div className={cx("fashion-item")}  onClick={()=>handleClick(value)}>
      <div className={cx("fashion-img")}>
        <img src={value.image01} alt="" />
        <div className={cx('overflow')}>
          <div className={cx('overflow-text')}>Xem Chi Tiết</div>
        </div>
      </div>
      <h5 className={cx("fashion-name")}>{value.title}</h5>
      <div className={cx("price")}>
        <p className={cx("price-new")}>{`${value.price}đ`}</p>
        <p className={cx("price-old")}>{`${value.priceold}đ`}</p>
      </div>
      <div className={cx("add")}>
        <div className={cx("img-cart")}>
          <img src={Image.cart} alt="" />
        </div>
        <button>Chọn mua</button>
      </div>
    </div>
  </Link>
   
  );
};
