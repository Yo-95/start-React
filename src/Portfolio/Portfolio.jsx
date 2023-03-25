import React from 'react'

export default function Portfolio() {
  return <>
  <div className="portfolio">
   
 <div className='header d-flex justify-content-center align-items-center'>
        <div>
    <h2>PORTFOLIO</h2>
    <i class="fa-solid fa-star fa-beat fa-xl px-5"></i>
    </div>
    </div>
    <div className="container py-4">
      <div className="row justify-content-center gy-2">
        <div className="col-md-4 ">
          <img src="img/cabin.png" className='w-75 rounded' alt="" />
        </div>
        <div className="col-md-4 ">
          <img src="img/cake.png" className='w-75 rounded' alt="" />
        </div>
        <div className="col-md-4 ">
          <img src="img/circus.png" className='w-75 rounded' alt="" />
        </div>
        <div className="col-md-4 ">
          <img src="img/game.png" className='w-75 rounded' alt="" />
        </div>
        <div className="col-md-4 ">
          <img src="img/safe.png" className='w-75 rounded' alt="" />
        </div>
        <div className="col-md-4 ">
          <img src="img/submarine.png" className='w-75 rounded' alt="" />
        </div>


      </div>
    </div>
    </div>
  </>
}
