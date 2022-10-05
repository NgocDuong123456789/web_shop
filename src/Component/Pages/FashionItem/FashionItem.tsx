import className from "classnames/bind";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { Link } from "react-router-dom";
import { useContext, useState, useRef } from "react";
import { DataItems } from "../../useContext/useContext";
import { AiFillQuestionCircle } from "react-icons/ai";
import { BsCart4 } from "react-icons/bs";
//@ts-ignore
import style from "./FashionItem.module.scss";
import { Header } from "../../Layouts/Header/Header";
import { Path } from "../../Config/Path";

const cx = className.bind(style);

export const FashionItem = () => {
  const Ref1 = useRef<any>();
  const Ref2 = useRef<any>();
  const Ref3 = useRef<any>();
  const datas = useContext<any>(DataItems);
  const [count, setCount] = useState<number>(1);
  const [color, setColor] = useState<string>("");
  const [size, setSize] = useState<string>("");

  const handleMouseve1 = () => {
    Ref3.current.src = datas.dataItem.image01;
    Ref1.current.style.border = "2px solid black";
    Ref2.current.style.border = "2px solid #ccc";
  };

  const handleMouseve2 = () => {
    Ref3.current.src = datas.dataItem.image02;
    Ref1.current.style.border = "2px solid #ccc";
    Ref2.current.style.border = "2px solid black";
  };
  const handleCart1 = (title: string) => {

    const titles = datas.dataCart.some((item:any)=>item.title===title)
    if (color === "") {
      toast.info(" Vui lòng chọn màu sắc!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    } else if (size === "") {
      toast.info("Vui lòng chọn size!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    } else {
      if (titles) {
        toast.info("Sản phẩm đã có trong giỏ hàng!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        return;
      } else {
        toast.success("Sản phẩm đã được thêm vào giỏ hàng", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
      datas.setDataCart([
        ...datas.dataCart,
        {
          count,
          color,
          size,
          img: datas.dataItem.image01,
          title: datas.dataItem.title,
          price: datas.dataItem.price,
        },
      ]);
    }
  };

  const handleCart = (title:string) => {
    const titles = datas.dataCart.some((item:any)=>item.title===title)
    if (color === "") {
      toast.info(" Vui lòng chọn màu sắc!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else if (size === "") {
      toast.info("Vui lòng chọn size!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      if(titles){
        toast.info("Sản phẩm đã có trong giỏ hàng!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        return;
      }else{
        datas.setDataCart([
          ...datas.dataCart,
          {
            count,
            color,
            size,
            img: datas.dataItem.image01,
            title: datas.dataItem.title,
            price: datas.dataItem.price,
          },
        ]);
      }
     
    }
  };
  const handleClick1 = () => {
    if (count < 2) return;
    setCount((prev) => prev - 1);
  };
  const handleClick2 = () => {
    setCount((prev) => prev + 1);
  };
  return (
    <div>
      <Header />
      <div className={cx("swapper")}>
        <div className={cx("container")}>
          <div className={cx("container-img")}>
            <div className={cx("img")}>
              <img src={datas.dataItem.image01} alt="" ref={Ref3} />
            </div>

            <div className={cx("img-list")}>
              <img
                src={datas.dataItem.image01}
                alt=""
                onMouseOver={handleMouseve1}
                ref={Ref1}
              />
              <img
                src={datas.dataItem.image02}
                alt=""
                onMouseOver={handleMouseve2}
                ref={Ref2}
              />
            </div>
          </div>
          <div className={cx("context")}>
            <div className={cx("context-title")}>
              <p className={cx("context-love")}>Yêu Thích</p>
              <h3>{datas.dataItem.title}</h3>
            </div>

            <div className={cx("context-price")}>
              <div className={cx("price")}>
                <div className={cx("price-new")}>
                  <sup>đ</sup>
                  <p>{datas.dataItem.price}</p>
                </div>
                <div className={cx("price-old")}>
                  <sup>đ</sup>
                  <p>{datas.dataItem.priceold}</p>
                </div>

                <p className={cx("new-price")}>42% giảm</p>
              </div>
              <div>
                <div className={cx("price-news")}>
                  <p>Gì cũng rẻ </p>
                  <AiFillQuestionCircle />
                </div>
                <p>Giá tốt nhất so với các sản phẩm khách</p>
              </div>
            </div>
            <div>
              <p>Màu sắc</p>
              <div className={cx("color-list")}>
                {datas.dataItem.colors.map((colors: string) => {
                  return (
                    <div
                      key={colors}
                      className={cx("color")}
                      style={{
                        border: `${
                          color === colors
                            ? "2px solid black"
                            : " 2px solid #ccc"
                        }`,
                      }}
                    >
                      <p
                        style={{ background: colors }}
                        onClick={() => setColor(colors)}
                      ></p>
                    </div>
                  );
                })}
              </div>
            </div>
            <div>
              <p>Khích cỡ</p>
              <div className={cx("size-list")}>
                {datas.dataItem.size.map((sizes: string, index: number) => (
                  <div
                    key={index}
                    className={cx("size")}
                    onClick={() => setSize(sizes)}
                    style={{
                      border: `${
                        sizes === size ? "2px solid black" : "2px solid #ccc"
                      }`,
                    }}
                  >
                    {sizes}
                  </div>
                ))}
              </div>
            </div>
            <div>
              <p>Số Lượng</p>
              <div className={cx("amount")}>
                <button onClick={handleClick1}>-</button>
                <p>{count}</p>
                <button onClick={handleClick2}>+</button>
              </div>
            </div>
            <div className={cx("cart")}>
              <div className={cx("cart-list")} onClick={() => handleCart1(datas.dataItem.title)}>
                <BsCart4 />
                <p>
                  Thêm Vào Giỏ Hàng
                </p>
              </div>
              <div>
                {color && size ? (
                  <Link to={Path.FashionCart}>
                    <button className={cx("cart-buy")} onClick={()=>handleCart(datas.dataItem.title)}> 
                      Mua Ngay
                    </button>
                  </Link>
                ) : (
                  <button className={cx("cart-buy")} onClick={()=>handleCart(datas.dataItem.title)}>
                    Mua Ngay
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};
