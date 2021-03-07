import React from 'react';

export default function NavList(props) {
  const {
      index,
      content,
      linkUrl,
      active,
      handleOnClick
    } = props

  return (
    <>
      <li key={index}  className="nav-item" 
        onClick={() => handleOnClick(index)}
        className={active === index ? "active" : "unactive"}>
        {/* <a className={`nav-link`} href={linkUrl}>{content}
        </a> */}
        {content}
      </li>
    </>
  )
}