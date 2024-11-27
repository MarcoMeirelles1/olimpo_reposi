// src/components/ButtonGroup.jsx
import React from 'react';

function ButtonGroup({ navigateTo }) {
  return (
    <div className="buttons">
      {/* Clique no botão para ir para a página de cadastro */}
      <button onClick={() => navigateTo('cadastrar')}>Cadastrar</button>
      {/* Outros botões */}
      <button className="button" onClick={() => navigateTo('produtos')}>Produtos</button>
    </div>
  );
}

export default ButtonGroup;
