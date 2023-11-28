import React, { Component } from 'react';
import Titlecomponent from '../components/titlecomponent/titlecomponent';
import Cardcomponent from '../components/cardcomponent/cardcomponent';
import style from './article.module.css';
import { formacao, github, projetosADS } from '../utils/ArticleText';
import Slider from 'react-slick';

export default class Article extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3
    };

    return (
      <div>
        <h1 className={style.article}>Formação</h1>

        <div className={style.right}>
          <Titlecomponent numero="1" profissao={formacao[1]} />
          <Slider className={style.carroucel} {...settings}>
            <div className={style.card1}>
              <Cardcomponent className={style.card4} titulo={"Para Mais Acesse"} descricao={github[1]} />
            </div>
            <div className={style.card1}>
              <Cardcomponent Classname={style.github} titulo={projetosADS[0]} descricao={projetosADS[1]} />
            </div>
            <div className={style.card2}>
              <Cardcomponent titulo={projetosADS[2]} descricao={projetosADS[3]} />
            </div>
            <div className={style.card3}>
              <Cardcomponent titulo={projetosADS[4]} descricao={projetosADS[5]} />
            </div>
            <div className={style.card4}>
              <Cardcomponent titulo={projetosADS[6]} descricao={projetosADS[7]} />
            </div>

          </Slider>
        </div>

        <div className={style.right}>
          <Titlecomponent numero="2" profissao={formacao[2]} />
        </div>
        <Slider className={style.carroucel} {...settings}>
            <div className={style.card1}>
              <Cardcomponent className={style.card4} titulo={"Para Mais Acesse"} descricao={github[1]} />
            </div>
            <div className={style.card1}>
              <Cardcomponent Classname={style.github} titulo={projetosADS[0]} descricao={projetosADS[1]} />
            </div>
            <div className={style.card2}>
              <Cardcomponent titulo={projetosADS[2]} descricao={projetosADS[3]} />
            </div>
            <div className={style.card3}>
              <Cardcomponent titulo={projetosADS[4]} descricao={projetosADS[5]} />
            </div>
            <div className={style.card4}>
              <Cardcomponent titulo={projetosADS[6]} descricao={projetosADS[7]} />
            </div>

          </Slider>

        <div className={style.right}>
          <Titlecomponent numero="3" profissao={formacao[3]} />
        </div>
        <Slider className={style.carroucel} {...settings}>
            <div className={style.card1}>
              <Cardcomponent className={style.card4} titulo={"Para Mais Acesse"} descricao={github[1]} />
            </div>
            <div className={style.card1}>
              <Cardcomponent Classname={style.github} titulo={projetosADS[0]} descricao={projetosADS[1]} />
            </div>
            <div className={style.card2}>
              <Cardcomponent titulo={projetosADS[2]} descricao={projetosADS[3]} />
            </div>
            <div className={style.card3}>
              <Cardcomponent titulo={projetosADS[4]} descricao={projetosADS[5]} />
            </div>
            <div className={style.card4}>
              <Cardcomponent titulo={projetosADS[6]} descricao={projetosADS[7]} />
            </div>

          </Slider>

        <div className={style.right}>
          <Titlecomponent numero="4" profissao={formacao[4]} />
        </div>
        <Slider className={style.carroucel} {...settings}>
            <div className={style.card1}>
              <Cardcomponent className={style.card4} titulo={"Para Mais Acesse"} descricao={github[1]} />
            </div>
            <div className={style.card1}>
              <Cardcomponent Classname={style.github} titulo={projetosADS[0]} descricao={projetosADS[1]} />
            </div>
            <div className={style.card2}>
              <Cardcomponent titulo={projetosADS[2]} descricao={projetosADS[3]} />
            </div>
            <div className={style.card3}>
              <Cardcomponent titulo={projetosADS[4]} descricao={projetosADS[5]} />
            </div>
            <div className={style.card4}>
              <Cardcomponent titulo={projetosADS[6]} descricao={projetosADS[7]} />
            </div>

          </Slider>
      </div>
    );
  }
};