import { useState, createContext } from "react";
import { ReactNode } from "react";
import { product } from "../../interface";
import {dataCart} from '../../interface'
export const DataItems = createContext<any>({
  data: [],
  setData: () => {},
  dataItem:{}
});
export const UseContext: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [data, setData] = useState<product[]>([]);
  const [dataItem, setDataItem]= useState<Object>({})
  // const [dataForm ,setDataForm]= useState<Object>({})
  const [dataCart, setDataCart]= useState<dataCart[]>([])
  
  return (
    <DataItems.Provider value={{ dataItem, setDataItem , data, setData ,  dataCart, setDataCart}}>
      {children}
    </DataItems.Provider>
  );
};
