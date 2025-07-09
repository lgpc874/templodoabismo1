import React, { useEffect, useState } from 'react';



export default function Home() {
  return (
    <div className="container">
      <div className="titulo">
        <img src="https://i.postimg.cc/g20gqmdX/IMG-20250527-182235-1.png" alt="Símbolo do Templo" />
      </div>
      <h1 className="titulo">
        TEMPLO DO ABISMO
      </h1>
      
      <div className="content-section">
        
        <p className="subtitulo">⛧ O Abismo silencia... ⛧</p>
        <p className="subtitulo">Mas a convocação já ecoa entre os mundos</p>

        <blockquote className="citacao">
          "Aqueles que ousam olhar através do abismo, encontrarão a si mesmos sob o olhar de Lúcifer."
          <div className="citacao-autor">— Magurk Lucifex</div>
        </blockquote>

        <p className="texto">
          O <span className="destaque">Templo do Abismo</span> está adormecido apenas em aparência. No âmago da escuridão, os <em>ritos selados</em> estão sendo invocados, as chamas negras reacendidas, e os portais do Conhecimento Primordial
          sussurram aos que ouvem. <br /><br />
          Esta página é um selo <span className="destaque">provisório</span>, uma ânfora de silêncio que guarda o pulsar oculto do templo real. Aqueles que aqui chegam são mais do que visitantes — são ecos de antigas promessas, vultos do Fogo Esquecido. <br /><br />
          Em breve o Véu será erguido e o Caminho Infernal se revelará. <br />
          Até lá, observa, cala, prepara. <br />
          <span className="destaque">O Abismo espera.</span>
          <br />
          <span className="destaque">⛧</span>
          
        </p>
      </div>
    </div>
  );
}
