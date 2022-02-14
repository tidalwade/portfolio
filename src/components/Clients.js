import React from 'react';

export default function Clients(props) {
  const {
      image,
    } = props  

  return (
    <div className="my-2 col-lg-2 col-sm-4 col-6">
    <div className="my-2 col-12 clients__block d-flex flex-column justify-content-center p-0 m-0">
    <img src={image} alt="Logo" />
    </div>
    </div>
  )
}

