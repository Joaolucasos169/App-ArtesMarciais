import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/CadastroAluno.module.css';

const graduacoes = {
  "Jiu-Jitsu": ["Branca", "Azul", "Roxa", "Marrom", "Preta"],
  "Karate": ["Branca", "Amarela", "Vermelha", "Laranja", "Roxa", "Marrom", "Preta"],
  "Judô": ["Branca", "Amarela", "Laranja", "Verde", "Azul", "Roxa", "Marrom", "Preta"],
  "Muay Thai": [
    "Branco", "Vermelho e Branco", "Vermelho", "Vermelho e Azul Claro",
    "Azul Claro", "Azul Claro e Azul Escuro", "Azul Escuro",
    "Azul Escuro e Preto", "Preto", "Preto e Branco", "Preto, Branco e Vermelho"
  ],
};

const tiposSanguineos = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];

export default function CadastrarAluno() {
  const [formData, setFormData] = useState({
    nome: '',
    cpf: '',
    dataNascimento: '',
    foto: null,
    modalidades: [],
    graduacoes: {},
    contato: '',
    contatoEmergencia: '',
    tipoSanguineo: '',
    endereco: {
      rua: '',
      numero: '',
      complemento: '',
      bairro: '',
      cidade: '',
      estado: '',
      cep: ''
    }
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleEnderecoChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      endereco: {
        ...prev.endereco,
        [name]: value
      }
    }));
  };

  const handleFileChange = (field, e) => {
    setFormData((prev) => ({
      ...prev,
      [field]: e.target.files[0]
    }));
  };

  const toggleModalidade = (modalidade) => {
    setFormData((prev) => {
      const atual = [...prev.modalidades];
      if (atual.includes(modalidade)) {
        const novas = atual.filter(m => m !== modalidade);
        const graduacoesAtualizadas = { ...prev.graduacoes };
        delete graduacoesAtualizadas[modalidade];
        return { ...prev, modalidades: novas, graduacoes: graduacoesAtualizadas };
      } else {
        return {
          ...prev,
          modalidades: [...atual, modalidade],
          graduacoes: {
            ...prev.graduacoes,
            [modalidade]: { faixa: '', data: '', documento: null }
          }
        };
      }
    });
  };

  const handleGraduacaoChange = (modalidade, faixa) => {
    setFormData((prev) => ({
      ...prev,
      graduacoes: {
        ...prev.graduacoes,
        [modalidade]: {
          ...prev.graduacoes[modalidade],
          faixa
        }
      }
    }));
  };

  const handleGraduacaoDataChange = (modalidade, data) => {
    setFormData((prev) => ({
      ...prev,
      graduacoes: {
        ...prev.graduacoes,
        [modalidade]: {
          ...prev.graduacoes[modalidade],
          data
        }
      }
    }));
  };

  const handleGraduacaoDocumentoChange = (modalidade, file) => {
    setFormData((prev) => ({
      ...prev,
      graduacoes: {
        ...prev.graduacoes,
        [modalidade]: {
          ...prev.graduacoes[modalidade],
          documento: file
        }
      }
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // Enviar para o backend futuramente
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <h2 className={styles.formTitle}>Cadastrar Aluno</h2>

        {/* INFORMAÇÕES PESSOAIS */}
        <div className={styles.formSection}>
          <h3 className={styles.sectionTitle}>Informações Pessoais</h3>

          <div className={styles.formGroup}>
            <label className={styles.fileInputLabel}>Foto:</label>
            <input type="file" accept="image/*" onChange={(e) => handleFileChange('foto', e)} />
          </div>

          <div className={styles.formGroup}>
            <label>Nome Completo:</label>
            <input type="text" name="nome" value={formData.nome} onChange={handleChange} className={styles.input} required />
          </div>

          <div className={styles.formGroup}>
            <label>CPF:</label>
            <input type="text" name="cpf" value={formData.cpf} onChange={handleChange} className={styles.input} required />
          </div>

          <div className={styles.formGroup}>
            <label>Data de Nascimento:</label>
            <input type="date" name="dataNascimento" value={formData.dataNascimento} onChange={handleChange} className={styles.input} required />
          </div>

          <div className={styles.formGroup}>
            <label>Tipo Sanguíneo:</label>
            <select name="tipoSanguineo" value={formData.tipoSanguineo} onChange={handleChange} className={styles.input}>
              <option value="">Selecione</option>
              {tiposSanguineos.map((tipo) => (
                <option key={tipo} value={tipo}>{tipo}</option>
              ))}
            </select>
          </div>
        </div>

        {/* CONTATOS */}
        <div className={styles.formSection}>
          <h3 className={styles.sectionTitle}>Contatos</h3>

          <div className={styles.formGroup}>
            <label>Telefone/Celular:</label>
            <input type="text" name="contato" value={formData.contato} onChange={handleChange} className={styles.input} required />
          </div>

          <div className={styles.formGroup}>
            <label>Contato de Emergência:</label>
            <input type="text" name="contatoEmergencia" value={formData.contatoEmergencia} onChange={handleChange} className={styles.input} required />
          </div>
        </div>

        {/* ENDEREÇO */}
        <div className={styles.formSection}>
          <h3 className={styles.sectionTitle}>Endereço</h3>

          <div className={styles.formGroup}>
            <label>Rua:</label>
            <input type="text" name="rua" value={formData.endereco.rua} onChange={handleEnderecoChange} className={styles.input} required />
          </div>

          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <label>Número:</label>
              <input type="text" name="numero" value={formData.endereco.numero} onChange={handleEnderecoChange} className={styles.input} required />
            </div>
            <div className={styles.formGroup}>
              <label>Complemento:</label>
              <input type="text" name="complemento" value={formData.endereco.complemento} onChange={handleEnderecoChange} className={styles.input} />
            </div>
          </div>

          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <label>Bairro:</label>
              <input type="text" name="bairro" value={formData.endereco.bairro} onChange={handleEnderecoChange} className={styles.input} required />
            </div>
            <div className={styles.formGroup}>
              <label>Cidade:</label>
              <input type="text" name="cidade" value={formData.endereco.cidade} onChange={handleEnderecoChange} className={styles.input} required />
            </div>
          </div>

          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <label>Estado:</label>
              <input type="text" name="estado" value={formData.endereco.estado} onChange={handleEnderecoChange} className={styles.input} required />
            </div>
            <div className={styles.formGroup}>
              <label>CEP:</label>
              <input type="text" name="cep" value={formData.endereco.cep} onChange={handleEnderecoChange} className={styles.input} required />
            </div>
          </div>
        </div>

        {/* MODALIDADES E GRADUAÇÕES */}
        <div className={styles.formSection}>
          <h3 className={styles.sectionTitle}>Modalidades e Graduações</h3>

          <label>Modalidades:</label>
          {Object.keys(graduacoes).map((mod) => (
            <div key={mod} className={styles.modalidadeItem}>
              <label className={styles.modalidadeCheckbox}>
                <input
                  type="checkbox"
                  checked={formData.modalidades.includes(mod)}
                  onChange={() => toggleModalidade(mod)}
                />
                {mod}
              </label>

              {formData.modalidades.includes(mod) && (
                <div className={styles.graduacaoContainer}>
                  <select
                    value={formData.graduacoes[mod]?.faixa || ''}
                    onChange={(e) => handleGraduacaoChange(mod, e.target.value)}
                    className={styles.input}
                  >
                    <option value="">Selecione a graduação</option>
                    {graduacoes[mod].map((g) => (
                      <option key={g} value={g}>{g}</option>
                    ))}
                  </select>

                  <div className={styles.formGroup}>
                    <label>Data da última graduação:</label>
                    <input
                      type="date"
                      value={formData.graduacoes[mod]?.data || ''}
                      onChange={(e) => handleGraduacaoDataChange(mod, e.target.value)}
                      className={styles.input}
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label>Documento que comprova a graduação:</label>
                    <input
                      type="file"
                      accept=".pdf,.jpg,.png"
                      onChange={(e) => handleGraduacaoDocumentoChange(mod, e.target.files[0])}
                    />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <button type="submit" className={styles.submitButton}>Cadastrar Aluno</button>
        
        <div className={styles.links}>
          <Link to="/">Voltar para o login</Link>
        </div>
      </form>
    </div>
  );
}
