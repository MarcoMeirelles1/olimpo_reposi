import React from 'react';
import './App.css';  // Importando corretamente o arquivo CSS
import AppContent from './components/AppContent';  // Corrigindo a importação de AppContent

// Renomeando a função para evitar conflito com o nome App
function MainApp() {
  return (
    <div className="App">
      <AppContent />
    </div>
  );
}

export default MainApp;  // Exportando com o nome correto