import React from 'react'
import style from './footer.module.css';

const footer = () => {
  return (
    <div className={style.footer}>
      <div>
        <h1>Contatos:</h1>
        <p>email:</p>
      </div>
      <div>
        <h2>GitHub</h2>
        <p>Link:</p>
      </div>
      <div>
        <h2>Linkedin</h2>
        <p>Link:</p>
      </div>
    </div>
  )
}

export default footer
