import React, { useState } from 'react';
import './App.css';

function App() {
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 100, y: 100 });

  // Función para mover el botón "No" a una posición aleatoria
  const moveNoButton = () => {
    const newX = Math.random() * (window.innerWidth - 100); // Limita la posición dentro del ancho de la ventana
    const newY = Math.random() * (window.innerHeight - 100); // Limita la posición dentro de la altura de la ventana
    setNoButtonPosition({ x: newX, y: newY });
  };

  const handleYes = () => {
    alert('Te amo mucho mi amor, eres la mejor persona que he conocido en mi vida, te amo, te veo el miercoles');
  }

  return (
    <div className="h-screen bg-[#B784B7] items-start justify-center py-10">
      <section class="w-full py-12 md:py-24 lg:py-32">
        <div class="container px-4 md:px-6 flex flex-col items-center justify-center space-y-4 text-center">
          <div class="space-y-2">
            <h1 class="text-3xl font-bold tracking-tighter sm:text-5xl">Hola mi amor</h1>
            <p class="max-w-[600px] text-pink-50 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-white">
              Eres mi sol, mi luz de luna y todo lo demás. Contigo, cada momento se llena de amor y alegría. Eres la persona más hermosa que conozco, por dentro y por fuera. Agradezco cada día tu amor, tu amabilidad y tu apoyo inquebrantable. Aprecio cada momento que pasamos juntos y espero vivir toda una vida creando recuerdos contigo. Te amo más de lo que las palabras pueden expresar. Por siempre y para siempre, tu. &lt;3&lt;3&lt;3


              te amo, att tu novio
            </p>
          </div>
        </div>
      </section>
      <section className="px-40">
        <div className="items-center justify-center h-full">
          <h1 class="text-3xl font-bold tracking-tighter sm:text-5xl">Quieres ser mi valentin este miercoles? </h1>
          <button 
            onClick={handleYes} 
            className="px-10 bg-[#EEA5A6] w-40 h-10 rounded-lg text-white font-bold text-xl"
            >Sí</button>
          <button
            className="px-10 bg-[#EEA5A6] w-40 h-10 rounded-lg text-white font-bold text-xl"
            style={{ position: 'absolute', top: noButtonPosition.y, left: noButtonPosition.x }}
            onMouseEnter={moveNoButton}
          >
            No
          </button>
        </div>
      </section>
    </div>
  );
}

export default App;
