// src/components/home.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/home.css';

const Home = () => {
  return (
    <div className="home">
      <div className="banner">
        <h1>Bem-vindo ao ClassConnect</h1>
        <p>Conectando famílias e escolas de forma eficiente e segura.</p>
      </div>
      <div className="intro">
        <h2>Sobre Nós</h2>
        <p>
          No ClassConnect, nosso objetivo é facilitar a comunicação entre a escola e a família, proporcionando um ambiente seguro e acessível para todos os envolvidos. Acompanhe o desempenho dos alunos, mantenha-se atualizado com eventos importantes e muito mais.
        </p>
      </div>
      <div className="cards">
        <Link to="/dashboard" className="card">
          <h3>Dashboard</h3>
          <p>Veja um resumo do desempenho e atividades recentes dos alunos.</p>
        </Link>
        <Link to="/students" className="card">
          <h3>Alunos</h3>
          <p>Acesse informações detalhadas sobre cada aluno.</p>
        </Link>
        <Link to="/communication" className="card">
          <h3>Comunicação</h3>
          <p>Envie e receba mensagens dos professores e da equipe escolar.</p>
        </Link>
      </div>
    </div>
  );
};

export default Home;
