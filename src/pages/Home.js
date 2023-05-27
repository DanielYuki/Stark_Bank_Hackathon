import React from "react";
import forms from "../forms.png";
import clock from "../clock.png";
import computer from "../computer.png";

export default function Home() {
  return (
    <>
      <h1 className="title">Conheça a StarkLoan</h1>

      <div className="pagesLeft">
        <div>
          <h2 className="subtitleLeft">O Financiamento inteligente</h2>

          <div className="textLeft">
            <p>O empréstimo do futuro chegou e sem burocracia,</p>
            <p>aplique instantaneamente e aproveite o emprestimo</p>
            <p>mais rápido do mercado</p>
          </div>
        </div>

        <div className="sideImage"></div>
      </div>

      <div className="pagesRight">
        <div className="sideImage">
          <img width="200vw" src={forms} alt="forms" />
        </div>

        <div>
          <h2 className="subtitleRight">Formulário simples</h2>

          <div className="textRight">
            <p>Solicitamos apenas as informações essenciais</p>
            <p>dispensando pilhas de papel e economizando seu</p>
            <p>tempo</p>
          </div>
        </div>
      </div>

      <div className="pagesLeft">
        <div>
          <h2 className="subtitleLeft">Aprovação rápida</h2>

          <div className="textLeft">
            <p>Sistema de validação automatizado que garante</p>
            <p>maior agilidade no processo de validação de dados</p>
            <p>e fluxo de aprovações</p>
          </div>
        </div>
        <div className="sideImage">
          <img width="200vw" src={clock} alt="clock" />
        </div>
      </div>

      <div className="pagesRight">
        <div className="sideImage">
          <img width="200px" src={computer} alt="computer" />
        </div>

        <div>
          <h2 className="subtitleRight">Implementação moderna</h2>

          <div className="textRight">
            <p>Trazendo toda a tecnologia que você merece</p>

            <p>Um Banco de verdade para pessoas de verdade</p>
          </div>
        </div>
      </div>
    </>
  );
}
