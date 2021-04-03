import React from "react";

/**
 * * render an Icon existinng in the Assets/icons/ folder , those icons's name starts with m_icon_
 * @param {string} name
 * @param {string} extention
 * @param {object} style
 * @param {function} onClick
 * @param {string} className
 */
export default function Icon({ name = "", extention="png", style, onClick, className="" }) {
  
    let img = require(`../../Assets/icons/m_icon_${name}.${extention}`)

  return <img onClick={onClick} style={style} className={"icon "+className} src={img} alt={"icon-" + name} />
  
}
