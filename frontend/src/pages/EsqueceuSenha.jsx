import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/EsqueceuSenha.module.css'

export default function EsqueceuSenha() {
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Solicitação de recuperação de senha para:', email);
    
    };

    return (
        <div className={styles.container}>
            <form className={styles.form} onSubmit={handleSubmit}>
                <h2>Recuperar Senha</h2>
                <p>Informe seu e-mail para enviarmos um link de recuperação.</p>
                <input 
                    type="email"
                    placeholder="Digite seu e-mail"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required />

                <button type="submit">Enviar</button>

                <div className={styles.links}>
                    <Link to="/">Voltar para o login</Link>
                </div>
            </form>
        </div>
    );
}