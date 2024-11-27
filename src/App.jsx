import React from 'react';
import './App.css';  // Importando corretamente o arquivo CSS
import AppContent from './components/AppContent';  // Corrigindo a importação de AppContent
import axios from 'axios';



export default function AppContent(){
    
  const [marca, setmarca] = useState('')
  const [modelo, setmodelo] = useState('')
  const [ano, setano] = useState('')
  const [prop, setprop] = useState('')
  const [cor, setcor] = useState('')

  useEffect (()  => {
  console.log(marca, modelo, ano, prop, cor)
  }, [marca, modelo, ano, prop, cor])

  async function registerVeiculo(){
      await axios.post("http://localhost:3000/add",
      {marca, modelo, ano, prop, cor})
  }
}

// Renomeando a função para evitar conflito com o nome App
function MainApp() {
  return (
    <div className="App">
      <AppContent />
    </div>
  );
}

export default MainApp;  // Exportando com o nome correto