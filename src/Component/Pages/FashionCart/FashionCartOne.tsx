import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import className from "classnames/bind";
import { Path } from "../../Config/Path";
//@ts-ignore
import style from "./FashionCart.module.scss";
import { useContext } from "react";
import { DataItems } from "../../useContext/useContext";
import { dataCart } from "../../../interface";
const cx = className.bind(style);
export const FashionCartOne = () => {
  
  const datas = useContext<any>(DataItems);


  let total = new Intl.NumberFormat().format(
    datas.dataCart.reduce((sum: number, item: dataCart) => {
      return sum + item.count * parseInt(item.price);
    }, 0)
  )

  total === "0" ? (total = "0") : (total = `${total}.000`);

  const handleCart = () => {
    if (datas.dataCart.length === 0) {
      toast.error("Giỏ hàng chưa có sản phẩm nào", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };
  return (
    <div className={cx("swapper1")}>
      <p
        className={cx("title")}
      >{`Bạn đang có ${datas.dataCart.length} sản phẩm trong giỏ hàng`}</p>
      <div className={cx("money")}>
        <p>Thành tiền:</p>
        <h3>{`${total} VNĐ`}</h3>
      </div>
      {datas.dataCart.length === 0 ? (
        <button className={cx('cart-buy')} onClick={handleCart}>Đặt Hàng</button>
      ) : (
        <Link to={Path.Checkout}>
          <button className={cx('cart-buy')}>Đặt Hàng</button>
        </Link>
      )}
      
      <Link to={Path.home}>
        <button className={cx('cart-buy')}>Tiếp tục mua hàng</button>
      </Link>
      <ToastContainer />
    </div>
  );
};
