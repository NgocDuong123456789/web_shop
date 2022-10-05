import { useContext , useState, useRef} from "react";
import { DataItems } from "../../useContext/useContext";
import NotFashion from "../../NotFashion/NotFashion";
import className from "classnames/bind";
import Dialog from '../../Dialog/Dialog'
//@ts-ignore

import style from "./FashionCart.module.scss";
import { dataCart } from "../../../interface";
import { FashionCartTwoItem } from "./FashionCartTwoItem";

const cx = className.bind(style);
interface dialog{
  message: string;
  isLoadding:boolean;
}
export const FashionCartTwo = () => {
  const Ref= useRef<any>()
  const datas = useContext<any>(DataItems);
  const [dialog, setDialog] = useState<dialog>({
    message:'',
    isLoadding:false
  })
  const handleDelete = (title: string) => {
   setDialog({
    message:'',
    isLoadding:true
   })
   Ref.current=title
  };
const handleNo=()=>{
  setDialog({message:'', isLoadding:false})
}
const handleYes=()=>{
  setDialog({message:'', isLoadding:false})
  const dataCarts = datas.dataCart.filter(
      (item: dataCart) => item.title !== Ref.current
    );
   
    datas.setDataCart(dataCarts);
}
  return (
    <>
    <div className={cx("swapper2")}>
      {datas.dataCart.length === 0 ? (
       
          <NotFashion />
       
        
      ) : (
        <div>
          {datas.dataCart.map((item: dataCart, index: number) => (
            <FashionCartTwoItem
              key={index}
              value={item}
              handleDelete={handleDelete}
            />
          ))}
        </div>
      )}
     
    </div>
     {
       dialog.isLoadding && <Dialog handleYes={handleYes}  handleNo={handleNo} />
    }
  
  </>)
};
