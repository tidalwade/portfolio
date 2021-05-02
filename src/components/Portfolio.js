import React from 'react';
// import pdf from './assets/pdfs/Ryan_Wade_Web_Developer_Resume.pdf';

export default function Portfolio(props) {
  const {
      title,
      subtitle,
      description,
      url,
    } = props  

  return (
    <div className="row portfolio_container">
    <div className="my-2 col-xl-7 col-12 fade" data-delay=".25s">
      <div className="my-2 p-0 col-12 portfolio_block_container">
        <div className="portfolio__block">
        <a href={url} target="_blank">
          <div className="mission px-3 d-flex flex-column justify-content-center">
            <a className="btn btn-primary" href={url} >Visit Site</a>
          </div>
          </a>
        </div>
      </div>
    </div>
    <div className="my-2 col-xl-5 col-12 fade" data-delay=".25s">
      <div className="my-2 col-12 portfolio__block_description d-flex flex-column justify-content-center">
        <h2 className="text-center">{title}</h2>
        <div className="portfolio__block_more_description d-flex flex-column justify-content-center">
          <h4 className="text-center">{subtitle}</h4>
          <p>{description}</p>
        </div>
      </div>
    </div>
    </div>
  )
}
