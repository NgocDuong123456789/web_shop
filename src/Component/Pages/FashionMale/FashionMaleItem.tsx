import className from "classnames/bind";

import { Link } from "react-router-dom";
//@ts-ignore
import style from "./FashionMale.module.scss";
import { product } from "../../../interface";
import { Image } from "../../../public/public";

const cx = className.bind(style);
interface data {
  ProductGirl: product;
  handleClick:(data:product)=>any
}

export const FashionMaleItem: React.FC<data> = ({ ProductGirl, handleClick}) => {
  return (
    <Link to={`/Fashion/${ProductGirl.title}`}>
      <div className={cx("fashion-item")} onClick={()=>handleClick(ProductGirl)}>
        <div className={cx("fashion-img")} >
          <img src={ProductGirl.image01} alt="" />
          <div className={cx("overflow")}>
            <div className={cx("overflow-text")}>Xem Chi Tiết</div>
          </div>
        </div>
        <h5 className={cx("fashion-name")}>{ProductGirl.title}</h5>
        <div className={cx("price")}>
          <p className={cx("price-new")}>{`${ProductGirl.price}đ`}</p>
          <p className={cx("price-old")}>{`${ProductGirl.priceold}đ`}</p>
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
