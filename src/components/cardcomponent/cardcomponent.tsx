import React from 'react'
import style from './cardcomponent.module.css';


const cardcomponent = (props : any) => {
  return (
    <div className={style.card}>
        <p className={style.titulo}>{props.titulo}</p>
        <p className={style.descricao}>{props.descricao}</p>
        <button>Clique e verifique</button>
    </div>

  );
}

export default cardcomponent
