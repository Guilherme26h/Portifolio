import React from 'react'
import style from './article.module.css';
import { formacao } from '../utils/ArticleText';

const article = () => {
  return (
    <div>
      <div className={style.article}>
        <h1>{formacao[0]}</h1>
      </div>
      <div className={style.listaformacoes}>
        <div className={style.cardformacao}>
          <div className={style.number}>
            <h2>1</h2>
          </div>
          <div className={style.primeira}>
            <h2>{formacao[1]}</h2>
          </div>
        </div>
        <div className={style.cardformacao2}>
          <div className={style.number}>
            <h2>2</h2>
          </div>
          <div className={style.cardformacao2}>
            <h2>{formacao[2]}</h2>
          </div>

        </div>
        <div className={style.cardformacao}>
          <div className={style.number}>
            <h2>3</h2>
          </div>
          <div className={style.cardformacao}>
            <h2>{formacao[3]}</h2>
          </div>

        </div>
        <div className={style.cardformacao2}>
          <div className={style.number}>
            <h2>4</h2>
          </div>
          <div className={style.cardformacao2}>
            <h2>{formacao[4]}</h2>
          </div>
        </div>

      </div>
    </div>
  )
}

export default article
