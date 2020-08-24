// src/components/objects.js
import React from 'react'

const Frodo = (props) => {

return(
<div class="opacity-5 mt-3 shadow-lg">
  <div class="card-body">
  <h5 classs="card-title">The Best Dog of All: </h5>
  <h6 class="card-subtitle mb-2 text-muted">Frodo</h6>
  <img class="img-fluid rounded mx-auto d-block" src= {require('../assets/frodo/frodo.jpg')} width = '500' alt ="Lilly" />
  <p class="card-text mx-auto mt-3"><b>Type/Breed: </b>Westhighland terrier, Westie.</p>
  <p class="card-text mx-auto mt-3"><b>Size: </b>between 25 - 28 in height, and 7 - 10kg in weight.</p>
  <p class="card-text mx-auto mt-3"><b>Termprament: </b>Indpendent, Intelligent, Confident and Self-assured.</p>
  <p class="card-text mx-auto mt-3"><b>Bred for: </b>Hunting small rodents.</p>

</div>
</div>
  )
};
export default Frodo
