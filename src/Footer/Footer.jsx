import React from 'react'

export default function Footer() {
  return <>
  <footer className='bg-dark fixed-bottom  text-white text-center'>
<div className="container">
  <div className="row">
    <div className="col-md-4">
      <h3>LOCATION</h3>
      <h6>2215 John Daniel Drive</h6>
      <h6>Clark, MO 65243</h6>
    </div>

    <div className="col-md-4">
      <h3>AROUND THE WEB</h3>
      <div className="ico rounded">
      <i className="fa-brands fa-facebook fa-2xl px-3"></i>
      <i className="fa-brands fa-twitter fa-2xl px-3"></i>
      <i className="fa-brands fa-linkedin fa-2xl px-3"></i>
      </div>
    </div>

    <div className="col-md-4">
      <h3>ABOUT FREELANCER</h3>
      <h6>Freelance is a free to use, MIT</h6>
      <h6>licensed Bootstrap theme created by</h6>
      <h6>Route</h6>
    </div>
  </div>
</div>
  </footer>
  </>
}
