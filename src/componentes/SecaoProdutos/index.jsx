import estilos from './SecaoProdutos.module.css';

export default function SecaoProdutos(){
    return(

        <section  className={estilos.containerProdutos}>
            <h2 id='produtos'>
                Nossos Produtos
            </h2>
            <p>
                Trabalhamos com óculos de grau, óculos de sol, lentes transition nos modelos masculino, feminino e infantil.
            </p>
            <p> 
                Todos os nossos preços são acessíveis e contam com a melhor qualidade do mercado.
            </p>

            <div className={estilos.containerOculos}>

                <div className={estilos.containerCards}>
                    <h3>Óculos de Grau</h3>
                    <img src="/assets/oculos01.png" alt="óculos normal" title='Óculos de Grau' />
                    <p>R$ 500,00</p>
                </div>
                <div className={estilos.containerCards}>
                    <h3>Óculos Transition</h3>
                    <img src="/assets/oculos02.png" alt="óculos com lentes transition" title='Óculos Transition' />
                    <p>R$ 750,00</p>
                </div>

                <div className={estilos.containerCards}>
                    <h3>Óculos de Sol</h3>
                    <img src="/assets/oculos03.png" alt="óculos de sol" title='Óculos de Sol' />
                    <p>R$ 700,00</p>
                </div>
                
                <div className={estilos.containerCards}>
                    <h3>Óculos Infantil</h3>
                    <img src="/assets/oculos04.png" alt="óculos para crianças" title='Óculos Infantil' />
                    <p>R$ 500,00</p>
                </div>
            </div>

            <h2>Todos os nossos produtos incluem:</h2>

            <ul>
                <li>Garantia de 1 ano</li>
                <li>Manutenção preventiva</li>
                <li>Descontos especiais na compra da segunda unidade</li>
                <li>Flexibilidade de pagamento</li>
            </ul>

    
        </section>

      

    )
}