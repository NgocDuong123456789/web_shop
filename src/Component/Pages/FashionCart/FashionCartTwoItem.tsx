import className from "classnames/bind";
//@ts-ignore
import style from "./FashionCart.module.scss";
import { dataCart } from "../../../interface";
const cx = className.bind(style);

interface products {
  value: dataCart;
  handleDelete: (title: string) => any;
}
export const FashionCartTwoItem: React.FC<products> = ({
  value,
  handleDelete,
}) => {
 
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
        <p>{`số lương: ${value.count}`}</p>
        <p onClick={() => handleDelete(value.title)}>Xóa</p>
      </div>
    </div>
  );
};
