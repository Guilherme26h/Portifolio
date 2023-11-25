import React from 'react'
import Titlecomponent from '../components/titlecomponent/titlecomponent';
import style from './article.module.css';
import { formacao } from '../utils/ArticleText';
const article = () => {
  return (
    <div>
      <h1 className={style.article}>Formação</h1>
      <div className={style.right}>
        <Titlecomponent numero = "1" profissao = {formacao[1]}/>
      </div>
      <div className={style.right}>
        <Titlecomponent numero = "2" profissao = {formacao[2]}/>
      </div>
      <div className={style.right}>
        <Titlecomponent numero = "3" profissao = {formacao[3]}/>
      </div>
      <div className={style.right}>
        <Titlecomponent numero = "4" profissao = {formacao[4]}/>
      </div>

    </div>
    
    
  )
}

export default article
