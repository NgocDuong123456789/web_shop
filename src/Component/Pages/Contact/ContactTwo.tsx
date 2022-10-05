import { useContext } from "react";
import { DataItems } from "../../useContext/useContext";
import { dataCart } from "../../../interface";
import { Link } from "react-router-dom";
import className from "classnames/bind";
//@ts-ignore
import style from "./Contact.module.scss";
import { Path } from "../../Config/Path";
const cx = className.bind(style);

export const ContactTwo = () => {
  const datas = useContext<any>(DataItems);

  
  let total = new Intl.NumberFormat().format(
    datas.dataCart.reduce((sum: number, item: dataCart) => {
      return sum + item.count * parseInt(item.price);
    }, 0)
  );
  total === "0" ? (total = "0") : (total = `${total}.000`);
  const sum = new Intl.NumberFormat().format(
    datas.dataCart.reduce((sum: number, item: dataCart) => {
      return sum + item.count * parseInt(item.price);
    }, 0) + 20
  );
  const handleClick = () => {};
  return (
    <div className={cx("contact2")}>
      <div>
        <input type="text" placeholder="Mã giảm giá.." />
        <button>Áp dụng</button>
      </div>
      <div>
        <p>Tổng tiền:</p>
        <p>{`${total} VNĐ`}</p>
      </div>
      <div>
        <p>Ưu đãi:</p>
        <p>-0 VNĐ</p>
      </div>
      <div>
        <p>Phí ship:</p>
        <p>20.000 VNĐ</p>
      </div>
      <div>
        <p>Thành tiền:</p>
        <p>{`${sum}.000 VNĐ`}</p>
      </div>
      <Link to={Path.success}>
        <button className={cx("btn")} onClick={handleClick}>
          Hoàn Thành Đơn Hàng
        </button>
      </Link>
    </div>
  );
};
