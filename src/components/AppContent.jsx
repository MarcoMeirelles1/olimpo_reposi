import React, { useState } from 'react';
import ButtonGroup from './ButtonGroup'; 
import VideoBackground from './VideoBackground';
import Section from './Section';
import ImageGallery from './ImageGallery';
import TeamPhotos from './TeamPhotos';
import Cadastro from '../outros component/cadastro';

function AppContent() {
  // Defina o estado para controlar qual "página" será exibida
  const [currentPage, setCurrentPage] = useState('home');

  // Função para mudar a página
  const navigateTo = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="App">
      {/* Condicionalmente renderize o conteúdo com base no estado `currentPage` */}
      {currentPage === 'home' && (
        <>
          {/* Se estiver na página inicial */}
          <section className="main-section">
            <VideoBackground />
            <div className="overlay">
              <h1>SEJAM BEM-VINDOS AO OLIMPO!</h1>
              <ButtonGroup navigateTo={navigateTo} />
            </div>
          </section>

          {/* Seções subsequentes */}
          <Section title="Força, foco, disciplina" content="A motivação está dentro de você!">
            <ImageGallery />
          </Section>

          <Section title="No OLIMPO, cada treino é um desafio" content="Se desafie e evolua com a gente!">
            <img src="imagem4.jpg" alt="Desafio no OLIMPO" className="section-image" />
          </Section>

          <Section title="Equipe OLIMPO">
            <TeamPhotos />
          </Section>

          <Section title="Motivação e Resultados" content="Conquiste o seu melhor com a nossa equipe de treinadores especializados!">
            <img src="imagem5.jpg" alt="Academia" className="full-width-image" />
          </Section>

          {/* Rodapé */}
          <footer />
        </>
      )}

      {currentPage === 'cadastrar' && <Cadastro navigateTo={navigateTo} />} {/* Exibe o cadastro se a página for "cadastrar" */}
    </div>
  );
}

export default AppContent;
