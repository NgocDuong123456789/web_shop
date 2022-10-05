import { useRef, useEffect, useContext } from "react";
import className from "classnames/bind";
//@ts-ignore
import style from "./HomeIcon.module.scss";
import {
  AiFillHome,
  AiOutlineShoppingCart,
  AiOutlinePlus,
} from "react-icons/ai";
import { FaShieldAlt, FaShieldVirus } from "react-icons/fa";
import { HomeIconItem } from "../HomeIconItem/HomeIconItem";
import { Icon } from "../../../../interface";
import { products } from "../../../../data";
import { DataItems } from "../../../useContext/useContext";
const cx = className.bind(style);

const LIST_ICON: Array<Icon> = [
  {
    icon: AiFillHome,
    title: "Home",
    path: "/",
    check: true,
    check1: false,
  },
  {
    icon: FaShieldVirus,
    title: "male",
    path: "/fashion-male",
    check: false,
    check1: false,
  },
  {
    icon: FaShieldAlt,
    title: "girl",
    path: "/fashion-girl",
    check: false,
    check1: false,
  },
  {
    icon: AiOutlineShoppingCart,
    title: "cart",
    path: "/cart",
    check: false,
    check1: false,
  },
];
export const HomeIcon = () => {
const Ref = useRef<any>()
 const datas = useContext<any>(DataItems)


  useEffect(() => {
    Ref.current.style.top = "100px";
    const handleScroll = () => {
      window.scrollY > 2400
        ? (Ref.current.style.top = "40px")
        : (Ref.current.style.top = "100px");
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
//   const handleEmpty=(title:string)=>{
//  if (title === "male" || title==='girl') {
//     datas.setData([])
//       //  console.log(1);

//       // console.log(title);
//     }
//   }
   


  
  return (
    <div className={cx("swappers")}>
      <div ref={Ref} className={cx("swapper")}>
        <div className={cx("Icon-plug")}>
          <AiOutlinePlus className={cx("icon")} />
        </div>

        {LIST_ICON.map((Icon, index) => {
          return (
            <HomeIconItem key={index} Icon={Icon}  />
          );
        })}
      </div>
    </div>
  ); }
