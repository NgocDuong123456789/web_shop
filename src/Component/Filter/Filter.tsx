import { DataItems } from "../useContext/useContext";
import { useContext, useRef } from "react";
import { FilterColors, FilterSizes, FilterProducts } from "./../../data";
import { AiOutlineArrowLeft } from "react-icons/ai";
import className from "classnames/bind";
import { filter } from "./../../interface";
import { FilterProductItem } from "./FilterProductItem";
import { FilterColorItem } from "./FilterColorItem";
import { FilterSizeItem } from "./FilterSizeItem";
//@ts-ignore
import style from "./Filter.module.scss";
const cx = className.bind(style);

export const Filter = () => {
  const Ref = useRef<any>();
  const datas = useContext<any>(DataItems);
  const handleChange1 = (name: string) => {
    datas.setData((prev: any) => {
      const check = datas.data.includes(name);
      if (check) {
        return datas.data.filter((item: any) => item !== name);
      } else {
        return [...prev, name];
      }
    });
  };

  const handleChange2 = (name: string) => {
    datas.setData((prev: any) => {
      const check = datas.data.includes(name);
      if (check) {
        return datas.data.filter((item: any) => item !== name);
      } else {
        return [...prev, name];
      }
    });
  };
  const handleChange3 = (name: string) => {
    datas.setData((prev: any) => {
      const check = datas.data.includes(name);
      if (check) {
        return datas.data.filter((item: any) => item !== name);
      } else {
        return [...prev, name];
      }
    });
  };
  const handleClick = () => {
    datas.setData([]);
  };
  
  const handleCloseFilter = () => {
    Ref.current.style.transform = "translateX(-100%)";
  };
  

  return (
    <div className={cx("swapper")} ref={Ref}>
      <div className={cx("container1")}>
        <div className={cx("filter-icon")} onClick={handleCloseFilter}>
          <AiOutlineArrowLeft />
        </div>
        <h3 className={cx("product-title")}>Danh Mục Sản Phẩm</h3>
        {FilterProducts.map((filterProduct: filter, index: number) => {
          return (
            <FilterProductItem
              key={index}
              FilterProduct={filterProduct}
              handleChange3={handleChange3}
            />
          );
        })}
      </div>

      <div className={cx("container2")}>
        <h3 className={cx("size-title")}>Kích Cỡ/Size</h3>
        {FilterSizes.map((filterSize: filter, index: number) => {
          return (
            <FilterSizeItem
              key={index}
              FilterSize={filterSize}
              handleChange2={handleChange2}
            />
          );
        })}
      </div>

      <div className={cx("container3")}>
        <h3 className={cx("color-title")}>Màu Sắc</h3>
        {FilterColors.map((filterColor: filter, index: number) => {
          return (
            <FilterColorItem
              key={index}
              FilterColor={filterColor}
              handleChange1={handleChange1}
            />
          );
        })}
      </div>
      <button className={cx("btn-filter")} onClick={handleClick}>
        Xóa Bộ Lọc
      </button>
    </div>
  );
};
