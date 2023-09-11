import React from 'react'
import { pageLinks } from '../data'


const PageLinks = (props) => {
  return (
   <ul className={props.parent} id={props.parent}>
          {pageLinks.map((link)=>{
            return (
              <li key={link.id}>
              <a href={link.href} className={props.item}>
               {link.text}
              </a>
            </li>
            )
          })}
        </ul>
  )
}

export default PageLinks