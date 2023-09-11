import React from 'react'
import { socialLinks } from "../data";
const SocialLinks = (props) => {
  return (
    <ul className={props.parent}>
          {socialLinks.map((link)=>{
            return (
              <li key={link.id}>
              <a href={link.href} target="#" className={props.item}>
              {link.icon}
              </a>
            </li>
            )
          })}
        </ul>
  )
}

export default SocialLinks