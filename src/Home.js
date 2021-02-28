import React from 'react'
import TileSlide from './TileSlide'

function Home(){

  const tiles = [
    {
        content: 'Host a virtual birthday bash',
        linkText: 'Get Started',
        tileClass: 'greeting-tile-one'
    },
    {
        content: 'Dedicate a bar or bat mitzvah',
        linkText: 'Get Started',
        tileClass: 'greeting-tile-two'
    },
    {
        content: 'Raise funds with a Quinceañera',
        linkText: 'Get Started',
        tileClass: 'greeting-tile-three'
    },
    {
        content: 'Request donations in lieu of weeding or anniversary gifts',
        linkText: 'Get Started',
        tileClass: 'greeting-tile-four'
    },
    {
        content: 'Mark a health milestone',
        linkText: 'Get Started',
        tileClass: 'greeting-tile-five'
    }
  ]

  const renderTilesMobile = () => {
    return (
        <div>
            {tiles.map((tile) => {
                return (
                    <TileSlide {...tile} />
                )
            })}
        </div>
    )
  }
  return(
    <div>
      <section className="section greeting-tiles-mobile is-hidden-tablet pt-5 py-0">
        <div className="container">
        {renderTilesMobile()}
        </div>
      </section>
    </div>
  )
}

export default Home;