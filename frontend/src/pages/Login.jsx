// src/pages/Login.jsx
import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/Login.module.css';

export default function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Email:', email, 'Senha:', senha);//Chamada para o backend depois
  };

  return (
    <div className={styles.loginContainer}>
      <form className={styles.loginForm} onSubmit={handleLogin}>
        <h2>Login</h2>
        <input
          type="email"
          placeholder="Digite seu e-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Digite sua senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          required
        />
        <button type="submit">Entrar</button>

        <div className={styles.links}>
          <Link to="/esqueceusenha">Esqueceu a senha?</Link>
          <span> | </span>
          <Link to='/register'>Cadastrar-se</Link>
        </div>
      </form>
    </div>
  );
}
