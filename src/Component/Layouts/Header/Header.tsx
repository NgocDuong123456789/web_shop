import { useRef, useContext } from "react";
import Tippy from "@tippyjs/react/headless";
import "tippy.js/dist/tippy.css";
import { Link } from "react-router-dom";
import { Path } from "../../Config/Path";
import { Image } from "../../../public/public";
import { SearchHeader } from "./SearchHeader/SearchHeader";
import { DataItems } from "../../useContext/useContext";
import {
  AiOutlineMenu,
  AiOutlineSearch,
  AiOutlineClose,
  AiOutlineHome,
  AiOutlineShoppingCart,
  AiFillCodeSandboxCircle,
  AiFillChrome,
} from "react-icons/ai";
import { product } from "../../../interface";
import { products } from "../../../data";
import { SearchItem } from "./SearchHeader/SearchItem";
import className from "classnames/bind";
//@ts-ignore
import style from "./Header.module.scss";
import { DelayDebounce } from "../../hook/SearchHook/SearchHook";
import NotSearch from "./SearchHeader/NotSearch";
const cx = className.bind(style);
export const Header = () => {
  const inputValue = useRef<any>();
  const Ref = useRef<any>();
  const Ref1 = useRef<any>();
  const data = useContext<any>(DataItems);
  const RefSearchMobile = useRef<any>();
  const dataSearchItem = useContext<any>(DataItems);
  const handleMenu = () => {
    Ref.current.style.transform = "translateX(0%)";
    Ref1.current.style.display = "block";
  };
  const handleClose = () => {
    Ref.current.style.transform = "translate(-100%)";
    Ref1.current.style.display = "none";
  };
  const handleOverflow = () => {
    Ref1.current.style.display = "none";
    Ref.current.style.transform = "translateX(-100%)";
  };
  const handleHome = () => {
    Ref1.current.style.display = "none";
    Ref.current.style.transform = "translateX(-100%)";
  };
  const handleMale = () => {
    Ref1.current.style.display = "none";
    Ref.current.style.transform = "translateX(-100%)";
  };
  const handleGirl = () => {
    Ref1.current.style.display = "none";
    Ref.current.style.transform = "translateX(-100%)";
  };
  const handleCart = () => {
    Ref1.current.style.display = "none";
    Ref.current.style.transform = "translateX(-100%)";
  };
  const handleClick = () => {
    data.setData([]);
  };
  const handleSearchMobile = () => {
    RefSearchMobile.current.style.display = "block";
  };
  const { setValue, searchValue, value } = DelayDebounce();

  const dataSearch = products.filter((item: product) =>
    item.title.toLowerCase().startsWith(searchValue.toLowerCase())
  );
  const handleSearch = (dataSearch: product) => {
    dataSearchItem.setDataItem(dataSearch);
    setValue("");
    inputValue.current.focus();
    RefSearchMobile.current.style.display = "none";
  };
  const handleOutsideClick = () => {
    setValue("");
    inputValue.current.focus();
  };

  return (
    <>
      <div className={cx("swapper")}>
        <div className={cx("menu")} onClick={handleMenu}>
          <AiOutlineMenu />
        </div>
        <div className={cx("logo")}>
          <Link to={Path.home} className={cx("logo-img")}>
            <img src={Image.logo} alt="logo" onClick={handleClick} />
          </Link>
          <h2>Fashion</h2>
        </div>
        <SearchHeader />
        <div className={cx("login")}>
          <button className={cx("btn-login")}>Đăng nhập</button>
          <div className={cx("search-mobile")} onClick={handleSearchMobile}>
            <AiOutlineSearch />
          </div>
        </div>
      </div>
      <div className={cx("menus")} ref={Ref}>
        <div className={cx("close-icon")} onClick={handleClose}>
          <AiOutlineClose />
        </div>
        <div className={cx("menu-list")}>
          <Link to={Path.home}>
            <div className={cx("menu-item")} onClick={handleHome}>
              <div className={cx("item-icon")}>
                <AiOutlineHome />
              </div>
              <p className={cx("item-title")}>Home</p>
            </div>
          </Link>
          <Link to={Path.FashionMale}>
            <div className={cx("menu-item")} onClick={handleMale}>
              <div className={cx("item-icon")}>
                <AiFillCodeSandboxCircle />
              </div>
              <p className={cx("item-title")}>Male</p>
            </div>
          </Link>
          <Link to={Path.FashionGirl}>
            <div className={cx("menu-item")} onClick={handleGirl}>
              <div className={cx("item-icon")}>
                <AiFillChrome />
              </div>
              <p className={cx("item-title")}>Girl</p>
            </div>
          </Link>
          <Link to={Path.FashionCart}>
            <div className={cx("menu-item")} onClick={handleCart}>
              <div className={cx("item-icon")}>
                <AiOutlineShoppingCart />
              </div>
              <p className={cx("item-title")}>Cart</p>
            </div>
          </Link>
        </div>
      </div>

      <div className={cx("overflow")} ref={Ref1} onClick={handleOverflow}></div>

      <div className={cx("mobile")} ref={RefSearchMobile}>
        <Tippy
          placement='bottom'
          interactive
          visible={value !== ""}
          render={() => (
            <div className={cx("swapperSearch")}>
              {dataSearch.length === 0 && value !== "" ? (
                <NotSearch />
              ) : (
                dataSearch.map((data, index) => (
                  <SearchItem
                    key={index}
                    data={data}
                    handleSearch={handleSearch}
                  />
                ))
              )}
            </div>
          )}
          onClickOutside={handleOutsideClick}
        >
          <input
            type="text"
            placeholder="Tìm Kiếm"
            ref={inputValue}
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </Tippy>
      </div>
    </>
  );
};
