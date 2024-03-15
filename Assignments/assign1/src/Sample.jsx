import React from 'react'
import './App'

function Sampler({name,email}){
    return(
        <div class="container">
  <div class="card mt-4 bg-light border-success">
    <div class="card-body">
      <h1 class="card-title text-success">{name}</h1>
      <p class="card-text text-muted">{email}</p>
    </div>
  </div>
</div>
    )
}

export default Sampler
