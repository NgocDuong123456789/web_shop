import className from "classnames/bind";
//@ts-ignore
import style from "./Contact.module.scss";
import NotFashion from "../../NotFashion/NotFashion";
import { ContactTwo2Item } from "./ContactTwo2Item";
import { useContext } from "react";
import { DataItems } from "../../useContext/useContext";
import { dataCart } from "../../../interface";
const cx = className.bind(style);
export const ContactTwo2 = () => {
  const datas = useContext<any>(DataItems);
  const handleDelete = (title: string) => {
    alert('bạn có chắc chắn xóa sản phẩm không ?')
    const dataDelete = datas.dataCart.filter(
      (item: dataCart) => item.title !== title
    );
   
    datas.setDataCart(dataDelete);
  };
  return (
    <div className={cx("swapper2")}>
      {datas.dataCart.length === 0 ? (
        <NotFashion />
      ) : (
        <div>
          {datas.dataCart.map((item: dataCart, index: number) => (
            <ContactTwo2Item
              key={index}
              value={item}
              handleDelete={handleDelete}
            />
          ))}
        </div>
      )}
    </div>
  );
};
