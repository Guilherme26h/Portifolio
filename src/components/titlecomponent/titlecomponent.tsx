import React from 'react'

import style from './titlecomponent.module.css';

const TitleComponent = (props : any) => {
    return (
        <div className={style.listaformacoes}>
            <div className={style.cardformacao}>
                <div className={style.number}>
                    <h2>{props.numero}</h2>
                </div>
                <div className={style.primeira}>
                    <h2>{props.profissao}</h2>
                </div>
            </div>
        </div>
    )
}

export default TitleComponent
