import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import Icon from "@identitybuilding/idb-react-iconlib";
import "../assets/css/Navigation.css";

import { toggleLoginScreen } from "../actions/AccountAction"

const Navigation = (props) => {
  const [networks, setNetworks] = useState(false);

  const lang = useSelector((state) => state.general.lang);
  const translate = useSelector((state) => state.general.translate);
  const { loginScreen, accountData } = useSelector((state) => state.account);
  const dispatch = useDispatch()

  const LogoSA = require(`../assets/imgs/logos/logo_shoppaworld.svg`).default;
  const LogoSA_Invert = require("../assets/imgs/logos/logo_shoppaworld-invert.svg").default;
  const LogoCN = require(`../assets/imgs/logos/cn/logo_cn_${lang}.svg`);
  const LogoCN_Invert = require(`../assets/imgs/logos/cn/logo_cn_invert_${lang}.svg`);
  const LogoESN = require(`../assets/imgs/logos/esn/logo_esn_${lang}.svg`);
  const LogoESN_Invert = require(`../assets/imgs/logos/esn/logo_esn_invert_${lang}.svg`);
  const LogoPL = require(`../assets/imgs/logos/pl/logo_pl_${lang}.svg`);
  const LogoPL_Invert = require(`../assets/imgs/logos/pl/logo_pl_invert_${lang}.svg`);

  let networkFunction = "";

  let path = window.location.pathname;

  const timeoutFunction = () => {
    networkFunction = setTimeout(() => {
      setNetworks(false);
    }, 750);
  };

  return (
    <nav
      className={`${props.page} ${networks ? "active" : ""}`}
      id={props.Zindex ? "active" : ""}
      onMouseLeave={() => networks && timeoutFunction()}
      onMouseOverCapture={() => networks && clearTimeout(networkFunction)}
      style={{
        boxShadow: props.background ? "0 0 10px rgba(0,0,0,.1)" : "none",
      }}
    >
      {/* Networks navigation */}
      <div className="networks">
        <a
          className="osn networkLogo"
          href={
            lang === "nl"
              ? "https://100procentlokaal.be"
              : "https://www.100pourcentlocale.be"
          }
          rel="noopener noreferrer"
          target="_blank"
        >
          <img
            className="logo"
            src={LogoPL_Invert}
            alt={translate("pl_alt")}
          />
          <img
            className="logo logoOriginal"
            src={LogoPL}
            alt={translate("pl_alt")}
          />
        </a>
        <a
          className="osn networkLogo"
          href={
            lang === "nl"
              ? "https://ondernemersnetwerk.be"
              : "https://www.reseauentrepreneurs.be"
          }
          rel="noopener noreferrer"
          target="_blank"
        >
          <img
            className="logo"
            src={LogoESN_Invert}
            alt={translate("esn_alt")}
          />
          <img
            className="logo logoOriginal"
            src={LogoESN}
            alt={translate("esn_alt")}
          />
        </a>
        <a
          className="cn networkLogo"
          href="https://catalogusnetwerk.be"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img
            className="logo"
            src={LogoCN_Invert}
            alt={translate("cn_alt")}
          />
          <img
            className="logo logoOriginal"
            src={LogoCN}
            alt={translate("cn_alt")}
          />
        </a>
        {/* <a
          className="pn networkLogo"
          href="https://catalogusnetwerk.be"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img
            className="logo"
            src={LogoPN_Invert}
            alt={translate("pn_alt")}
          />
          <img
            className="logo logoOriginal"
            src={LogoPN}
            alt={translate("pn_alt")}
          />
        </a> */}
        <a
          className="sa networkLogo"
          href="https://shoppa.world"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img
            src={LogoSA_Invert}
            className="logo"
            alt="Logo ShoppA.world"
          />
          <img
            className="logo logoOriginal"
            src={LogoSA}
            alt="Logo ShoppA.world"
          />
        </a>
      </div>

      {/* Navigation menu */}
      <div className="nav_menu">
        {/* Navigation logo */}
        {props.page !== 'homepage' &&
          <Link className="navLogo" to="/">
            <img
              height="25px"
              width="25px"
              alt={translate("esn_alt")}
              className="logo logoOriginal"
              src={require(`../assets/imgs/logos/cn/catalnetwerk-h-${lang}.svg`)}
            />
          </Link>}


        {/* Navigation menu items */}
        <div className="nav_buttons">
          {/* Button to open the networks menu */}
          {accountData ?
            <div className="nav_button my_company">{accountData.username}</div>
            :
            <a className="nav_button my_company" rel="noreferrer noopener" target="_blank" onClick={() => dispatch(toggleLoginScreen(!loginScreen))} >
              {translate("log_in")}
            </a>
          }

          <div className={`nav_button network ${networks ? "active" : ""}`} onClick={() => setNetworks(!networks)} >
            {translate("networks")}
          </div>

          {/* Language dropdownmenu */}
          <div className="nav_button">
            {lang === "nl"
              ? "NL"
              : lang === "fr"
                ? "FR"
                : "EN"}
            <div className="lang_options">
              {lang === "nl" ? (
                <a
                  href={`https://www.reseaucatalogue.be${path.replace('zoeken', 'chercher').replace('pagina', 'page')}`}
                >
                  FR
                </a>
              ) : (
                <a
                  href={`https://www.catalogusnetwerk.be${path.replace('chercher', 'zoeken').replace('page', 'pagina')}`}
                >
                  NL
                </a>)}

              {/* {lang === "en" ? <a href="https://reseauentrepreneurs.be">Français</a>
								: <a href="https://entrepreneursnetwork.be">English</a>} */}
            </div>
            <Icon name="ArrowDown" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
