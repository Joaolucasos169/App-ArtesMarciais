// src/pages/Login.jsx
import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/Login.module.css';

export default function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [mensagem, setMensagem] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://127.0.0.1:5000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, senha }),
      });

      const data = await response.json();

      if (response.ok) {
        setMensagem('Login realizado com sucesso!');
        // Exemplo: salvar token no localStorage e redirecionar
        // localStorage.setItem('token', data.token);
        // navigate('/dashboard');
      } else {
        setMensagem(data.message || 'Email ou senha inválidos.');
      }
    } catch (error) {
      console.error('Erro ao conectar com o backend:', error);
      setMensagem('Erro ao conectar com o servidor.');
    }
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

        {mensagem && <p className={styles.mensagem}>{mensagem}</p>}

        <div className={styles.links}>
          <Link to="/esqueceusenha">Esqueceu a senha?</Link>
          <span> | </span>
          <Link to="/register">Cadastrar-se</Link>
        </div>
      </form>
    </div>
  );
}
