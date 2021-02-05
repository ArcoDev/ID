import React, { useContext } from "react";
//hoja de estilo
import "./process.scss";
//estilo del boton general
import Button from "./../general/Button";
//img de los divs
import strategy from "./../../assets/img/Social strategy-cuate 1.svg";
import design from "./../../assets/img/Design tools-cuate 1.svg";
import marketing from "./../../assets/img/Mobile Marketing-pana 1.svg";
import analysis from "./../../assets/img/Analysis-cuate 1.svg";
import toReturn from "./../../assets/img/return.svg";
import arrowLeft from "./../../assets/img/arrowLeft.svg";
import arowCircle from "./../../assets/img/arrowCircle.svg";
//traduccion
import { LangContext } from "../../context/LangProvider";

const Process = () => {
  const { fileTexts } = useContext(LangContext);
  const expandir = (column) => {
    column.classList.toggle("full");
    column.classList.remove("empty");
    const all = document.getElementsByClassName("process");
    const rest = Array.from(all).filter((item) => item !== column);
    rest.map((i) => {
      i.classList.remove("full");
      i.classList.toggle("empty");
    });
  };
  const remover = () => {
    const all = document.querySelectorAll(".process");
    all.forEach((element) => {
      element.classList.remove("full");
      element.classList.remove("empty");
    });
  };
  const animation = () => {
    alert("Tendre vida proximamente");
  };

  return (
    <div className="container-process">
      <div className="process estrategico">
        <div className="inital-display">
          <img
            src={strategy}
            alt={fileTexts.process.title[0]}
            className="imgMov"
          />
          <div
            onClick={() => {
              const column = document.querySelector(".estrategico");
              expandir(column);
            }}
          >
            {fileTexts.process.title[0]}
            <i class="fas fa-chevron-down"></i>
          </div>

          <Button
            text={fileTexts.process.btnInfo}
            classes="rounded-btn"
            onClick={() => {
              const column = document.querySelector(".estrategico");
              expandir(column);
            }}
          />
          <div className="arrowCircle">
            <img src={arowCircle} />
          </div>
        </div>

        <div className="process-content">
          <div className="column-1">
            <div className="regresar" onClick={() => remover()}>
              <img
                className="leftMov"
                src={toReturn}
                alt={fileTexts.process.toReturn}
                title={fileTexts.process.toReturn}
              />
              <h4 className="txtOrg">{fileTexts.process.toReturn}</h4>
              <h4 className="txtMov">{fileTexts.process.title[1]}</h4>
              <i class="fas fa-chevron-right"></i>
            </div>
          </div>
          <div className="column-2">
            <div className="titlePlan">
              <img
                src={analysis}
                alt={fileTexts.process.title[0]}
                title={fileTexts.process.title[0]}
              />
              <h2>{fileTexts.process.title[0]}</h2>
            </div>
            <p>{fileTexts.process.descriptionPlan}</p>
            <svg
              width="320"
              height="56"
              viewBox="0 0 388 56"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_d)">
                <path
                  d="M26 48.0002L4.48279 37.2415V10.7588L26 21.5174V48.0002Z"
                  fill="#434C6D"
                />
                <path
                  d="M26 48.0002L47.5172 37.2415V10.7588L26 21.5174V48.0002Z"
                  fill="#556080"
                />
                <path
                  d="M4.48279 10.7586L25.1724 0L47.5173 10.7586L26 21.5172L4.48279 10.7586Z"
                  fill="#7383BF"
                />
                <path
                  d="M24.1541 14.9195H27.8501L34.3061 32.1035H30.7301L29.3141 27.9995H22.6901L21.2741 32.1035H17.6981L24.1541 14.9195ZM28.2581 25.0235L26.7221 20.7275L26.0981 18.6395H25.9061L25.2821 20.7275L23.7461 25.0235H28.2581Z"
                  fill="white"
                />
              </g>
              <g filter="url(#filter1_d)">
                <path
                  d="M110 48.0002L88.4828 37.2415V10.7588L110 21.5174V48.0002Z"
                  fill="#434C6D"
                />
                <path
                  d="M110 48.0002L131.517 37.2415V10.7588L110 21.5174V48.0002Z"
                  fill="#556080"
                />
                <path
                  d="M88.4828 10.7586L109.172 0L131.517 10.7586L110 21.5172L88.4828 10.7586Z"
                  fill="#7383BF"
                />
                <path
                  d="M104.181 14.9195H110.901C111.637 14.9195 112.325 15.0395 112.965 15.2795C113.605 15.5035 114.157 15.8235 114.621 16.2395C115.101 16.6395 115.477 17.1115 115.749 17.6555C116.021 18.1995 116.157 18.7835 116.157 19.4075C116.157 20.3195 115.933 21.0875 115.485 21.7115C115.053 22.3195 114.509 22.7835 113.853 23.1035V23.2955C114.733 23.6155 115.437 24.1195 115.965 24.8075C116.509 25.4795 116.781 26.3195 116.781 27.3275C116.781 28.0635 116.629 28.7275 116.325 29.3195C116.037 29.8955 115.637 30.3915 115.125 30.8075C114.613 31.2235 114.013 31.5435 113.325 31.7675C112.653 31.9915 111.925 32.1035 111.141 32.1035H104.181V14.9195ZM110.661 21.9275C111.413 21.9275 111.989 21.7275 112.389 21.3275C112.805 20.9115 113.013 20.4235 113.013 19.8635C113.013 19.3035 112.813 18.8235 112.413 18.4235C112.013 18.0235 111.461 17.8235 110.757 17.8235H107.421V21.9275H110.661ZM111.021 29.1275C111.837 29.1275 112.461 28.9275 112.893 28.5275C113.325 28.1115 113.541 27.5835 113.541 26.9435C113.541 26.3035 113.317 25.7755 112.869 25.3595C112.437 24.9275 111.789 24.7115 110.925 24.7115H107.421V29.1275H111.021Z"
                  fill="white"
                />
              </g>
              <g filter="url(#filter2_d)">
                <path
                  d="M194 48.0002L172.483 37.2415V10.7588L194 21.5174V48.0002Z"
                  fill="#434C6D"
                />
                <path
                  d="M194 48.0002L215.517 37.2415V10.7588L194 21.5174V48.0002Z"
                  fill="#556080"
                />
                <path
                  d="M172.483 10.7586L193.172 0L215.517 10.7586L194 21.5172L172.483 10.7586Z"
                  fill="#7383BF"
                />
                <path
                  d="M201.939 29.3435C201.091 30.3675 200.091 31.1515 198.939 31.6955C197.787 32.2235 196.499 32.4875 195.075 32.4875C193.795 32.4875 192.603 32.2555 191.499 31.7915C190.411 31.3275 189.467 30.6955 188.667 29.8955C187.867 29.0955 187.235 28.1515 186.771 27.0635C186.307 25.9595 186.075 24.7755 186.075 23.5115C186.075 22.2475 186.307 21.0715 186.771 19.9835C187.235 18.8795 187.867 17.9275 188.667 17.1275C189.467 16.3275 190.411 15.6955 191.499 15.2315C192.603 14.7675 193.795 14.5355 195.075 14.5355C196.451 14.5355 197.659 14.7755 198.699 15.2555C199.755 15.7355 200.691 16.4315 201.507 17.3435L199.227 19.5515C198.715 18.9595 198.123 18.4875 197.451 18.1355C196.795 17.7835 196.011 17.6075 195.099 17.6075C194.299 17.6075 193.547 17.7515 192.843 18.0395C192.139 18.3115 191.523 18.7035 190.995 19.2155C190.483 19.7275 190.075 20.3515 189.771 21.0875C189.467 21.8075 189.315 22.6155 189.315 23.5115C189.315 24.4075 189.467 25.2235 189.771 25.9595C190.075 26.6795 190.483 27.2955 190.995 27.8075C191.523 28.3195 192.139 28.7195 192.843 29.0075C193.547 29.2795 194.299 29.4155 195.099 29.4155C196.059 29.4155 196.907 29.2235 197.643 28.8395C198.395 28.4395 199.059 27.8795 199.635 27.1595L201.939 29.3435Z"
                  fill="white"
                />
              </g>
              <g filter="url(#filter3_d)">
                <path
                  d="M278 48.0002L256.483 37.2415V10.7588L278 21.5174V48.0002Z"
                  fill="#434C6D"
                />
                <path
                  d="M278 48.0002L299.517 37.2415V10.7588L278 21.5174V48.0002Z"
                  fill="#556080"
                />
                <path
                  d="M256.483 10.7586L277.172 0L299.517 10.7586L278 21.5172L256.483 10.7586Z"
                  fill="#7383BF"
                />
                <path
                  d="M271.103 14.9195H276.911C278.271 14.9195 279.495 15.1275 280.583 15.5435C281.671 15.9595 282.599 16.5515 283.367 17.3195C284.135 18.0715 284.719 18.9755 285.119 20.0315C285.535 21.0875 285.743 22.2475 285.743 23.5115C285.743 24.7915 285.535 25.9595 285.119 27.0155C284.719 28.0715 284.135 28.9755 283.367 29.7275C282.599 30.4795 281.671 31.0635 280.583 31.4795C279.495 31.8955 278.271 32.1035 276.911 32.1035H271.103V14.9195ZM276.767 29.0315C277.711 29.0315 278.543 28.9035 279.263 28.6475C279.983 28.3755 280.583 27.9995 281.063 27.5195C281.543 27.0395 281.903 26.4635 282.143 25.7915C282.383 25.1035 282.503 24.3435 282.503 23.5115C282.503 22.6795 282.383 21.9275 282.143 21.2555C281.903 20.5675 281.543 19.9835 281.063 19.5035C280.583 19.0235 279.983 18.6555 279.263 18.3995C278.543 18.1275 277.711 17.9915 276.767 17.9915H274.343V29.0315H276.767Z"
                  fill="white"
                />
              </g>
              <g filter="url(#filter4_d)">
                <path
                  d="M362 48.0002L340.483 37.2415V10.7588L362 21.5174V48.0002Z"
                  fill="#434C6D"
                />
                <path
                  d="M362 48.0002L383.517 37.2415V10.7588L362 21.5174V48.0002Z"
                  fill="#556080"
                />
                <path
                  d="M340.483 10.7586L361.172 0L383.517 10.7586L362 21.5172L340.483 10.7586Z"
                  fill="#7383BF"
                />
                <path
                  d="M360.03 17.9915V21.9755H366.918V25.0475H360.03V29.0315H367.686V32.1035H356.79V14.9195H367.686V17.9915H360.03Z"
                  fill="white"
                />
              </g>
              <path d="M77 23L73 19V22H58V24H73V27L77 23Z" fill="white" />
              <path d="M162 23L158 19V22H143V24H158V27L162 23Z" fill="white" />
              <path d="M247 23L243 19V22H228V24H243V27L247 23Z" fill="white" />
              <path d="M332 23L328 19V22H313V24H328V27L332 23Z" fill="white" />
              <defs>
                <filter
                  id="filter0_d"
                  x="-2"
                  y="0"
                  width="56"
                  height="56"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  />
                  <feOffset dy="4" />
                  <feGaussianBlur stdDeviation="2" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow"
                    result="shape"
                  />
                </filter>
                <filter
                  id="filter1_d"
                  x="82"
                  y="0"
                  width="56"
                  height="56"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  />
                  <feOffset dy="4" />
                  <feGaussianBlur stdDeviation="2" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow"
                    result="shape"
                  />
                </filter>
                <filter
                  id="filter2_d"
                  x="166"
                  y="0"
                  width="56"
                  height="56"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  />
                  <feOffset dy="4" />
                  <feGaussianBlur stdDeviation="2" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow"
                    result="shape"
                  />
                </filter>
                <filter
                  id="filter3_d"
                  x="250"
                  y="0"
                  width="56"
                  height="56"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  />
                  <feOffset dy="4" />
                  <feGaussianBlur stdDeviation="2" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow"
                    result="shape"
                  />
                </filter>
                <filter
                  id="filter4_d"
                  x="334"
                  y="0"
                  width="56"
                  height="56"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  />
                  <feOffset dy="4" />
                  <feGaussianBlur stdDeviation="2" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
          </div>
          <div className="column-3">
            <div className="btnQuote">
              <Button text={fileTexts.process.btnQuote} classes="rounded-btn" />
            </div>
            <h2>{fileTexts.process.services}</h2>
            <div className="list">
              <ul>
                <li>{fileTexts.process.listPlan[0]}</li>
                <li>{fileTexts.process.listPlan[1]}</li>
                <li>{fileTexts.process.listPlan[2]}</li>
                <li>{fileTexts.process.listPlan[3]}</li>
                <li>{fileTexts.process.listPlan[4]}</li>
                <li>{fileTexts.process.listPlan[5]}</li>
                <li>{fileTexts.process.listPlan[6]}</li>
                <li>{fileTexts.process.listPlan[7]}</li>
              </ul>
              <ul>
                <li>{fileTexts.process.listPlan[8]}</li>
                <li>{fileTexts.process.listPlan[9]}</li>
                <li>{fileTexts.process.listPlan[10]}</li>
                <li>{fileTexts.process.listPlan[11]}</li>
                <li>{fileTexts.process.listPlan[12]}</li>
                <li>{fileTexts.process.listPlan[13]}</li>
                <li>{fileTexts.process.listPlan[14]}</li>
              </ul>
            </div>
          </div>
          <div className="column-4">
            <div className="next" onClick={() => animation()}>
              <h4 onClick={() => remover()}>{fileTexts.process.title[1]}</h4>
              <div onClick={() => remover()} className="img arrow"></div>
            </div>
          </div>
        </div>
      </div>
      {/* Process diseno */}
      <div className="process diseno">
        <div className="inital-display">
          <img
            src={design}
            alt={fileTexts.process.title[1]}
            className="imgMov"
          />
          <div
            onClick={() => {
              const column = document.querySelector(".diseno");
              expandir(column);
            }}
          >
            {fileTexts.process.title[1]}
            <i class="fas fa-chevron-down"></i>
          </div>
          <Button
            text={fileTexts.process.btnInfo}
            classes="rounded-btn"
            onClick={() => {
              const column = document.querySelector(".diseno");

              expandir(column);
            }}
          />
          <div className="arrowCircle">
            <img src={arowCircle} />
          </div>
        </div>

        <div className="process-content">
          <div className="column-1">
            <div className="regresar">
              <img src={arrowLeft} className="leftMov" />
              <h4>{fileTexts.process.title[0]}</h4>
              <i class="fas fa-chevron-right"></i>
            </div>
          </div>
          <div className="column-2">
            <div className="titlePlan">
              <img
                src={design}
                alt={fileTexts.process.title[1]}
                title={fileTexts.process.title[1]}
              />
              <h2>{fileTexts.process.title[1]}</h2>
            </div>
            <p>{fileTexts.process.descriptionDesign[0]}</p>
            <p>{fileTexts.process.descriptionDesign[1]}</p>
            <div className="imgDesign">
              <div className="icons marvel"></div>
              <div className="icons figma"></div>
              <div className="icons adobe"></div>
              <div className="icons react"></div>
              <div className="icons javascript"></div>
              <div className="icons wordpress"></div>
              <div className="icons shopify"></div>
              <div className="icons reloj"></div>
            </div>
          </div>
          <div className="column-3">
            <div className="btnQuote">
              <Button text={fileTexts.process.btnQuote} classes="rounded-btn" />
            </div>
            <h2>{fileTexts.process.services}</h2>
            <div className="list">
              <ul>
                <li>{fileTexts.process.listDesign[0]}</li>
                <li>{fileTexts.process.listDesign[1]}</li>
                <li>{fileTexts.process.listDesign[2]}</li>
                <li>{fileTexts.process.listDesign[3]}</li>
                <li>{fileTexts.process.listDesign[4]}</li>
                <li>{fileTexts.process.listDesign[5]}</li>
                <li>{fileTexts.process.listDesign[6]}</li>
                <li>{fileTexts.process.listDesign[7]}</li>
                <li>{fileTexts.process.listDesign[8]}</li>
                <li>{fileTexts.process.listDesign[9]}</li>
              </ul>
              <ul>
                <li>{fileTexts.process.listDesign[10]}</li>
                <li>{fileTexts.process.listDesign[11]}</li>
                <li>{fileTexts.process.listDesign[12]}</li>
                <li>{fileTexts.process.listDesign[13]}</li>
                <li>{fileTexts.process.listDesign[14]}</li>
                <li>{fileTexts.process.listDesign[15]}</li>
                <li>{fileTexts.process.listDesign[16]}</li>
                <li>{fileTexts.process.listDesign[17]}</li>
                <li>{fileTexts.process.listDesign[18]}</li>
              </ul>
            </div>
          </div>
          <div className="column-4">
            <div className="next" onClick={() => remover()}>
              <h4 onClick={() => animation()}>{fileTexts.process.title[2]}</h4>
              <div onClick={() => animation()} className="img arrow"></div>
            </div>
          </div>
        </div>
      </div>
      {/* Process marketing */}
      <div className="process marketing">
        <div className="inital-display">
          <img
            src={marketing}
            alt={fileTexts.process.title[2]}
            className="imgMov"
          />
          <div
            onClick={() => {
              const column = document.querySelector(".marketing");
              expandir(column);
            }}
          >
            {fileTexts.process.title[2]}
            <i class="fas fa-chevron-down"></i>
          </div>
          <Button
            text={fileTexts.process.btnInfo}
            classes="rounded-btn"
            onClick={() => {
              const column = document.querySelector(".marketing");

              expandir(column);
            }}
          />
          <div className="arrowCircle">
            <img src={arowCircle} />
          </div>
        </div>

        <div className="process-content">
          <div className="column-1">
            <div className="regresar">
              <img src={arrowLeft} className="leftMov" />
              <h4>{fileTexts.process.title[1]}</h4>
              <i class="fas fa-chevron-right"></i>
            </div>
          </div>
          <div className="column-2">
            <div className="titlePlan">
              <img
                src={marketing}
                alt={fileTexts.process.title[2]}
                title={fileTexts.process.title[2]}
              />
              <h2>{fileTexts.process.title[2]}</h2>
            </div>
            <p>{fileTexts.process.descriptionAnalysis}</p>
            <div className="imgDesign">
              <div className="icons face"></div>
              <div className="icons instagram"></div>
              <div className="icons linkedin"></div>
              <div className="icons gogle"></div>
              <div className="icons pintirest"></div>
              <div className="icons twitter"></div>
              <div className="icons youtube"></div>
            </div>
            <div className="imgMark">
              <div className="icons2 hubspot"></div>
              <div className="icons2 campa"></div>
              <div className="icons2 espresso"></div>
            </div>
          </div>
          <div className="column-3">
            <div className="btnQuote">
              <Button text={fileTexts.process.btnQuote} classes="rounded-btn" />
            </div>
            <h2>{fileTexts.process.services}</h2>
            <div className="list">
              <ul>
                <li>{fileTexts.process.listMarketing[0]}</li>
                <li>{fileTexts.process.listMarketing[1]}</li>
                <li>{fileTexts.process.listMarketing[2]}</li>
                <li>{fileTexts.process.listMarketing[3]}</li>
                <li>{fileTexts.process.listMarketing[4]}</li>
                <li>{fileTexts.process.listMarketing[5]}</li>
                <li>{fileTexts.process.listMarketing[6]}</li>
                <li>{fileTexts.process.listMarketing[7]}</li>
              </ul>
              <ul>
                <li>{fileTexts.process.listMarketing[8]}</li>
                <li>{fileTexts.process.listMarketing[9]}</li>
                <li>{fileTexts.process.listMarketing[10]}</li>
                <li>{fileTexts.process.listMarketing[11]}</li>
                <li>{fileTexts.process.listMarketing[12]}</li>
                <li>{fileTexts.process.listMarketing[13]}</li>
                <li>{fileTexts.process.listMarketing[14]}</li>
              </ul>
            </div>
          </div>
          <div className="column-4">
            <div className="next" onClick={() => animation()}>
              <h4 onClick={() => remover()}>{fileTexts.process.title[3]}</h4>
              <div onClick={() => remover()} className="img arrow"></div>
            </div>
          </div>
        </div>
      </div>
      {/* Process analisis */}
      <div className="process analisis">
        <div className="inital-display">
          <img
            className="analisis imgMov"
            src={analysis}
            alt={fileTexts.process.title[3]}
          />
          <div
            onClick={() => {
              const column = document.querySelector(".analisis");
              expandir(column);
            }}
          >
            {fileTexts.process.title[3]}
            <i class="fas fa-chevron-down"></i>
          </div>
          <Button
            text={fileTexts.process.btnInfo}
            classes="rounded-btn"
            onClick={() => {
              const column = document.querySelector(".analisis");

              expandir(column);
            }}
          />
        </div>
        <div className="process-content">
          <div className="column-1">
            <div className="regresar">
              <img
                className="leftMov"
                src={arrowLeft}
                alt={fileTexts.process.title[2]}
                title={fileTexts.process.title[2]}
              />
              <h4>{fileTexts.process.title[2]}</h4>
              <i class="fas fa-chevron-right"></i>
            </div>
          </div>
          <div className="column-2">
            <div className="titlePlan">
              <img
                src={analysis}
                alt={fileTexts.process.title[3]}
                title={fileTexts.process.title[3]}
              />
              <h2>{fileTexts.process.title[3]}</h2>
            </div>
            <p>{fileTexts.process.descriptionAnalysis}</p>
            <div className="imgAnaly">
              <div className="icons3 cyfe"></div>
              <div className="icons3 optimize"></div>
              <div className="icons3 excel"></div>
              <div className="icons3 analyt"></div>
            </div>
          </div>
          <div className="column-3">
            <div className="btnQuote">
              <Button text={fileTexts.process.btnQuote} classes="rounded-btn" />
            </div>
            <h2>{fileTexts.process.services}</h2>
            <div className="list">
              <ul>
                <li>{fileTexts.process.listAnalysis[0]}</li>
                <li>{fileTexts.process.listAnalysis[1]}</li>
                <li>{fileTexts.process.listAnalysis[2]}</li>
                <li>{fileTexts.process.listAnalysis[3]}</li>
                <li>{fileTexts.process.listAnalysis[4]}</li>
                <li>{fileTexts.process.listAnalysis[5]}</li>
              </ul>
              <ul>
                <li>{fileTexts.process.listAnalysis[6]}</li>
                <li>{fileTexts.process.listAnalysis[7]}</li>
                <li>{fileTexts.process.listAnalysis[8]}</li>
                <li>{fileTexts.process.listAnalysis[9]}</li>
                <li>{fileTexts.process.listAnalysis[10]}</li>
              </ul>
            </div>
          </div>
          <div className="column-4">
            <div className="next ret" onClick={() => animation()}>
              <h4 className="txtOrg">{fileTexts.process.start}</h4>
              <h4 onClick={() => remover()} className="txtMov">
                {fileTexts.process.close}
              </h4>
              <div onClick={() => remover()} className="img return"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Process;
