import { ReactNode } from 'react'

// @ts-ignore
import'./GlobalStyle.module.scss'


 const GlobalStyle:React.FC<{children: ReactNode}> = ({children}) => {
  return (
    <div >{children}</div>
  )
}
export default GlobalStyle
