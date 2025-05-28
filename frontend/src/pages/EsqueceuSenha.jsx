import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/EsqueceuSenha.module.css';

export default function EsqueceuSenha() {
    const [metodo, setMetodo] = useState('email');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (metodo === 'email') {
            console.log('Recuperação via e-mail:', email);
        } else {
            console.log('Recuperação via telefone:', telefone);
        }
    };

    return (
        <div className={styles.container}>
            <form className={styles.form} onSubmit={handleSubmit}>
                <h2>Recuperar Senha</h2>

                <div className={styles.toggleMetodo}>
                    <button
                        type="button"
                        className={metodo === 'email' ? styles.active : ''}
                        onClick={() => setMetodo('email')}
                    >
                        E-mail
                    </button>
                    <button
                        type="button"
                        className={metodo === 'telefone' ? styles.active : ''}
                        onClick={() => setMetodo('telefone')}
                    >
                        Telefone
                    </button>
                </div>

                {metodo === 'email' ? (
                    <>
                        <p>Informe seu e-mail para enviarmos um link de recuperação.</p>
                        <input
                            type="email"
                            placeholder="Digite seu e-mail"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </>
                ) : (
                    <>
                        <p>Informe seu número de telefone com DDD.</p>
                        <input
                            type="tel"
                            placeholder="Digite seu número"
                            value={telefone}
                            onChange={(e) => {
                                const valor = e.target.value;
                                const apenasPermitidos = valor.replace(/[^0-9().-]/g, '');
                                setTelefone(apenasPermitidos);
                            }}
                            required
                        />
                    </>
                )}

                <button type="submit">Enviar</button>

                <div className={styles.links}>
                    <Link to="/">Voltar para o login</Link>
                </div>
            </form>
        </div>
    );
}
