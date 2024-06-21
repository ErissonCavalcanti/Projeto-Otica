import estilos from "./SecaoSobre.module.css";
import Image from "next/image";
import loja from '/public/assets/loja.png';
import atendimento from '/public/assets/atendimento.png';
import classNames from 'classnames';

export default function SecaoSobre() {
  return (
    <section className={estilos.secaoSobre}>
    <div className={estilos.larguraTexto}>
          <h2 id="sobre">QUEM SOMOS NÓS</h2>
          <p>
            Fundada em 2001, em Nova Iguaçu - Rio de Janeiro, a Óticas vida iniciou
            suas atividades focada no atendimento ao público de renda mais baixa,
            sempre com o objetivo de proporcionar ao cliente bom atendimento,
            qualidade e preço baixo.
          </p>
    </div>

      <div className={estilos.containerSobre}>
        <div className={estilos.containerCard}>
          <Image className={estilos.imgSobre} src={loja}></Image>
        </div>
        <div className={classNames(estilos.containerCard, 'estilos.textoSobre')}>
            <h3>NOSSAS FILIAIS</h3>
            <p>Hoje temos mais de 20 filiais pelo Brasil e na América</p>
        </div>
        <div className={classNames(estilos.containerCard, 'estilos.textoSobre')}>
            <h3>ATENDIMENTO FLEXÍVEL</h3>
            <p>Nossa equipe possui é treinada para te atender</p>
        </div>
        <div className={estilos.containerCard}>
            <Image className={estilos.imgSobre} src={atendimento}></Image>
        </div>
        
      </div>
    </section>
  )
}
