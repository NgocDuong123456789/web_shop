import className from "classnames/bind";
import { useContext, useRef , useState} from "react";
import { DataItems } from "../../useContext/useContext";
import ButtonTop from "../../ButtonTop/ButtonTop";
//@ts-ignore
import style from "./FashionMale.module.scss";
import { products } from "../../../data";
import { Header } from "../../Layouts/Header/Header";
import { Footer } from "../../Layouts/Footer/Footer";
import { Filter } from "../../Filter/Filter";
import { FashionMaleItem } from "./FashionMaleItem";
import { product } from "../../../interface";
const cx = className.bind(style);

export const FashionMale = () => {
  const ProductGirls = products.filter((product) => product.gender === "nam");
//   // const [ dataGirls, setGirls]= useState<product[]>(ProductGirls)
//  const [check , setCheck]= useState<boolean>(false)
//   const Ref = useRef<any>();
  const datas = useContext<any>(DataItems);
  
  const NewData1 = ProductGirls.filter((item) =>
    datas.data.includes(
      item.colors[0].charAt(0).toUpperCase() + item.colors[0].slice(1)
    )
  );

  const NewData2 = ProductGirls.filter((item) =>
    datas.data.includes(item.categorySlug)
  );
  const NewData3 = ProductGirls.filter((item, index) =>
    datas.data.includes(
      item.size[0].charAt(0).toUpperCase() + item.size[0].slice(1)
    )
  );

  const NewData = Array.from(new Set([...NewData1, ...NewData2, ...NewData3]));
 

   const dataGirls = NewData.length === 0 ? ProductGirls : NewData;

  const handleClick = (data: product) => {
    datas.setDataItem(data);
  };



  
  return (
    <div>
      <Header />
      <div className={cx("swapper")}>
        <div className={cx("context")}>
          <h1>FOR HIM</h1>
          <p>
            Tất cả những sản phẩm Mới nhất nằm trong BST được mở bán Hàng Tuần
            sẽ được cập nhật liên tục tại đây. Chắc chắn bạn sẽ tìm thấy những
            sản phẩm Đẹp Nhất - Vừa Vặn Nhất - Phù Hợp nhất với phong cách của
            mình.
          </p>
        </div>
 
        <div className={cx("container")}>
        <Filter />

          <div className={cx("List-product")}>
            {dataGirls.map((ProductMale, index) => {
              return (
                <FashionMaleItem
                  key={index}
                  ProductGirl={ProductMale}
                  handleClick={handleClick}
                />
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
      <ButtonTop />
    </div>
  );
};
