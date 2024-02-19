import React from 'react'
import NavBar from '../components/NavBar.jsx'
import Hero from '../components/Hero.jsx'
import Card from '../components/Card.jsx'
import data from './data.js'
function App() {
  const cards = data.map(item => {
    return (
      <Card 
        img={item.coverImg} 
        rating={item.stats.rating} 
        reviewCount={item.stats.reviewCount} 
        country={item.location}
        title={item.title}
        price={item.price} />
    )
  })
  return (
    <div>
      <NavBar />
      <Hero />
      <section className="card--lists">
        {cards}
      </section>
    </div>
  )
}

export default App
