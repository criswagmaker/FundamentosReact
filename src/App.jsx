import "./App.css";
import React from "react";

import Primeiro from "./components/basicos/Primeiro";
import ComParametro from "./components/basicos/ComParametro";
import ComFilhos from "./components/basicos/ComFilhos";
import Card from "./components/layout/Card.jsx";
import Repeticao from "./components/basicos/Repeticao";
import Condicional from "./components/basicos/Condicional";
import CondicionalComIf from "./components/basicos/CondicionalComIf";
import Pai from "./components/comunicacao/direta/Pai";
import Super from "./components/comunicacao/indireta/Super";
import Input from "./components/form/Input";
import Contador from "./components/contador/Contador";
import Mega from "./components/mega/Mega";

export default (props) => (
  <div className="App">
    <h1>Fundamentos do React</h1>
    <div className="Cards">
      <Card titulo="#11 - Mega" color="#9D5C63">
        <Mega qtdDeNumeros={8}></Mega>
      </Card>
      <Card titulo="#10 - Contador" color="#9D5C63">
        <Contador passo={10} valor={100}></Contador>
      </Card>
      <Card titulo="#09 - Input" color="#9D5C63">
        <Input></Input>
      </Card>
      <Card titulo="#08 - Comunicação Indireta" color="#9D5C63">
        <Super></Super>
      </Card>
      <Card titulo="#07 - Comunicação Direta" color="#9D5C63">
        <Pai sobrenome="Hoffart"></Pai>
      </Card>
      <Card titulo="#06 - Condicional v2" color="#9D5C63">
        <CondicionalComIf numero={21}></CondicionalComIf>
      </Card>
      <Card titulo="#05 - Condicional v1" color="#9D5C63">
        <Condicional numero={10}></Condicional>
      </Card>
      <Card titulo="#04 - Repetição" color="#9D5C63">
        <Repeticao></Repeticao>
      </Card>
      <Card titulo="#03 - Componente com Filhos" color="#9D5C63">
        <ComFilhos>
          <ul>
            <li>Ana</li>
            <li>Carlos</li>
            <li>Bia</li>
            <li>Daniel</li>
          </ul>
        </ComFilhos>
      </Card>
      <Card titulo="#02 - Componente Com Parâmetro" color="#9D5C63">
        <ComParametro titulo="Esse é o título" subtitulo="Esse é o subtítulo" />
      </Card>
      <Card titulo="#01 - Primeiro Componente" color="#9D5C63">
        <Primeiro />
      </Card>
    </div>
  </div>
);
