import React, { useState } from "react";

export default function Forms() {
  const [formData, setFormData] = useState({
    nome: "",
    funcionarios: "",
    email: "",
    idade: "",
    segmento: "",
    quantia: "",
    carencia: "",
    objetivo: "",
    nota: 0,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const { nome, funcionarios, email, idade, segmento, quantia, carencia, objetivo } =
      formData;

    const nota =
      (parseFloat(idade) +
        parseFloat(segmento) +
        parseFloat(quantia) +
        parseFloat(carencia)) *
      1.25;

    const jsonData = JSON.stringify({
      nome,
      funcionarios,
      email,
      idade,
      segmento,
      quantia,
      carencia,
      objetivo,
      nota,
    });

    console.log(jsonData);
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateFuncionarios = (funcionarios) => {
    const funcionariosRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return funcionariosRegex.test(funcionarios);
  };

  return (
    <>
      <h1>Forms</h1>

      <form id="formularioEmprestimo" onSubmit={handleSubmit}>
        <label htmlFor="NOME">Nome:</label>
        <br />
        <input
          type="text"
          id="NOME"
          name="nome"
          value={formData.nome}
          onChange={handleChange}
        />
        <br />

        <label htmlFor="EMAIL">Email:</label>
        <br />
        <input
          type="text"
          id="EMAIL"
          name="email"
          value={formData.email}
          onChange={handleChange}
          pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
          title="Por favor, insira um email válido."
          required
        />
        <br />

        <label htmlFor="FUNCIONARIOS">Numero de funcionários:</label>
        <br />
        <input
          type="text"
          id="FUNCIONARIOS"
          name="funcionarios"
          value={formData.funcionarios}
          onChange={handleChange}
          pattern="^\d+$"
          title="Por favor, insira um número válido."
          required
        />
        <br />

        <label htmlFor="IDADE">Qual a idade da empresa:</label>
        <br />
        <select
          name="idade"
          id="IDADE"
          value={formData.idade}
          onChange={handleChange}
        >
            <option value="">-----</option>
          <option value="0.15">Menos de 1 ano</option>
          <option value="0.25">Entre 1 e 2 anos</option>
          <option value="0.40">Entre 2 e 4 anos</option>
          <option value="0.50">Entre 4 e 8 anos</option>
          <option value="0.75">Entre 8 e 16 anos</option>
          <option value="1.00">Mais de 16 anos</option>
        </select>
        <br />

        <label htmlFor="SEGMENTO">Qual o segmento de empresa:</label>
        <br />
        <select
          name="segmento"
          id="SEGMENTO"
          value={formData.segmento}
          onChange={handleChange}
        >
            <option value="">-----</option>
          <option value="0.90">Gestão estratégica</option>
          <option value="0.91">Gestão operacional</option>
          <option value="1.00">Gestão financeira</option>
          <option value="0.51">Gestão de recursos humanos</option>
          <option value="0.30">Marketing e vendas</option>
          <option value="0.80">Gestão de tecnologia da informação</option>
          <option value="0.70">Varejo</option>
          <option value="0.49">Gestão de cadeia de suprimentos</option>
          <option value="0.52">Gestão de qualidade</option>
          <option value="0.60">Pesquisa e desenvolvimento</option>
          <option value="0.71">Gestão de inovação</option>
          <option value="0.31">Relações públicas e comunicação</option>
          <option value="0.48">Gestão de sustentabilidade</option>
          <option value="0.69">Planejamento estratégico</option>
          <option value="0.81">Análise de mercado</option>
          <option value="0.72">Consultoria empresarial</option>
          <option value="0.90">Gestão de riscos</option>
          <option value="0.79">Gerenciamento de projetos</option>
          <option value="0.40">Relações governamentais</option>
          <option value="0.68">Responsabilidade social corporativa</option>
        </select>
        <br />

        <label htmlFor="QUANTIA">Valor requerido:</label>
        <br />
        <select
          name="quantia"
          id="QUANTIA"
          value={formData.quantia}
          onChange={handleChange}
        >
            <option value="">-----</option>
          <option value="0.10">Menos que R$10.000,00</option>
          <option value="0.25">Entre R$10.000,00 e 50.000,00</option>
          <option value="0.45">Entre R$50.000,00 e 200.000,00</option>
          <option value="0.70">Entre R$200.000,00 e 1.000.000,00</option>
          <option value="1.00">Entre R$1.000.000,00 e 5.000.000,00</option>
          <option value="0.80">Entre R$5.000.000,00 e 20.000.000,00</option>
          <option value="0.50">Entre R$20.000.000,00 e 100.000.000,00</option>
          <option value="0.20">Mais que R$100.000.000,00</option>
        </select>
        <br />

        <label htmlFor="CARENCIA">Meses de carência:</label>
        <br />
        <select
          name="carencia"
          id="CARENCIA"
          value={formData.carencia}
          onChange={handleChange}
        >
            <option value="">-----</option>
          <option value="1.00">Nenhum</option>
          <option value="0.90">Um bimestre</option>
          <option value="0.50">Um semestre</option>
          <option value="0.30">Menos que um ano</option>
        </select>
        <br />

        <label htmlFor="OBJETIVO">Objetivos:</label>
        <br />
        <textarea
          id="OBJETIVO"
          name="objetivo"
          rows="7"
          cols="75"
          value={formData.objetivo}
          onChange={handleChange}
        ></textarea>
        <br />
        <br />

        <input type="submit" value="Submit" />
      </form>
    </>
  );
}
