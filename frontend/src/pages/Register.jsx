import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/Register.module.css'

export default function Register() {
    const [formData, setFormData] = useState({
        nome: '',
        cpfCnpj: '',
        logo: '',
        endereco: '',
        telefone: '',
        modalidades: [],
        email: '',
        senha: '',
        confirmarSenha: '',
    });

    const modalidadesDisponiveis = ['Jiu-Jitsu', 'Karate', 'Judô', 'Muay Thai'];

    const handleChange = (e) => {
        const { name, value, type, files } = e.target;

        if (type === 'file') {
            setFormData({ ...formData, [name]: files[0] });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleModadlidadesChange = (modalidade) => {
        setFormData((prev) => {
            const selecionadas = prev.modalidades.includes(modalidade)
                ? prev.modalidades.filter((m) => m !== modalidade)
                : [...prev.modalidades, modalidade];
            return { ...prev, modalidades: selecionadas };
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Dados enviados:', formData)
    };

    return (
        <div className={styles.container}>
            <form className={styles.form} onSubmit={handleSubmit}>
                <h2>Cadastro da Academia</h2>

                <input
                    type="text"
                    name="nome"
                    placeholder="Nome da academia"
                    value={formData.nome}
                    onChange={handleChange}
                    required
                />

                <input
                    type="text"
                    name="cpfCnpj"
                    placeholder="CPF ou CNPJ"
                    value={formData.cpfCnpj}
                    onChange={handleChange}
                    required
                />

                <input
                    type="text"
                    name="telefone"
                    placeholder="telefone"
                    value={formData.telefone}
                    onChange={handleChange}
                    required
                />

                <input
                    type="text"
                    name="endereco"
                    placeholder="Endereço"
                    value={formData.endereco}
                    onChange={handleChange}
                    required
                />


                <div className={styles.grupoModalidades}>
                    <label className={styles.modalidadeTitulo}>Modalidades:</label>
                    <div className={styles.modalidades}>
                        {modalidadesDisponiveis.map((modalidade) => (
                            <label key={modalidade}>
                                <input
                                    type="checkbox"
                                    value={modalidade}
                                    checked={formData.modalidades?.includes(modalidade)}
                                    onChange={() => handleModadlidadesChange(modalidade)}
                                />
                                {modalidade}
                            </label>
                        ))}
                    </div>
                </div>

                <input
                    type="email"
                    name="email"
                    placeholder="E-mail de acesso"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />

                <input
                    type="password"
                    name="senha"
                    placeholder="Digite sua senha"
                    value={formData.senha}
                    onChange={handleChange}
                    required
                />

                <input
                    type="password"
                    name="confirmarSenha"
                    placeholder="Confirmar senha"
                    value={formData.confirmarSenha}
                    onChange={handleChange}
                    required
                />

                <label className={styles.labelLogo}>Logo da academia:</label>
                <input
                    type="file"
                    name="logo"
                    accept="image/*"
                    className={styles.inputLogo}
                    onChange={handleChange}
                />

                <button type="submit">Cadastrar</button>

                <div className={styles.links}>
                    <Link to="/">Voltar para o login</Link>
                </div>
            </form>
        </div>
    );
}