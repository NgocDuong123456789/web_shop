import {product} from '../../../../interface'
import className from 'classnames/bind'
import {Link} from 'react-router-dom'
//@ts-ignore
import style from './SearchHeader.module.scss'
import {AiOutlineSearch} from 'react-icons/ai'


const cx = className.bind(style)

interface datas{
    data:product
    handleSearch:(data:product)=>any
}

export const SearchItem:React.FC<datas> = ({data, handleSearch}) =>{
  return (
   <Link to={`/Fashion/${data.title}`}> <div className={cx('swapperItem')} 
   onClick={()=>handleSearch(data)}>
   <div className={cx('searchIcon')} >
   <AiOutlineSearch />
   </div>
      <p>{data.title}</p>
  </div></Link>
  )
}
