import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Services(props) {
  const {
      title,
      subtitle,
      description,
      iconName,
    } = props  

  return (
    <div className="my-2 col-xl-6 col-12 fade" data-delay=".25s">
      <div className="mx-2">
        <div className="col-6 summary__border center-radius">
          <div className="text-center summary__icon"><FontAwesomeIcon icon={iconName} /></div>
        </div>
        <div class="d-flex summary__flex">
          <div className="col-3 summary__border left-radius"></div>
          <div className="col-6"></div>
          <div className="col-3 summary__border right-radius"></div>
        </div>
        <div className="col-12 summary__block">
          <div className="summary__title">
            <h1>{title}</h1>
            <h2>{subtitle}</h2>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
