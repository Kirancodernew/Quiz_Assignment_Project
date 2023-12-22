import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <>
      <main>
        <section className='main__section'>
          <div className="container text__content">
              <h1 className='mb-5'>Which Coding Language Should You Learn?</h1>
              <h3 className='mb-3 about__quiz'>About This Quiz</h3>
              <p>Depending on what it is you want to make or do, your choice might already be made up for you. Take our quiz and find out which coding language you should learn on your way to being a programming master!</p>
          </div>
          <div className="start__quiz mt-3 mb-3">
            <span>▶</span>
            <Link to={'/login'}><button type='submit'className='btn btn-primary'>Enter Quiz</button></Link>
            <span>◀</span>
          </div>
          <div className="container img__content">
            <img src="https://gowithcode.com/wp-content/uploads/2021/04/top-programming-languages.jpg" alt="languages" />
          </div>
        </section>
      </main>
    </>
  )
}

export default Home
