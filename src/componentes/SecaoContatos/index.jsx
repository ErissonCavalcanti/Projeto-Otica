import Image from "next/image";
import estilos from "./SecaoContatos.module.css";
import local from "/public/assets/local.png";
import telefone from "/public/assets/telefone.png";
import email from "/public/assets/email.png";
import fb from "/public/assets/fb.png";
import ig from "/public/assets/ig.png";
import tt from "/public/assets/tt.png";

export default function SecaoContatos() {
  return (
    <section className={estilos.secaoContatos}>
      <div className={estilos.cabecalhoContatos}>
        <h2 id="contato">Fale Conosco</h2>
        <p>
          Não perca tempo, venha conhecer uma de nossas lojas ou entre em
          contato através de nossas redes sociais ou da central de atendimento.
        </p>
      </div>

      <div className={estilos.containerContatos}>
        <div className={estilos.containerCards}>
        <h3>Nossos Contatos</h3>
          <div className={estilos.cardContent}>
            <Image
              className={estilos.imagemCard}
              src={local}
              alt="local"
              title="Local"
            ></Image>
            <span>Nova Iguaçu, RJ</span>
          </div>
          <div className={estilos.cardContent}>
            <Image
              className={estilos.imagemCard}
              src={telefone}
              alt="telefone"
              title="Telefone"
            ></Image>
            <span>(21) 9999-9999</span>
          </div>
          <div className={estilos.cardContent}>
            <Image
              className={estilos.imagemCard}
              src={email}
              alt="email"
              title="Email"
            ></Image>
            <span>contato@oticavida.com</span>
          </div>
        </div>
        <div className={estilos.containerCards}>
          <h3>Nossas Redes Sociais</h3>
          <div className={estilos.cardContent}>
            <Image
              className={estilos.imagemCard}
              src={fb}
              alt="logo facebook"
              title="Facebook"
            ></Image>
            <span>/OticaVida</span>
          </div>
          <div className={estilos.cardContent}>
          
            <Image
              className={estilos.imagemCard}
              src={ig}
              alt="logo instagram"
              title="Instagram"
            ></Image>
            <span>@oticavidarj</span>
          </div>
          <div className={estilos.cardContent}>
            <Image
              className={estilos.imagemCard}
              src={tt}
              alt="logo twitter"
              title="Twitter"
            ></Image>
            <span>@oticavidarj</span>
          </div>
        </div>
      </div>
    </section>
  );
}
