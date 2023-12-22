import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'
const Error = () => {
  return (
    <>
        <section className="error-page">
            <div className="container content">
                <h2 className='header'>404</h2>
                <h4>Sorry! Page not found</h4>
                <p>
                    Oops! It seems like the page you're trying to access doesn't exists.
                    If you believe there's an issue, feel free to report it, and we'll look into it.
                </p>
                <div className="btns">
                    <div className="btn1">
                        <Link to="/" className='mr-3'>Return Home</Link>
                    </div>
                    <div className="btn2">
                        <Link to="/about">Contact Us</Link>
                    </div>

                </div>
            </div>
        </section>
    </>
  )
}

export default Error
