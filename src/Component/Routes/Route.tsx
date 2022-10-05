import {Path} from '../Config/Path'
import {Home} from '../Pages/Home/Home'
import {FashionMale} from '../Pages/FashionMale/FashionMale'
import {FashionGirl} from '../Pages/FashionGirl/FashionGirl'
import {FashionCart} from '../Pages/FashionCart/FashionCart'
import {FashionItem} from '../Pages/FashionItem/FashionItem'
import {Contact} from '../Pages/Contact/Contact'
import {Success} from '../success/success'

interface Fashion{
  path:string, 
  component:() => any
  check?:any
}

export const PublicRoute:Array<Fashion>=[
    {
        path:Path.home,
        component:Home
    },{
        path:Path.FashionGirl,
        component:FashionGirl,
        check:null
    },{
        path:Path.FashionMale,
        component:FashionMale,
        check:null
    },{
        path:Path.FashionCart,
        component:FashionCart,
        check:null
    },
    {
        path:Path.Fashion,
        component:FashionItem,
        check:null
    },
    {
        path:Path.Checkout,
        component:Contact,
        check:null
    },
    {
        path:Path.success,
        component:Success,
        check:null

    }

]