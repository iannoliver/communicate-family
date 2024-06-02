// src/components/Communication.js
import React, { useState } from 'react';
import '../styles/communication.css';

const Communication = () => {
  const [mensagens, setMensagens] = useState([
    { id: 1, remetente: 'Professor', texto: 'Por favor, lembre-se da reunião na sexta-feira.' },
    { id: 2, remetente: 'Responsável', texto: 'Obrigado pelo lembrete!' },
  ]);

  const [novaMensagem, setNovaMensagem] = useState('');

  const handleSend = () => {
    const novaMsg = {
      id: mensagens.length + 1,
      remetente: 'Responsável',
      texto: novaMensagem,
    };
    setMensagens([...mensagens, novaMsg]);
    setNovaMensagem('');
  };

  return (
    <div>
      <h2>Comunicação</h2>
      <div className="mensagens">
        {mensagens.map(msg => (
          <div key={msg.id} className={`mensagem ${msg.remetente}`}>
            <p>{msg.remetente}: {msg.texto}</p>
          </div>
        ))}
      </div>
      <div className="enviar-mensagem">
        <input
          type="text"
          value={novaMensagem}
          onChange={e => setNovaMensagem(e.target.value)}
          placeholder="Digite uma mensagem..."
        />
        <button onClick={handleSend}>Enviar</button>
      </div>
    </div>
  );
};

export default Communication;
