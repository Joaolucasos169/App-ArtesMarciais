import styles from '../styles/Home.module.css';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className={styles.container}>
      {/* Navbar */}
      <header className={styles.navbar}>
        <h1 className={styles.logo}>Meu Dojô</h1>
        <nav>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#sobre">Sobre nós</a></li>
            <li><a href="#planos">Planos</a></li>
            <li><Link to="/">Login</Link></li>
            <li><Link to="/register">Cadastrar-se</Link></li>
          </ul>
        </nav>
      </header>

      {/* Seção principal */}
      <main className={styles.main}>
        <section id="home" className={styles.hero}>
          <h2>Bem-vindo ao Sistema de Gestão de Academias</h2>
          <p>Organize graduações, alunos e mensalidades com facilidade</p>

          <div className={styles.features}>
            <p>📚 Gerencie alunos, planos, faixas e histórico com poucos cliques.</p>
            <p>🎓 Controle de graduações e exames com emissão de certificados.</p>
            <p>💰 Acompanhe mensalidades, pagamentos e inadimplência.</p>
            <p>📱 Interface responsiva e simples para uso no celular ou computador.</p>
          </div>
        </section>

        <section id="planos" className={styles.plans}>
          <h2>Nossos Planos</h2>
          <div className={styles.planCards}>
            <div className={styles.planCard}>
              <h3>Plano Básico</h3>
              <p className={styles.highlight}>1º mês grátis</p>
              <ul>
                <li>Gerenciamento de alunos</li>
                <li>Graduação e exames</li>
                <li>Mensalidades</li>
                <li>Histórico de faixas</li>
              </ul>
              <p className={styles.price}>R$ 80,00/mês</p>
              <button>Assinar</button>
            </div>

            <div className={`${styles.planCard} ${styles.pro}`}>
              <h3>Plano Anual</h3>
              <p className={styles.highlight}>Mais econômico</p>
              <ul>
                <li>Todas as funções do plano básico</li>
                <li>Suporte prioritário</li>
                <li>Acesso a novos recursos antecipadamente</li>
              </ul>
              <p className={styles.price}>R$ 720,00/ano</p>
              <button>Assinar</button>
            </div>
          </div>

          <div className={styles.cta}>
            <button className={styles.primaryButton}>Comece seu teste gratuito</button>
            <p className={styles.note}>Teste grátis por 1 mês. Sem compromisso.</p>
          </div>
        </section>
      </main>
    </div>
  );
}
