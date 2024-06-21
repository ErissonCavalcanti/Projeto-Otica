import Image from 'next/image';
import Link from 'next/link';
import estilos from './Topo.module.css'
import logo from '/public/assets/logo.png'
export default function Topo() {
  return (
    <header className={estilos.cabecalho}>
      <div className={estilos.larguraTopo}>
        <Image className={estilos.logoCabecalho} src={logo}
          alt="imagem de um óculos à direita e o nome da ótica à esquerda" title="Óticas Vida" ></Image>
        <nav>
          <Link  className={estilos.link} href="#produtos" >PRODUTOS</Link>
          <Link  className={estilos.link} href="#sobre" >
            SOBRE
          </Link>
          <Link  className={estilos.link} href="#contato" >
            CONTATO
          </Link>
        </nav>
      </div>
    </header>
  );
}
