// src/components/objects.js
import React from 'react'

const DogGif = (props) => {

return (
<div>
      <div class="opacity-5 shadow-lg">
        <div class="card-body">
        <h5 classs="card-title">Information & Implementation</h5>
        <h6 class="card-subtitle mb-3 text-muted">Technical overview of site</h6>
          <img class="img-fluid rounded mx-auto d-block" src= {props.dogGif} />
          <div>
            <p class="card-text mx-auto mt-3">Welcome to dog.display() a simple frontend for some of the API services from the <a href ='https://thedogapi.com/' target ='_blank'>thedogapi.com/</a>.</p>
            <p class="card-text mx-auto mt-3">The site is built with <a href='https://reactjs.org/' target='_blank'>React</a>, <a href='https://getbootstrap.com/' target='_blank'>Bootstrap</a> and <a href='https://nodejs.org/' target='_blank'>Node.js</a>.</p>
            <p class="card-text mx-auto mt-3">The site is a work in progress and new features will be added in the coming weeks.</p>

            </div>
          <div>
          </div>
        </div>
      </div>
  </div>
  )
};
export default DogGif
