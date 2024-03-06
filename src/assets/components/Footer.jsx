import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
    <div style={{height:'300px'}} className="container mt-5 w-100">
        <div className="footer-content d-flex justify-content-between">
            
            <div style={{width:'30%'}} className="media">
              <h5 className='d-flex'><i  className="fa-solid fa-headphones  me-3"></i>{' '}Media Player</h5>
              <p style={{textAlign:'justify'}}>
                Designed a built with all the love in the world by the Bootstrap team with the help of our contributors.
              </p><span>Code licensed Rahul K</span>
              <span>Currently v5.3.2</span>
            </div>
            
            <div className="links d-flex flex-column">
                <h5 className='d-flex'>Links</h5>
                <Link to={'/'} style={{textDecoration:'none', color:'white'}}>Landing Page</Link>
                <Link to={'/home'} style={{textDecoration:'none', color:'white'}}>Home</Link>
                <Link to={'/watch'} style={{textDecoration:'none', color:'white'}}>Watch</Link>
            </div>

            <div className="guide d-flex flex-column">
                <h5>Guides</h5>
                <a href="https://react.dev/" target='blank' style={{textDecoration:'none', color:'white'}}>React JS</a>
                <a href="https://reactrouter.com/en/main" target='blank' style={{textDecoration:'none', color:'white'}}>React Routing</a>
                <a href="https://react-bootstrap.github.io/" target='blank' style={{textDecoration:'none', color:'white'}}>React Bootstrap</a>
            </div>

            <div className="contact">
                <h5>Contact Us</h5>

                <div className="d-flex">
                    <input type="email" className='form-control me-1' placeholder='Email id' />
                    <button className='btn btn-warning' ><i className='fa-solid fa-arrow-right'></i></button>
                </div>
                <div className="icons d-flex justify-content-between mt-4">
                    <a href="https://react.dev/" target='blank' style={{textDecoration:'none', color:'white'}}>
                    <i className='fa-brands fa-x-twitter'></i></a>

                    <a href="https://react.dev/" target='blank' style={{textDecoration:'none', color:'white'}}><i className="fa-brands fa-instagram"></i></a>
                    <a href="https://react.dev/" target='blank' style={{textDecoration:'none', color:'white'}}><i className="fa-brands fa-facebook"></i></a>

                    <a href="https://react.dev/" target='blank' style={{textDecoration:'none', color:'white'}}><i className="fa-brands fa-whatsapp"></i></a>

                    <a href="https://react.dev/" target='blank' style={{textDecoration:'none', color:'white'}}><i className="fa-solid fa-envelope"></i></a>

                    <a href="https://react.dev/" target='blank' style={{textDecoration:'none', color:'white'}}><i className="fa-brands fa-linkedin "></i></a>



                </div>
           </div>
        </div>
        <p className='text-center mt-5'>Copyright &copy; 2024 Media Player. Built With React</p>
    </div>
    </>
  )
}

export default Footer