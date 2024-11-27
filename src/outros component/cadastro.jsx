// src/components/Cadastro.jsx
import React from 'react';

function Cadastro({ navigateTo }) {
  return (
    <div className="cadastro-page">
      <h1>Página de Cadastro</h1>
      <form>
        <label>
          Nome:
          <input type="text" name="nome" />
        </label>
        <label>
          Email:
          <input type="email" name="email" />
        </label>
        <label>
          CPF:
          <input type="text" name="CPF" />
        </label>
        <button type="submit">Cadastrar</button>
      </form>
      <button onClick={() => navigateTo('home')}>Voltar para a Home</button>
    </div>
  );
}
export default Cadastro;
