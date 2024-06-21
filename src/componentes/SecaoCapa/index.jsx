import estilos from "./SecaoCapa.module.css";

export default function SecaoCapa() {
  return (
    <section className={estilos.secaoCapa}>
      <img src="/assets/capa.png" alt="imagem da Capa" title="Imagem Banner" />

      <div className={estilos.textoCapa}>
        <p>Preços baixos em</p>
        <h1>Óculos de Grau e De Sol</h1>
        <p>Você só encontra aqui</p>
      </div>
      
    </section>
  );
}
