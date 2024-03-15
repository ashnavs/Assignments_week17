import React, { useRef, useState } from 'react'

function Form({name}) {
    const [value,setValue] = useState('');
    const inputRef = useRef(null)

    const handleSubmit = e => {
        e.preventDefault();
        console.log(value);
        setValue('');

    }

    const handleChange =(e) =>{
        setValue(e.target.value)
    }

  return (
    <div>
       <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="nameInput" className="form-label">Enter your name:</label>
        <input type="text" className="form-control w-50 mx-auto" id="nameInput" value={name} onChange={handleChange} ref={ inputRef}/>
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
    </div>
  )
}

export default Form
