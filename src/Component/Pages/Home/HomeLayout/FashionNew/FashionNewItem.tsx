import { Link } from "react-router-dom";

import { product } from "../../../../../interface";
import className from "classnames/bind";
import { Image } from "../../../../../public/public";

//@ts-ignore
import style from "./Fashion.module.scss";
const cx = className.bind(style);
interface Product {
  product: product;
  handleClick:(data:product)=>any
}
export const FashionNewItem: React.FC<Product> = ({ product , handleClick}) => {


  return (
    <Link to={`/Fashion/${product.title}`}>
      <div onClick={()=>handleClick(product)}>
        <div className={cx("fashion-item")}>
          <div className={cx("fashion-img")}>
            <img src={product.image01} alt="" />
            <div className={cx("overflow")}>
              <div className={cx("overflow-text")}>Xem Chi Tiết</div>
            </div>
          </div>
          <h5 className={cx("fashion-name")}>{product.title}</h5>
          <div className={cx("price")}>
            <p className={cx("price-new")}>{`${product.price}đ`}</p>
            <p className={cx("price-old")}>{`${product.priceold}đ`}</p>
          </div>
          <div className={cx("add")}>
            <div className={cx("img-cart")}>
              <img src={Image.cart} alt="" />
            </div>
            <button>Chọn mua</button>
          </div>
        </div>
      </div>
    </Link>
  );
};
