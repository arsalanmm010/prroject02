import React from 'react';
import './Hello.css'

function Hello( {fname} ) {
  return <div>  
      <ul className='unlist'>
        <li>Learning react</li>
        <li>Adding unordered list</li>
      </ul>
      <ol className='olist'>
        <li>Pre req of react</li>
        <li>Html</li>
        <li>Basic css</li>
        <li>JS</li>
       </ol> 
       <h3>Created by {fname}</h3>
    </div>
}

export default Hello;
