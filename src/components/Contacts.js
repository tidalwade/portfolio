import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function Contacts(props) {
  const {
      url,
      iconName,
      iconType,
      subtitle,
    } = props  

  return (
    <div>
      <a href={url}>
        <FontAwesomeIcon icon={[`${iconType}`, `${iconName}`]} />
      </a>
      <div>{subtitle}</div>
    </div>
  )
}
