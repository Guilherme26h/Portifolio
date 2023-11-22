import React from 'react'
import { apresentacao, formacao, experiencia, trabalhos } from '../utils/MainText';
import Author from '../images/perfil.jpg';
import style from './main.module.css'



const main = () => {
    return (
        <div className={style.container}>
            {/* parte do texto do site*/}
            <div className= {style.apresentacao}>
                <div><h1 className={style.fadeIn}>{apresentacao[0]}</h1></div>
                <div><h2>{apresentacao[1]}</h2></div>
                <div><h3>{apresentacao[2]}</h3></div>
                <div><h3>{apresentacao[3]}</h3></div>
                <div><h3>{apresentacao[4]}</h3></div>
                
            </div>
            <div>
                <div className="authorPhoto">
                    <img src= {Author}/>
                </div>
            </div>
        </div>
    )
}

export default main
