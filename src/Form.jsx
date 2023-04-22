import React, { useState } from 'react'

const Form = ({addColor}) => {
    const [color, setColor] = useState("");

    const handleSubmit = (e) => {
         e.preventDefault();
         addColor(color);
    }
    const handleChange = (e) => {
     setColor(e.target.value)
    }
  return (
    <section className='container'>
        <h4>Color Generator</h4>
        <form className='color-form' onSubmit={handleSubmit}>
            <input type="color" value={color} onChange={handleChange}/>
            <input type="text" value={color} placeholder='#f15025' onChange={handleChange}/>
            <button className='btn' type="submit" style={{background: color}}>Submit</button>
        </form>
    </section>
  )
}

export default Form