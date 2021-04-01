import React from "react";
import {
  FaFacebookF,
  FaGithub,
  FaPinterest,
  FaInstagram,
  FaLinkedin,
  FaRocket,
  
} from "react-icons/fa";
const Banner = () => {
  const [state] = React.useState({
    title: "Olá, sou o Diogo Miranda",
    text:
      "Desenvolvedor Front-end & Back-end​",
    image: "/images/main.svg",
  });
  return (
    <header className="header">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <div className="header__content">
              <div className="header__section">
                <h1>{state.title}</h1>
                <p>{state.text}</p>
                <ul className="header__ul">
                  <li>
                      <a href="https://www.instagram.com/diogomiranda.dev/" target="__blank"><FaInstagram className="headerIcon" /></a>
                  </li>
                  <li>
                      <a href="https://github.com/DiogoMiranda-dev" target="__blank"><FaGithub className="headerIcon" /></a>
                  </li>
                  <li>
                      <a href="https://www.linkedin.com/in/diogo-miranda-2233657a/" target="__blank"><FaLinkedin className="headerIcon" /></a>
                  </li>
                  <li>
                      <a href="https://www.facebook.com/diogo.s.miranda.5/?viewas=100000686899395" target="__blank"><FaFacebookF className="headerIcon" /></a>
                  </li>
                  <li>
                      <a href="https://br.pinterest.com/diogomiranda_dev/_saved/" target="__blank"><FaPinterest className="headerIcon" /></a>
                  </li>
                  <li>
                      <a href="https://app.rocketseat.com.br/me/diogosminfor-1602803876283" target="__blank"><FaRocket className="headerIcon" /></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="banner__img">
              <img src={state.image} alt="man" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Banner;
