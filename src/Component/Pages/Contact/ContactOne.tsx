import className from "classnames/bind";
import {  useState, useEffect, useRef } from "react";
import {useForm } from 'react-hook-form'
import * as request from "../../VietnamProvinces/api";
import { Provinces, districts, Wards } from "../../../interface";
//@ts-ignore

import style from "./Contact.module.scss";

const cx = className.bind(style);
export const ContactOne = () => {
  const Ref= useRef<any>()
  const Ref1 = useRef<any>()
  // const [name, setName] = useState<string>("");
  // const [email, setEmail] = useState<string>("");
  // const [telephone, setTelephone] = useState<string>("");
  // const [address, setAddress] = useState<string>("");
  const [dataProvinces, setDataProvinces] = useState<Provinces[]>([]);
  const [codeProvinces, setCodeProvinces] = useState<number>(0);
  const [dataDistricts, setDataDistricts] = useState<districts[]>([]);
  const [codeDistrict, setCodeDistrict] = useState<number>(0);
  const [dataWards, setDataWards] = useState<Wards[]>([]);
  const {register, handleSubmit, formState:{errors}}= useForm<any>()

  const handleChangeProvinces = () => {
     Ref.current.addEventListener('change',(e:any)=>{
      setCodeProvinces(e.target.value)
     })
  };

  const handleChangeDistricts = () => {
    Ref1.current.addEventListener('change',(e:any)=>{
      setCodeDistrict(e.target.value)
     })
  };

  useEffect(() => {
    request
      .get("/api/", {
        params: {
          q: "depth=1",
        },
      })
      .then((res) => setDataProvinces(res.data))
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    request
      .get(`/api/p/${codeProvinces}?depth=2`, {})
      .then((res) => setDataDistricts(res.data.districts))
      .catch((error) => console.log(error));
  }, [codeProvinces]);

  useEffect(() => {
    request
      .get(`/api/d/${codeDistrict}?depth=2`, {})
      .then((res) => setDataWards(res.data.wards))
      .catch((error) => console.log(error));
  }, [codeDistrict]);
const onSubmit=(data:any)=>{
  console.log(data);
  

}
  return (
    <div className={cx("contact1")}>
      <h1>Th??ng tin giao h??ng</h1>
      <form className={cx("form")} onSubmit={handleSubmit(onSubmit)}>
        <div className={cx("controller")}>
          <input
            placeholder="*H??? v?? t??n"
            type="text"
            
            id="name"
            {...register('name',{required:true})}
          />
            {errors.name?.type === "required" && <small>B???n c???n nh???p ????ng tr?????ng n??y</small>} 
        </div>
        <div className={cx("controller")}>
          <input
            placeholder="*Email"
            type="text"
           
            id="email"
            {...register('email',{required:true,pattern:/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/})}
          />
          {
            errors.email?.type==='required' && <small>B???n c???n nh???n tr?????ng n??y</small>
            
          }
          {
            errors.email?.type==='pattern' && <small>B???n c???n nh???p ????ng Email</small>
          }
        </div>
        <div className={cx("controller")}>
          <input
            placeholder="*S??? ??i???n tho???i"
            type="text"
         
            id="s??t"
            {...register('s??t',{required:true})}
          />
          {
            errors.s??t?.type==='required' && <small>B???n c???n nh???p tr?????ng n??y</small>
          }
        </div>
        <div className={cx("address")}>
          <select  onClick={ handleChangeProvinces} ref={Ref}>
            <option>Ch???n</option>
            {dataProvinces.map((item) => {
              return (
                <option
                  key={item.code}
                  value={item.code}
                >
                  {item.name}
                </option>
              );
            })}
          </select>
          <select onClick={ handleChangeDistricts} ref={Ref1}>
            <option>Ch???n qu???n</option>
            {dataDistricts.map((item) => {
              return (
                <option
                  key={item.code}
                  value={item.code}
                >
                  {item.name}
                </option>
              );
            })}
          </select>
          <select>
            <option>Ch???n ph?????ng</option>
            {dataWards.map((item) => {
              return <option key={item.code}>{item.name}</option>;
            })}
          </select>
        </div>
        <div className={cx("controller")}>
          <input
            placeholder="*S??? nh?? t??n ???????ng"
            type="text"
          
            id="address"
            {...register('address',{required:true})}
          />
          {errors.address?.type === "required" && <small>B???n c???n ????ng tr?????ng n??y</small>} 
        </div>
        {/* <button type='submit'>submit</button> */}
      </form>
      <p>(*) l?? tr?????ng kh??ng ???????c ????? tr???ng</p>
    </div>
  );
};
