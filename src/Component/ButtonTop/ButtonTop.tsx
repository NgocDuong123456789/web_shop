import { useEffect, useState , memo} from "react";
import className from "classnames/bind";
import {BsChevronDoubleUp} from 'react-icons/bs'
//@ts-ignore
import style from "./ButtonTop.module.scss";
const cx = className.bind(style);

 const ButtonTop = () => {
    const [buttonTop, setButtonTop]= useState<boolean>(false)
    const handleScroll=()=>{
      document.body.scrollTop = 0
      document.documentElement.scrollTop = 0
    }
    useEffect(()=>{
        const handleScroll=()=>{
            window.scrollY > 600 ? setButtonTop(true) : setButtonTop(false)
        }
        window.addEventListener('scroll', handleScroll)
     return ()  => window.removeEventListener('scroll', handleScroll)
    },[])
  return (
    <>
    {
      buttonTop &&  (<div className={cx('swapper')} onClick={handleScroll}><BsChevronDoubleUp /></div>)}
      </>

   
  );
};

export default memo(ButtonTop)
